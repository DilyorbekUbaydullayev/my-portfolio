import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects",
  description:
    "A collection of diverse projects developed by me. Includes web apps, blog platforms, e-commerce sites, and interactive games.",
};

export default function AllProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
