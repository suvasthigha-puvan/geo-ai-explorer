import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:suvasthigha@example.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(formData.message)}`;
    window.open(mailtoLink);
  };

  return (
    <section id="contact" className="py-24 bg-section-alt">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-2">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12">
            Let's Work Together
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-muted-foreground leading-relaxed mb-8">
              I'm always open to new collaborations, research opportunities, and interesting projects. Whether you need geospatial AI solutions, data science expertise, or want to discuss innovative ideas — feel free to reach out.
            </p>

            <div className="space-y-4">
              <a href="mailto:suvasthigha@example.com" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-shadow group">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium text-primary">suvasthigha@example.com</p>
                </div>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-shadow group">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                  <Linkedin size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">LinkedIn</p>
                  <p className="text-sm font-medium text-primary">Connect on LinkedIn</p>
                </div>
              </a>

              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-shadow group">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                  <Github size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                  <p className="text-sm font-medium text-primary">View my code</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card rounded-xl p-8 shadow-card border border-border space-y-5"
          >
            <div>
              <label className="text-sm font-medium text-primary mb-1.5 block">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-primary mb-1.5 block">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-primary mb-1.5 block">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              <Send size={16} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
