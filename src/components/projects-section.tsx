import Image from 'next/image';
import { projectsData } from '@/lib/data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">My Work</div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of projects where I've turned ideas into reality, showcasing my skills in backend development and problem-solving.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-8 py-16 sm:grid-cols-1 md:grid-cols-2">
          {projectsData.map((project) => (
            <Card key={project.title} className="flex flex-col overflow-hidden transition-transform duration-300 hover:shadow-2xl hover:-translate-y-2 group border-border/40">
              <CardHeader className="p-0">
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        data-ai-hint={project.imageHint}
                    />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow p-6">
                 <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                 <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                </div>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="flex justify-start gap-3 bg-secondary/50 p-6 mt-auto">
                <Button variant="outline" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Code
                  </a>
                </Button>
                {project.liveUrl && (
                  <Button asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
