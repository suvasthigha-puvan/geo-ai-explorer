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
                Passionate and results-oriented Remote Sensing & GIS Analyst with over three years of experience in geospatial analysis, remote sensing, and spatial data science. Skilled in developing automated workflows and advanced geospatial models using Python and machine learning techniques to derive actionable insights from large-scale environmental datasets. Currently expanding expertise in Artificial Intelligence through active involvement in AI-driven research, with a strong focus on integrating intelligent methodologies into geospatial analysis and environmental monitoring.            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
                Specializing in land and water resource management, I bring hands-on experience in analyzing complex environmental systems to support sustainable decision-making. I have collaborated with government agencies and international organizations to deliver policy-relevant research, combining technical expertise with a strong understanding of real-world challenges. My work is driven by a commitment to innovation, efficiency, and the application of cutting-edge technologies to address global environmental issues.            </p>

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
                {["Geospatial AI", "Remote Sensing", "ML/Deep Learning", "Multi-Agent Systems", "ET Modeling", "Water Resources", "LLMs", "Data Pipelines", "QGIS", "Google Earth Engine", "Google Cloud"].map((skill) => (
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
