import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1
            className="text-[10rem] md:text-[14rem] font-bold leading-none font-crete 
            bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent 
            select-none"
          >
            404
          </h1>
          <div className="absolute inset-0 bg-purple-500/10 blur-[100px] rounded-full -z-10" />
        </div>

        <h2
          className="text-2xl md:text-4xl font-bold mb-4 font-crete 
          bg-gradient-to-r from-purple-700 to-purple-400 
          dark:from-white dark:to-purple-400 bg-clip-text text-transparent"
        >
          Page Not Found
        </h2>

        <p className="text-gray-800 dark:text-white/70 mb-8 text-lg">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>

        <Link href="/">
          <Button size="lg">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
