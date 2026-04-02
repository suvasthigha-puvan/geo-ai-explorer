import { motion } from "framer-motion";
import { ArrowDown, MapPin, Brain } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "10+", label: "Global Projects" },
  { value: "AI/ML", label: "Innovation" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={16} className="text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                Sri Lanka · Global Impact
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-2 text-primary">
              Hello, I'm
            </h1>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span className="text-gradient-gold">Suvasthigha</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-2 font-medium">
              Research Consultant & Geospatial Data Scientist
            </p>
            <p className="text-base text-muted-foreground mb-8 max-w-lg leading-relaxed">
              Specializing in AI/ML innovation, agentic systems, and geospatial
              analysis for environmental and water resource management.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Brain size={18} />
                View Portfolio
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-primary">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-elevated border-4 border-accent/20">
                <img
                  src={profileImg}
                  alt="Suvasthigha Puvanenthirarajah"
                  className="w-full h-full object-cover"
                  width={512}
                  height={640}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-card shadow-card rounded-xl px-4 py-3 border border-border">
                <p className="text-xs text-muted-foreground">Expertise</p>
                <p className="text-sm font-bold text-primary">Geospatial AI</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
