import { motion } from "framer-motion";
import { ExternalLink, Bot, Truck, Cloud, MessageSquare, TrendingDown } from "lucide-react";

const projects = [
    {
        icon: Bot,
        title: "LLM-Based Automated Geospatial Map Generation",
        description: "Built a system that uses LLMs to generate maps from natural language prompts, automating data processing, styling, and map creation for quick, user-friendly outputs.",
        tags: ["LLM", "Python", "GEE"],
    },
    {
        icon: TrendingDown,
        title: "ML-based ET Downscaling",
        description: "Machine learning approach for spatial downscaling of evapotranspiration data from coarse to fine resolution.",
        tags: ["ML", "Geospatial", "Python"],
    },
    {
        icon: MessageSquare,
        title: "SSEBOP-Model ET Processing QGIS Plugin",
        description: "Developed a QGIS plugin to estimate evapotranspiration using the SSEBOP model, automating data processing for efficient water resource analysis.",
        tags: ["QGIS", "Python", "Memory Optimization"],
    },
    {
        icon: Truck,
        title: "Multi-Agent Delivery Optimization",
        description: "Multi-agent system for last-mile delivery route optimization using reinforcement learning.",
        tags: ["Multi-Agent", "RL", "Optimization"],
    },
    {
        icon: Cloud,
        title: "Ensemble ET Model",
        description: "Ensemble Evapotranspiration model integrating SEBAL, SSEBop, and TSEB for global hydrological applications.",
        tags: ["GEE", "Remote Sensing", "Hydrology"],
    },
    {
        icon: MessageSquare,
        title: "Sentiment Analysis System",
        description: "NLP-based sentiment classification for mobile phone reviews with deep learning architectures.",
        tags: ["NLP", "Deep Learning", "Python"],
    },
  {
    icon: Bot,
    title: "Personalized AI Assistant",
    description: "LLM-powered assistant with context-aware responses and multi-modal interaction capabilities.",
    tags: ["LLM", "Python", "NLP"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Portfolio</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-card border border-border hover:shadow-elevated hover:-translate-y-1 transition-all group cursor-pointer"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-lg bg-accent/15 text-accent">
                  <project.icon size={22} />
                </div>
                <ExternalLink size={16} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-semibold text-primary mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium"
                  >
                    {tag}
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

export default ProjectsSection;
