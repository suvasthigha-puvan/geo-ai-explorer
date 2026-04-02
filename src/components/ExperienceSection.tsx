import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Research Consultant",
    company: "International Water Management Institute (IWMI)",
    period: "2023 – Present",
    description: "Leading multiple research projects across Jaffna, MENA, Mekong & Ganges basins, West Bengal, and Jordan. Developing AI-driven geospatial solutions for water resource management, ET modeling, and irrigation analysis at scale.",
    highlights: ["Geospatial AI", "ET Modeling", "Multi-region"],
  },
  {
    role: "Research Intern",
    company: "IWMI",
    period: "Feb – May 2023",
    description: "Conducted comparative analysis of evapotranspiration models (SEBAL, SSEBop, TSEB, GeeSEBAL) for accuracy assessment in diverse agro-climatic zones.",
    highlights: ["Model Comparison", "Remote Sensing"],
  },
  {
    role: "AutoCAD Designer",
    company: "Times Construction",
    period: "2020 – 2022",
    description: "Produced architectural and engineering drawings for residential and commercial construction projects using AutoCAD and surveying tools.",
    highlights: ["AutoCAD", "Survey Design"],
  },
  {
    role: "Intern",
    company: "Commercial Bank of Ceylon",
    period: "2017",
    description: "Gained foundational experience in banking operations, customer service, and financial data management.",
    highlights: ["Banking Operations"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12">
            Professional Journey
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-px bg-border lg:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative grid lg:grid-cols-2 gap-8 ${i % 2 === 0 ? "" : "lg:direction-rtl"}`}
              >
                <div className={`${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:order-2 lg:pl-12"}`}>
                  <div className="bg-card rounded-xl p-6 shadow-card border border-border">
                    <div className="flex items-center gap-3 mb-3 lg:justify-start">
                      <div className="p-2 rounded-lg bg-primary text-primary-foreground">
                        <Briefcase size={16} />
                      </div>
                      <span className="text-xs font-semibold text-accent">{exp.period}</span>
                    </div>
                    <h3 className="font-semibold text-primary text-lg">{exp.role}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((h) => (
                        <span key={h} className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground font-medium">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`hidden lg:block ${i % 2 === 0 ? "" : "lg:order-1"}`} />

                <div className="absolute left-4 lg:left-1/2 top-6 w-3 h-3 rounded-full bg-accent border-2 border-background -translate-x-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
