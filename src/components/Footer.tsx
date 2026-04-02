const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Suvasthigha Puvanenthirarajah. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
