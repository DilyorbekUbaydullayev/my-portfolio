"use client";

import ProjectCard from "@/components/shared/projectCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "@/constants";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import MotionWrapper from "@/components/shared/motion-wrapper";

function AllProjects() {
  const webProjects = projects.filter((p) => p.category === "web");
  const botProjects = projects.filter((p) => p.category === "bot");
  const mobileProjects = projects.filter((p) => p.category === "mobile");

  return (
    <div className="min-h-screen mt-20">
      <Breadcrumb className="ps-4">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/#projects">Projects</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/allprojects">All projects</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="p-8">
        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center">
            <TabsList className="bg-gray-500 border-gray-500 dark:bg-white/5 border dark:border-white/10">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web Apps</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="bot">Bots</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {projects.map((project, i) => (
                <MotionWrapper key={project.title} delay={i * 0.1}>
                  <ProjectCard {...project} />
                </MotionWrapper>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="web" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {webProjects.map((project, i) => (
                <MotionWrapper key={project.title} delay={i * 0.1}>
                  <ProjectCard {...project} />
                </MotionWrapper>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="mobile" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {mobileProjects.map((project, i) => (
                <MotionWrapper key={project.title} delay={i * 0.1}>
                  <ProjectCard {...project} />
                </MotionWrapper>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bot" className="mt-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              {botProjects.map((project, i) => (
                <MotionWrapper key={project.title} delay={i * 0.1}>
                  <ProjectCard {...project} />
                </MotionWrapper>
              ))}
            </div>
          </TabsContent>

          <div className="flex justify-center mt-12">
            <Link href={"/#projects"}>
              <Button size="lg" variant="outline">
                <ArrowLeft className="ml-2 h-4 w-4" />
                Back to home
              </Button>
            </Link>
          </div>
        </Tabs>
      </div>
    </div>
  );
}

export default AllProjects;