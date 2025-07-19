import { skillsData } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">Technical Skills</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A collection of technologies and tools I use to build modern, robust applications.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-2 mt-12">
          {skillsData.map((category) => (
            <Card key={category.name} className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <CardHeader>
                <CardTitle className="text-accent">{category.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm font-medium text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} aria-label={`${skill.name} proficiency`} />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
