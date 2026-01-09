const Footer = () => {
  return (
    <footer className="py-8 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2023 Martín Frame. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#home" className="text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
