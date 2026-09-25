import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl text-foreground mb-4">SightlessVision</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-xs">Capturing stories through light, motion, and vision. Based in Toronto, working worldwide.

            </p>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-5">Navigation</h4>
            <div className="flex flex-col gap-3">
              {[
              { label: "Home", path: "/" },
              { label: "Portfolio", path: "/portfolio" },
              { label: "About", path: "/about" },
              { label: "Contact", path: "/contact" }].
              map((link) =>
              <Link
                key={link.path}
                to={link.path}
                className="font-body text-sm text-secondary-foreground hover:text-primary transition-colors">
                
                  {link.label}
                </Link>
              )}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-5">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="font-body text-sm text-muted-foreground mt-5">
              hello@lensandvision.com
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <p className="font-body text-xs text-muted-foreground text-center tracking-wider">
            © {new Date().getFullYear()} LENS & VISION. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}