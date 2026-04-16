export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const heroContent = {
  name: "Ganesh Shinde",
  title: "AI Product Engineer & Full-Stack Developer",
  subtitle:
    "I build end‑to‑end LLM products — from health analysis on Vertex/Gemini to B2B workflows and CI/CD automation.",
  location: "Bengaluru, India · Open to remote founding/early AI roles",
  topTagline: "Scaling AI Systems with Intent",
};
export const gridItems = [
  {
    id: 1,
    title: "0→1 AI health systems",
    description: "AI health platform turning lab data into structured reports.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "AI marketing strategist (Stratifai)",
    description:
      "SaaS that turns a product URL/description into full marketing strategy.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "B2B workflows & unified comms",
    description: "Platform unifying B2B orders and buyer–seller communication.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "SCM & CI/CD automation",
    description: "SCM integrations and dynamic CI/CD for security scans.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Front‑end craft with purpose",
    description: "Clean React/Next.js UIs for complex AI workflows.",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Ownership, speed & systems thinking",
    description: "Fast ramp, deep ownership across stack and systems.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "HealthAI – AI-powered health report pipeline",
    des: "End-to-end health analysis platform using Vertex AI (Gemini) that ingests lab PDFs/CSVs and health assessments, runs multi-step analysis, and outputs structured JSON plus human-readable reports. Reduced manual report creation from 2–5 days to under a minute.",
    img: "/p1.png",
    iconLists: ["/python.svg", "/gemini.svg", "/vertexai.svg"],
    link: "https://healthai-by-ganesh-shinde.streamlit.app/",
  },
  {
    id: 2,
    title: "Stratifai – 60-second AI marketing strategist",
    des: "SaaS app that takes a product URL/description, scrapes and understands it, then runs a 3-step LLM pipeline (understanding → strategy → content) to generate ICP, messaging angles, ad copy, a 3-email sequence, and landing page structure with export options. Used by early-stage founders as a faster way to go from idea to launch-ready campaigns.",
    img: "/p2.png",
    iconLists: [
      "/python.svg",
      "/gemini.svg",
      "/vertexai.svg",
      "/next.svg",
      "/ts.svg",
    ],
    link: "https://stratifai-3znf.vercel.app/",
  },
  {
    id: 3,
    title: "Napkin – B2B ordering & communication platform",
    des: "B2B platform for suppliers and buyers (e.g., alcohol brands and retail shops) to manage orders and communication in one place. Supports in-app ordering plus an email-to-chat bridge where each seller gets a dedicated email, and all email orders/messages are surfaced as chat threads inside the product.",
    img: "/p3.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/firebase.svg"],
    link: "https://napkin-b2b-app.vercel.app/",
  },
  {
    id: 4,
    title: "Cloudinary Image Editor – 'Photo Shop'",
    des: "Full-stack image management and editing app. Users upload images from multiple sources (device, web, Google Drive, Dropbox, stock providers), store them on Cloudinary, organize into albums, like/favorite, and apply edits like blur, grayscale, pixelate, background removal, and generative fill.",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/cloudinary.svg"],
    link: "https://cloudinary-image-editor.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Ganesh was a pleasure. His quick understanding and agile execution ensured smooth project delivery and high-quality results.",
    name: "Chaitanya Pandit",
    title: "Founder's Office at Jericho Ventures",
    img: "/chaitanya.png",
  },
  {
    quote:
      "Impressed by Ganesh's dedication and strong determination to deliver quality work, which ensured the project met all expectations.",
    name: "Yash Rajan Shukla",
    title: "CTO at ParaTalks",
    img: "/yash.jpeg",
  },
  {
    quote:
      "Ganesh effectively delivered the website on time, meeting our regulatory needs and setting the stage for future expansion.",
    name: "Sayantan Datta",
    title: "Co-founder at Bsides Kolkata",
    img: "/sayantan.png",
  },
  {
    quote:
      "Throughout his internship, Ganesh's proficiency in web development shone brightly, delivering high-quality code with precision and creativity.",
    name: "Samiksha Taru",
    title: "Founder at Haraay Design Studio",
    img: "/samiksha.jpeg",
  },
  {
    quote:
      "Ganesh demonstrated exceptional teamwork and adaptability, making valuable contributions to our projects throughout his internship.",
    name: "Pathik Patel",
    title: "Senior Software Developer at GT Pvt. Ltd",
    img: "/pathi.jpg",
  },
];

export const companies = [
  {
    id: 1,
    name: "Jericho Ventures",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "ParaTalks",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "Bsides Kolkata",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "Haraay Design Studio",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "GT Pvt. Ltd",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer (Frontend & CI/CD Systems)",
    company: "Black Duck",
    period: "Nov 2025 – Present · Bengaluru · Hybrid",
    desc: "Building features for an integration platform that connects SCMs (GitHub, GitLab, Bitbucket, Azure) with automated security scanning workflows. Own GitLab integration end-to-end, including UI, workflow logic, and dynamic OS-aware CI/CD YAML generation across different runners and regularly debug production issues in a 9+ product environment.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Founding AI & Full-Stack Engineer",
    company: "Bewell",
    period: "May 2025 – Oct 2025 · Remote (SF-based startup)",
    desc: "Built and scaled an AI-powered health analysis platform from 0→1, designing LLM systems on Gemini/Vertex AI to convert unstructured health data into structured insights and automated reports.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "AI & Frontend Engineer",
    company: "Bewell - Internship",
    period: "Nov 2024 – Apr 2025 · Remote",
    desc: "Built the Bewell mobile app from scratch and launched beta on Play Store and App Store, integrating AI-powered health insights and React-based admin tools.",
    className: "md:col-span-1",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full-Stack / Frontend Internships",
    company: "Haraay Studio, ParaTalks, OSCode, LoGrow - Internship",
    period: "2023 – 2024 · Remote",
    desc: "Delivered production features across web and mobile using React, Next.js, Flutter, Node.js, and Firebase for multiple clients and startups.",
    className: "md:col-span-1",
    thumbnail: "/exp4.svg",
  },
];

export const socials = {
  github: "https://github.com/Ganeshshinde-2003",
  linkedin: "https://www.linkedin.com/in/dev-ganesh-shinde/",
  twitter: "",
};

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: socials.github,
  },
  {
    id: 2,
    img: "/link.svg",
    link: socials.linkedin,
  },
];
