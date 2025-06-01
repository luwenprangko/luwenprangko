import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import type { HTMLAttributes } from "react";
import { GithubLogo } from "./icons";

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full py-12 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <div className="max-w-screen-md mx-auto">
          <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
            <ProfileImage className="hidden md:block" />

            {/* Content */}
            <div className="flex-1 text-center">
              <Badge variant="secondary" className="mb-4">
                About Me
              </Badge>
              <div className="flex justify-center md:hidden">
                <ProfileImage className="mt-3 mb-8 block md:hidden" />
              </div>
              <h2
                id="about-heading"
                className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
              >
                Passionate about creating impactful web experiences
              </h2>
              <p className="text-muted-foreground mb-6 text-base md:text-lg">
                I completed my OJT at STEER Hub, where I focused on developing
                front-end interfaces using Next.js. During my time there, I
                gained hands-on experience in building responsive and
                user-friendly web applications while collaborating with a
                professional development team.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="rounded-full">
                  <GithubLogo />
                  <span>View Github</span>
                </Button>
                <Button variant="outline" className="rounded-full">
                  <Download className="mr-2 h-4 w-4" />
                  <span>Download CV</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileImage = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("w-48 h-48 md:w-64 md:h-64", className)} {...props}>
    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-accent">
      <Image
        src="/placeholder.svg"
        alt="Profile photo"
        className="object-cover"
        fill
        sizes="(max-width: 768px) 192px, 256px"
        priority={false}
        loading="lazy"
      />
    </div>
  </div>
);

export default About;
