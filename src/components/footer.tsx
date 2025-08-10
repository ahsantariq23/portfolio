import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/50 text-secondary-foreground border-t">
      <div className="container py-6 flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Ahsan Tariq. All rights reserved.
          </p>
        </div>
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
      </div>
    </footer>
  );
}
