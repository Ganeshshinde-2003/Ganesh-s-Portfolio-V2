import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ganeshshinde2003.netlify.app"),
  title: "Ganesh Shinde | AI Product Engineer & Full-Stack Developer",
  description:
    "AI product engineer building end-to-end LLM systems, health analysis pipelines, B2B workflows, and CI/CD integrations. Full-stack developer with React, Next.js, TypeScript. Previously founding AI engineer at Bewell, software engineer at Black Duck.",
  keywords: [
    "Ganesh Shinde",
    "AI product engineer",
    "full-stack developer",
    "LLM systems",
    "AI engineer",
    "React developer",
    "Next.js developer",
    "TypeScript",
    "Gemini API",
    "Vertex AI",
    "prompt engineering",
    "AI automation",
    "health AI",
    "Stratifai",
    "HealthAI",
    "startup engineer",
    "founding engineer",
    "AI SaaS",
    "product engineer",
    "Flutter developer",
    "backend engineer",
    "frontend engineer",
    "full-stack engineer",
    "Bengaluru developer",
    "India developer",
    "YC startup experience",
    "CI/CD integration",
    "security scanning",
    "AI workflows",
    "data analysis",
    "B2B platform",
    "developer tools",
    "AI assistant",
    "generative AI",
    "machine learning engineer",
  ],
  openGraph: {
    title: "Ganesh Shinde | AI Product Engineer & Full-Stack Developer",
    description:
      "Building end-to-end AI systems, LLM workflows, and full-stack products. Founding engineer experience with AI startups.",
    url: "https://ganeshshinde2003.netlify.app",
    siteName: "Ganesh Shinde Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ganesh Shinde - AI Product Engineer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh Shinde | AI Product Engineer & Full-Stack Developer",
    description:
      "Building end-to-end AI systems, LLM workflows, and full-stack products.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://ganeshshinde2003.netlify.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />

        {/* Structured Data - Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Ganesh Shinde",
              url: "https://ganeshshinde2003.netlify.app",
              image: "/og-image.png",
              jobTitle: "AI Product Engineer & Full-Stack Developer",
              location: {
                "@type": "Place",
                name: "Bengaluru, Karnataka, India",
              },
              email: "ganeshshinde2003@gmail.com",
              sameAs: [
                "https://github.com/Ganeshshinde-2003",
                "https://linkedin.com/in/dev-ganesh-shinde/",
              ],
              description:
                "AI product engineer building end-to-end LLM systems, health analysis pipelines, B2B workflows, and CI/CD integrations. Full-stack developer with React, Next.js, TypeScript expertise.",
            }),
          }}
        />

        {/* Structured Data - Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://ganeshshinde2003.netlify.app",
              name: "Ganesh Shinde Portfolio",
              description:
                "Portfolio showcasing AI product engineering, full-stack development, and LLM systems.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://ganeshshinde2003.netlify.app?search={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="AI product engineer building end-to-end LLM systems, health analysis pipelines, B2B workflows, and CI/CD integrations."
        />
        <meta name="author" content="Ganesh Shinde" />
        <meta
          name="keywords"
          content="Ganesh Shinde, AI product engineer, full-stack developer, React, Next.js, TypeScript, LLM systems, AI engineer, Gemini, Vertex AI"
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
