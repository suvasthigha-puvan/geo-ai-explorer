import { motion } from "framer-motion";
import { Globe, Droplets, Brain, Code, BarChart3 } from "lucide-react";

const categories = [
  {
    icon: Globe,
    title: "Geospatial & Remote Sensing",
    skills: ["ArcMap", "QGIS", "Google Earth Engine", "GDAL", "netCDF", "Image Classification", "Spatial Analysis", "Large-scale Preprocessing"],
  },
  {
    icon: Droplets,
    title: "Hydrology & Water Resources",
    skills: ["SEBAL", "SSEBop", "TSEB", "GeeSEBAL", "WA+/CWA+", "Irrigation Analysis", "Water Productivity", "Crop Water Use"],
  },
  {
    icon: Brain,
    title: "Data Science & AI",
    skills: ["Python", "R", "ML/AI Modeling", "Deep Learning", "Predictive Modeling", "LLM & Multi-Agent Systems"],
  },
  {
    icon: Code,
    title: "Programming & Databases",
    skills: ["Python", "R", "JavaScript", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    icon: BarChart3,
    title: "Data Acquisition & Visualization",
    skills: ["Web Scraping", "Data Pipelines", "Dashboard Development", "Technical Presentations"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12">
            Technical Expertise
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated transition-shadow group"
            >
              <div className="p-3 rounded-lg bg-primary text-primary-foreground w-fit mb-4 group-hover:scale-110 transition-transform">
                <cat.icon size={22} />
              </div>
              <h3 className="font-semibold text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-md bg-muted text-muted-foreground font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
