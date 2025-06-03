import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { GithubLogo } from "./icons";
import { cn } from "@/lib/utils";
import { CpuArchitecture } from "./designs/cpu-architecture";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: ProjectCardProps) => {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-primary/10 transition-all hover:border-primary/20 h-full">
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-accent">
        <Image
          src={image || "/placeholder.svg"}
          alt={`Screenshot of ${title} project`}
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>

        {/* Technologies */}
        <div
          className="flex flex-wrap gap-2 mb-6"
          aria-label={`Technologies used in ${title}`}>
          {technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="rounded-full">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Actions */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {liveUrl && (
            <Button variant="default" className="rounded-full" asChild>
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${title}`}>
                <ExternalLink className="mr-1 h-4 w-4" aria-hidden="true" />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button
              variant="outline"
              className="rounded-full shadow-none"
              asChild>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View source code for ${title} on GitHub`}>
                <GithubLogo aria-hidden="true" />
                <span>View Code</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Skolar ng Bayan",
      description:
        "An online scholarship application system that enables students in remote areas to submit their applications from home, while maintaining a professional and secure method for validating requirements and reducing carbon footprints.",
      image: "/placeholder.svg",
      technologies: ["PHP", "JavaScipt", "Composer", "Bootstrap", "MySQL"],
      liveUrl: "https://ecommerce-demo.com",
      githubUrl: "https://github.com/username/ecommerce",
    },
  ];

  return (
    <section
      id="projects"
      className="relative w-full pb-12 md:pb-24"
      aria-labelledby="projects-heading">
      <div className="container px-4 md:px-6 mx-auto max-w-3xl">
        <div className="text-center min-h-screen flex flex-col items-center justify-center">
          <Badge variant="secondary" className="mb-4">
            Projects
          </Badge>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Featured Work
          </h2>
          <p className="text-muted-foreground mt-2 sm:mt-4 text-lg">
            Showcasing some of my projects and technical achievements
          </p>
          <CpuArchitecture text="PROJ" />
        </div>

        <div
          className={`${
            projects.length === 1
              ? "flex justify-center"
              : "grid grid-cols-1 md:grid-cols-2 gap-6"
          }`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={projects.length === 1 ? "w-full max-w-md" : ""}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
