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
    "I'm Dilyorbek Ubaydullayev, a Software Engineer. This is my portfolio website: dilyorbek.uz",
  metadataBase: new URL("https://dilyorbek.uz"),
  alternates: {
    canonical: "/",
  },
  authors:[{name:'Dilyorbek Ubaydullayev', url:'https://dilyorbek.uz'}],
  keywords:"Dilyorbek Ubaydullayev, portfolio website for developers, best portfolio websites,front-end portfolio website, front end ,backed, frontend,",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Dilyorbek Ubaydullayev",
    description:
      "Software Engineer portfolio website — projects, skills, and contact information.",
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
      "This is my portfolio website. I'm a Software Engineer based in Uzbekistan.",
    images: ["/banner.png"],
  },
  verification: {
    google: "sc8vmfOv46FlwWYTyzq7HaN6PbNnTnhD9xc1HgBo3bU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${creteRound.variable} ${workSans.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-purple-500 focus:text-white focus:px-4 focus:py-2 focus:rounded-md focus:text-sm"
          >
            Skip to content
          </a>
          <Navbar />
          <main id="main">
            {children}
          </main>
          <Footer />
        </ThemeProvider>

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
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Freelancer",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
