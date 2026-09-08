import type { Metadata } from "next";
import { Inter, Newsreader, IBM_Plex_Mono } from "next/font/google";
import { profile, siteUrl } from "@/data/content";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

const pageTitle = `${profile.name} — ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: pageTitle,
  description: profile.metaDescription,
  authors: [{ name: profile.name, url: profile.linkedin }],
  keywords: [
    "Hyunseo Kim",
    "Biomedical Engineering",
    "Imperial College London",
    "soft robotics",
    "medical devices",
    "machine learning",
    "biotech",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title: pageTitle,
    description: profile.metaDescription,
    url: "/",
    siteName: profile.name,
    locale: "en_GB",
  },
  twitter: {
    card: "summary",
    title: pageTitle,
    description: profile.metaDescription,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  sameAs: [profile.linkedin],
  affiliation: {
    "@type": "CollegeOrUniversity",
    name: profile.institution,
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "North London Collegiate School Jeju",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "London",
    addressCountry: "GB",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} ${plexMono.variable} h-full antialiased`}
    >
      <head>
        {/* Without JS the reveal wrapper would leave every section invisible. */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
