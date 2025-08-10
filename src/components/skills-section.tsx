import { skillsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
             <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Skills</div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Expertise</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My toolbox for building and deploying robust, scalable, and efficient applications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 mt-16">
          {skillsData.map((category) => (
            <Card key={category.name} className="transition-all duration-300 hover:shadow-lg hover:border-primary/40 border-border/30">
              <CardHeader>
                <CardTitle className="text-primary">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                    <Badge key={skill.name} variant="secondary" className="text-base font-medium py-1 px-3 rounded-md transition-all duration-200 hover:bg-primary/80 hover:text-primary-foreground">
                        {skill.name}
                    </Badge>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
