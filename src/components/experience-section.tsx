import { experienceData } from '@/lib/data';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full py-16 md:py-24 lg:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-headline font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">My Journey</h2>
            <p className="max-w-[900px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional and academic experience has shaped my skills and passion for technology.
            </p>
          </div>
        </div>
        <div className="relative mt-12 max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 md:left-6 h-full w-0.5 bg-border"></div>
          {experienceData.map((item, index) => (
            <div key={index} className="relative md:pl-12 mb-12">
              <div className="md:absolute top-1 left-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground ring-8 ring-secondary/50">
                {item.role.toLowerCase().includes('bachelor') ? (
                    <GraduationCap className="h-5 w-5"/>
                ) : (
                    <Briefcase className="h-5 w-5"/>
                )}
              </div>
              <div className="p-6 rounded-lg bg-card shadow-md ml-0 md:ml-12 transition-all duration-300 hover:shadow-xl hover:border-primary/50 border">
                 <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                    <h3 className="text-xl font-bold font-headline">{item.role}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{item.period}</p>
                 </div>
                 <p className="text-lg font-semibold text-accent mb-4">{item.company}</p>
                 <ul className="list-disc list-inside space-y-2 text-foreground/90">
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
