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
  description: " I'm Dilyorbek Ubaydullayev and I'm Front end Developer and This is my portfolio website dilyorbek.uz, I think it is the best portfolio website for developers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <meta name="google-site-verification" content="sc8vmfOv46FlwWYTyzq7HaN6PbNnTnhD9xc1HgBo3bU" />
      <meta content="Dilyorbek Ubaydullayev" property="og:title" />
      <meta content="https://dilyorbek.uz/" property="og:url" />
      <meta content="website" property="og:type" />
      <link rel="shortcut icon" href="/icon.png" />
<link rel="icon" href="/icon.png?v=1" type="image/png" sizes="32x32" />


      </head>
      <body
        className={`${creteRound.variable} ${workSans.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
