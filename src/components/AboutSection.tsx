import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12">
            Why hire me for your next project?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a Research Consultant and Geospatial Data Scientist with over three years of experience in remote sensing, GIS, and advanced computing. Currently pursuing an M.Sc. in Data Science & AI at Sri Jayewardenepura University, I bring deep expertise in building AI-driven solutions for environmental and water resource management.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My work spans from developing ensemble evapotranspiration models for global hydrological applications to designing multi-agent systems for optimization. I love solving complex, real-world problems at the intersection of geospatial science and artificial intelligence.
            </p>

            <div className="rounded-xl overflow-hidden shadow-card">
              <img
                src={heroIllustration}
                alt="Geospatial data science illustration"
                className="w-full h-48 object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">M.Sc. Data Science & AI</h3>
                  <p className="text-sm text-muted-foreground">Sri Jayewardenepura University · 2025–Present</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-accent text-accent-foreground">
                  <Award size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-1">B.Sc. Hons. Surveying Sciences</h3>
                  <p className="text-sm text-muted-foreground">
                    Sabaragamuwa University · 2018–2023
                  </p>
                  <p className="text-sm text-accent font-medium mt-1">Second Class Upper Division</p>
                  <p className="text-xs text-muted-foreground mt-1">Specialization: Remote Sensing</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card border border-border">
              <h3 className="font-semibold text-primary mb-3">Core Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {["Geospatial AI", "Remote Sensing", "ML/Deep Learning", "Multi-Agent Systems", "ET Modeling", "Water Resources", "LLMs", "Data Pipelines"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-muted text-muted-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
