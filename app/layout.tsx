import type { Metadata } from "next";
import { Crete_Round, Work_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/shared/footer";

const creteRound = Crete_Round({
  weight: ["400"],
  variable: "--font-creteRound",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-workSans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dilyorbek Ubaydullayev",
  description:
    "I'm Dilyorbek Ubaydullayev, a Front-End Developer. This is my portfolio website: dilyorbek.uz",
  openGraph: {
    title: "Dilyorbek Ubaydullayev",
    description:
      "Front-End Developer portfolio website — projects, skills, and contact information.",
    url: "https://dilyorbek.uz",
    siteName: "Dilyorbek Portfolio",
    images: [
      {
        url: "/banner.png", 
        width: 1200,
        height: 630,
        alt: "Dilyorbek Ubaydullayev Portfolio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dilyorbek Ubaydullayev",
    description:
      "This is my portfolio website. I'm a Front-End Developer based in Uzbekistan.",
    images: ["/banner.png"],
    
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="sc8vmfOv46FlwWYTyzq7HaN6PbNnTnhD9xc1HgBo3bU"
        />

<link rel="icon" href="/favicon.ico" type="image/x-icon"/>
        <link rel="canonical" href="https://dilyorbek.uz/" />
        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Dilyorbek Ubaydullayev",
      url: "https://dilyorbek.uz",
      sameAs: [
        "https://github.com/DilyorbekUbaydullayev",
        "https://www.linkedin.com/in/dilyorbekubaydullayev",
      ],
      jobTitle: "Front-End Developer",
      worksFor: {
        "@type": "Organization",
        name: "Freelancer",
      },
    }),
  }}
/>

      </head>
      <body
        className={`${creteRound.variable} ${workSans.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
