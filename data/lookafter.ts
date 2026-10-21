// Content for the LookAfter AI case study (app/case-studies/lookafter-ai).
// Keep every number here tied to a measured source. Eval figures are from the
// 41-question retrieval eval run in May 2026.

export const lookafter = {
  name: "LookAfter AI",
  tagline: "An AI health companion that answers from a clinical knowledge base and your own family's records.",
  liveUrl: "https://www.lookafterai.health/",
  playStoreUrl: "https://play.google.com/store/apps/details?id=com.lookafterai.health",
  // iOS is not live yet. Set to the App Store URL to turn the button into a link.
  appStoreUrl: "",
  // File names in /public (e.g. "/lookafter-shot-1.png"). The strip renders only when this has entries.
  screenshots: [
    { src: "/lookafter-shot-1.jpg", alt: "LookAfter AI home screen showing a four-person family circle and an alert that Dad missed a medication" },
    { src: "/lookafter-shot-2.jpg", alt: "LookAfter AI chat asking whether Mom took her medication today" },
    { src: "/lookafter-shot-5.jpg", alt: "Biomarker screen with 118 markers grouped as optimal, watch and out of range" },
    { src: "/lookafter-shot-6.jpg", alt: "Health analysis screen after uploading a lab report, with a health score and four pillars" },
    { src: "/lookafter-shot-3.jpg", alt: "Monthly summary for a family member with key biomarkers" },
    { src: "/lookafter-shot-4.jpg", alt: "Biological age screen with the factors that shape it" },
  ] as { src: string; alt: string }[],
  role: "Founder, LookAfter AI",
  stack: [
    "React Native + Expo",
    "Python Flask",
    "Gemini 2.5 Flash on Vertex AI",
    "Postgres + pgvector",
    "Cloud Run + Cloud Tasks",
    "Next.js admin panel",
  ],
  stats: [
    { value: "97.6%", label: "retrieval hit@1", note: "40 of 41 eval questions, May 2026" },
    { value: "100%", label: "hit@4", note: "right chunk always in the 4 sent to the model" },
    { value: "0.988", label: "MRR", note: "up from 0.862 before the blend" },
    { value: "4,285", label: "KB chunks", note: "7 US public-domain sources, 9 specialties" },
  ],
  problem:
    "Health chatbots tend to answer from memory, so you can't tell where a claim came from, and they know nothing about your own labs or your family. I wanted an assistant that answers from vetted sources, cites them, and also uses the user's own records, with family sharing that respects who is allowed to see what.",
  research: {
    title: "How I chose the knowledge base",
    intro:
      "Before writing any retrieval code I spent the time on the sources. For a health app, where the text comes from matters more than how clever the search is.",
    steps: [
      "Started with licensing, not content. I only used pages from US federal agencies, which are public domain (17 USC 105), so there is no licence, attribution or takedown risk.",
      "Dropped the sources I could not use. NHS, WHO, NICE, RCOG, ACOG and heart.org are under open-government, non-commercial or copyright terms, so the app links to them instead of ingesting them. FDA pages blocked automated collection and the ODS fact sheets did not make the final set.",
      "Kept seven sources: MedlinePlus, NIDDK, CDC, NHLBI, NICHD, NIMH and health.gov. Skipped anything paywalled or behind a login.",
      "Sorted every file into one of nine specialty folders. The folder name becomes the specialty tag, which is what the question router filters on.",
      "Logged every file with its source URL. Each chunk keeps its source and link, so an answer can cite where it came from.",
      "Tested chunk sizes against the eval. Finer chunking raised the chunk count from 1,420 to 1,928 with no change in score, so the section-aware setup stayed.",
    ],
    doctorsTitle: "Talking to doctors",
    doctors:
      "I walked three doctors I know personally through the product and its safety rules (it never diagnoses, and red-flag symptoms go to a clinician). These were informal conversations with people I trust, not a formal clinical review or sign-off, and I don't claim the app is clinically validated.",
  },
  pipeline: [
    {
      step: "Index",
      text: "Seven US-government public-domain sources (MedlinePlus, NIDDK, CDC, NHLBI, NICHD, NIMH, health.gov) are split into section-aware chunks (1,800 characters target, 3,000 max, 220 overlap), embedded with Vertex text-embedding-004 (768 dimensions) and stored in Postgres with pgvector.",
    },
    {
      step: "Retrieve (hybrid)",
      text: "Each question runs two searches in parallel: a vector search (HNSW index, cosine distance) and a Postgres full-text search (GIN index on a tsvector column). Vectors catch meaning, keywords catch exact terms like HbA1c or LDL.",
    },
    {
      step: "Fuse and rerank",
      text: "Reciprocal Rank Fusion merges the two lists (1 / (60 + rank), so differently scaled scores never mix), then a blend of 0.2 x RRF + 0.8 x cosine, both min-max normalised, picks the final order. A keyword map routes the question to a specialty first and falls back to an unfiltered search when the routed one returns fewer than 2 results.",
    },
    {
      step: "Grade (CRAG-style)",
      text: "A score-based grader checks the best chunk. At 0.62 or above it accepts. Below that it widens the search by dropping the specialty filter, keeps only chunks above a floor of 0.38, and returns nothing if none qualify, so the answer is marked ungrounded instead of carrying a fake citation. There is no LLM judge and no web fallback, so I call it CRAG-style rather than the full paper.",
    },
    {
      step: "Generate",
      text: "Gemini answers from the surviving chunks with citations. Results are cached for an hour (LRU, 256 entries) and query embeddings are cached separately.",
    },
  ],
  evalRows: [
    { stage: "Vector search only", hit1: "78.0%", mrr: "0.850" },
    { stage: "+ specialty routing", hit1: "-", mrr: "0.862", note: "hit@4 reached 100%" },
    { stage: "+ RRF and cosine blend", hit1: "97.6%", mrr: "0.988" },
  ],
  evalNote:
    "41 patient-style questions with expected source topics, plus 3 off-topic questions to test the grader. The one remaining edge case is a yeast-infection question: the broader Vaginitis page ranks first (0.66) and the exact page second (0.64), still inside the top 4. These are retrieval metrics, not answer accuracy.",
  privacy: [
    "Personal records live in their own embedded table and are retrieved with the same hybrid idea (top 6, similarity threshold 0.45).",
    "The family sharing rule is enforced in the retrieval code, not in the prompt. A relative's chunk comes back only if sharing allows it, and sensitive items such as period data are redacted before the model sees them.",
    "The latest three chunks per family member are always included so a fresh record is not lost to a weak embedding match.",
  ],
  designRule: {
    quote: "The model proposes language. Code decides numbers and what renders.",
    text: "A code-owned confidence tier (1 to 4, based on how many data points back an answer) decides which UI blocks may appear and how ambitious the wording can be. Trend language is only allowed with at least three supporting points, and code strips it otherwise. The model cannot raise its own confidence.",
  },
  built: [
    "Expo / React Native app with family members, an AI assistant, lab-upload analysis and daily logging",
    "Flask backend on Cloud Run with Cloud Tasks for async work and Neon Postgres",
    "Admin panel in Next.js",
    "Release gate in the eval script: hit@4 of at least 85% and full off-topic safety before a KB change ships",
  ],
};
