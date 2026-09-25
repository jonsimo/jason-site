import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
{ label: "Home", path: "/" },
{ label: "Portfolio", path: "/portfolio" },
{ label: "Awards", path: "/awards" },
{ label: "About", path: "/about" },
{ label: "Contact", path: "/contact" }];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"}`
      }>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="font-heading text-2xl tracking-wide text-foreground hover:text-primary transition-colors">SightlessVision

          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm tracking-widest uppercase transition-colors duration-300 ${
              location.pathname === link.path ?
              "text-primary" :
              "text-muted-foreground hover:text-foreground"}`
              }>
              
                {link.label}
              </Link>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2">
            
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen &&
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 backdrop-blur-md border-b border-border overflow-hidden">
          
            <div className="px-6 py-6 flex flex-col gap-5">
              {navLinks.map((link) =>
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm tracking-widest uppercase ${
              location.pathname === link.path ?
              "text-primary" :
              "text-muted-foreground"}`
              }>
              
                  {link.label}
                </Link>
            )}
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </nav>);

}