import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full py-24 sm:py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            Ahsan Tariq
          </h1>
          <p className="mt-4 font-headline text-xl font-medium text-accent sm:text-2xl">
            Backend & DevOps Engineer
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80">
            A Computer Science graduate passionate about building scalable, efficient backend systems and automating development pipelines. I specialize in Python, JavaScript, and cloud technologies to bring robust applications to life.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="transition-transform duration-300 hover:scale-105">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105">
              <Link href="#contact">Get in Touch <ArrowDown className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
