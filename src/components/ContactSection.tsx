import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, Send, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send("service_x6r3fpi", "template_q7yr8b9", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      }, "36w1EbauZKYfaAPw_");
      setSent(true);
      setFormData({ name: "", email: "", message: "" });
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setTimeout(() => setSent(false), 3000);
    } catch {
      toast({ title: "Failed to send", description: "Please try again later.", variant: "destructive" });
    } finally {
      setSending(false);
    }
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

              <a href="tel:+94750906491" className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border shadow-card hover:shadow-elevated transition-shadow group">
                <div className="p-3 rounded-lg bg-primary text-primary-foreground group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="text-sm font-medium text-primary">+94 750906491 / +94 771764182</p>
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
              disabled={sending}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              {sending ? <Loader2 size={16} className="animate-spin" /> : sent ? <CheckCircle size={16} /> : <Send size={16} />}
              {sending ? "Sending..." : sent ? "Sent!" : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
