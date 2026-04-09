import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/pricing", label: "Pricing" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans text-foreground">
      {/* Main Header */}
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          isScrolled ? "bg-white/95 backdrop-blur shadow-sm py-3" : "bg-white py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link href="/" className="flex flex-col">
            <span className="text-2xl md:text-3xl font-extrabold text-primary tracking-tight">Khan Painting</span>
            <span className="text-xs text-muted-foreground font-medium tracking-widest uppercase">Professional Painters</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-accent",
                  location === link.href ? "text-accent" : "text-foreground/80"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="lg:hidden p-2 text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b shadow-lg flex flex-col py-4 px-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-base font-semibold py-2 border-b border-border/50",
                  location === link.href ? "text-accent" : "text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Khan Painting</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Professional house painting services across India. Trusted by homeowners and builders for over a decade. We bring color to your life.
            </p>
            <div className="flex flex-col gap-3">
              <a href="tel:+917668472825" className="flex items-center gap-3 text-white hover:text-accent transition-colors font-medium">
                <div className="bg-white/10 p-2 rounded-full"><Phone className="h-4 w-4" /></div> +91 7668472825
              </a>
              <a href="mailto:info@khanpainting.in" className="flex items-center gap-3 text-white hover:text-accent transition-colors font-medium">
                <div className="bg-white/10 p-2 rounded-full"><Mail className="h-4 w-4" /></div> info@khanpainting.in
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Interior Painting</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Exterior Painting</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Texture & Designer Walls</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Waterproofing</Link></li>
              <li><Link href="/services" className="text-primary-foreground/80 hover:text-accent transition-colors">Commercial Painting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Service Areas</h4>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Based in Budaun, Uttar Pradesh, we provide our professional painting services to customers all across India.
            </p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-white w-full">
              <a href="https://wa.me/917668472825" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Khan Painting. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
        </div>
      </footer>

    </div>
  );
}
