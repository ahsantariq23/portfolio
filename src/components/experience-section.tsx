import { experienceData } from '@/lib/data';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
             <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">Experience</div>
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl">My Professional Journey</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A timeline of my academic and professional milestones that have shaped my career.
            </p>
          </div>
        </div>
        <div className="relative mt-16 max-w-4xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-border/80 md:left-5"></div>
          {experienceData.map((item, index) => (
            <div key={index} className="relative md:pl-16 mb-12 group">
              <div className="md:absolute top-0.5 left-5 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary ring-4 ring-background transition-all duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                {item.role.toLowerCase().includes('bachelor') ? (
                    <GraduationCap className="h-5 w-5"/>
                ) : (
                    <Briefcase className="h-5 w-5"/>
                )}
              </div>
              <div className="p-6 rounded-lg bg-card shadow-sm ml-0 md:ml-10 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group-hover:-translate-y-1">
                 <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                    <h3 className="text-xl font-bold font-headline text-primary">{item.role}</h3>
                    <p className="text-sm text-muted-foreground font-medium mt-2 md:mt-0">{item.period}</p>
                 </div>
                 <p className="text-lg font-semibold text-accent-foreground/80 mb-4">{item.company}</p>
                 <ul className="list-disc list-inside space-y-2 text-foreground/80">
                    {item.description.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                 </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
