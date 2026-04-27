import { motion } from "framer-motion";
import { ArrowDown, MapPin, Brain, Sparkles, Satellite, Database } from "lucide-react";
const profileImg = "https://i.postimg.cc/GpyzfSs8/Gemini-Generated-Image-g0l5wmg0l5wmg0l5-(1).jpg";

const stats = [
  { value: "3+", label: "Years Experience", icon: Sparkles },
  { value: "10+", label: "Global Projects", icon: Satellite },
  { value: "AI/ML", label: "Innovation", icon: Database },
];

const floatingTags = [
  { label: "Remote Sensing", x: "85%", y: "15%", delay: 0.8 },
  { label: "Machine Learning", x: "75%", y: "75%", delay: 1.2 },
  { label: "GIS", x: "95%", y: "45%", delay: 1.0 },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              <MapPin size={14} className="text-accent" />
              <span className="text-xs font-semibold text-accent tracking-wide uppercase">
                Available for collaboration
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-2 text-primary"
            >
              Hello, I'm
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] mb-6"
            >
              <span className="text-gradient-gold">Suvasthigha</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center gap-3 mb-4"
            >
              <div className="h-px w-10 bg-accent" />
              <p className="text-lg sm:text-xl text-foreground font-semibold tracking-tight">
                  AI-Driven Geospatial Research Associate
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-base text-muted-foreground mb-10 max-w-lg leading-relaxed"
            >
              Specializing in AI/ML innovation, agentic systems, and geospatial
              analysis for environmental and water resource management.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold shadow-elevated hover:shadow-none hover:translate-y-0.5 transition-all duration-200"
              >
                <Brain size={18} className="group-hover:rotate-12 transition-transform" />
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border-2 border-border text-foreground font-semibold hover:border-accent hover:text-accent transition-all duration-200"
              >
                Contact Me
                <ArrowDown size={16} className="rotate-[-90deg]" />
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-6 sm:gap-10"
            >
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                    <stat.icon size={18} />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-primary leading-none">{stat.value}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: profile image with floating elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Decorative ring behind */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-accent/15 animate-[spin_30s_linear_infinite]" />

              {/* Profile image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-2xl overflow-hidden shadow-elevated">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10" />
                <img
                  src={profileImg}
                  alt="Suvasthigha Puvanenthirarajah"
                  className="w-full h-full object-cover"
                  width={512}
                  height={640}
                />
              </div>

              {/* Floating badge - bottom right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                className="absolute -bottom-5 -right-5 bg-card shadow-elevated rounded-2xl px-5 py-4 border border-border backdrop-blur-sm z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-accent/15 text-accent">
                    <Satellite size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider font-semibold">Expertise</p>
                    <p className="text-sm font-bold text-primary">Geospatial AI</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge - top left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                className="absolute -top-4 -left-4 bg-card shadow-elevated rounded-xl px-4 py-3 border border-border backdrop-blur-sm z-20"
              >
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-accent" />
                  <span className="text-xs font-bold text-primary">IWMI Researcher</span>
                </div>
              </motion.div>

              {/* Floating tags */}
              {floatingTags.map((tag) => (
                <motion.div
                  key={tag.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: tag.delay, duration: 0.4 }}
                  className="absolute hidden lg:block"
                  style={{ left: tag.x, top: tag.y }}
                >
                  <span className="px-3 py-1.5 rounded-full bg-card/80 backdrop-blur-sm border border-border text-[10px] font-semibold text-muted-foreground shadow-card whitespace-nowrap">
                    {tag.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>
    </section>
  );
};

export default HeroSection;
