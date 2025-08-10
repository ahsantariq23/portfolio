import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown, MoveRight } from 'lucide-react';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full pt-24 pb-20 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 bg-background overflow-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
            <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-primary/10 shadow-lg">
                <AvatarImage src="https://github.com/ahsantariq23.png" alt="Ahsan Tariq" />
                <AvatarFallback>AT</AvatarFallback>
            </Avatar>
          <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Ahsan Tariq
          </h1>
          <p className="mt-4 font-headline text-xl font-medium text-accent-foreground sm:text-2xl">
            Backend & DevOps Engineer
          </p>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground">
            I'm a passionate Computer Science graduate specializing in building robust, scalable backend systems and automating development pipelines. I excel at transforming complex problems into elegant, efficient solutions using modern technologies.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link href="#contact">Get in Touch <MoveRight className="ml-2 h-5 w-5" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
