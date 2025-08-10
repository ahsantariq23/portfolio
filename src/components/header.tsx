"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Menu, X, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { ThemeToggle } from './theme-toggle';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = ({ className }: { className?: string }) => (
    <nav className={cn("flex items-center gap-6 lg:gap-8", className)}>
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-md font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
  
  const SocialLinks = () => (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" asChild>
        <a href="https://github.com/ahsantariq23" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="https://www.linkedin.com/in/ahsan-tariq-890112225/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5" />
        </a>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <a href="mailto:ahsantariq250@gmail.com" aria-label="Email">
          <Mail className="h-5 w-5" />
        </a>
      </Button>
    </div>
  );

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'border-b border-border bg-background/90 backdrop-blur-sm' : 'bg-background'
      )}
    >
      <div className="container flex h-20 items-center">
        <Link href="#home" className="mr-6 flex items-center">
          <span className="font-headline text-xl font-bold text-primary">Ahsan Tariq</span>
        </Link>
        
        <div className="hidden md:flex flex-1 items-center justify-center">
            <NavLinks />
        </div>

        <div className="hidden md:flex items-center justify-end ml-auto gap-2">
            <SocialLinks />
            <ThemeToggle />
        </div>

        <div className="flex md:hidden items-center justify-end ml-auto">
            <ThemeToggle />
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Open menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right">
                    <div className="flex flex-col gap-6 p-6">
                      <div className="flex justify-between items-center">
                         <Link href="#home" className="flex items-center">
                            <span className="font-headline text-lg font-bold text-primary">Ahsan Tariq</span>
                         </Link>
                         <SheetClose asChild>
                            <Button variant="ghost" size="icon">
                                <X className="h-6 w-6" />
                                <span className="sr-only">Close menu</span>
                            </Button>
                        </SheetClose>
                      </div>
                      <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                          <SheetClose asChild key={item.name}>
                            <Link
                              href={item.href}
                              className="text-lg font-medium transition-colors hover:text-primary"
                            >
                              {item.name}
                            </Link>
                          </SheetClose>
                        ))}
                      </nav>
                      <div className="mt-4">
                        <SocialLinks />
                      </div>
                    </div>
                </SheetContent>
            </Sheet>
        </div>
      </div>
    </header>
  );
}
