"use client";

import { useState, useEffect } from "react";
import { Menu, X, UtensilsCrossed } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Hours", href: "#hours" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/95 backdrop-blur-md shadow-lg shadow-black/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <UtensilsCrossed className="w-6 h-6 text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-white font-bold text-lg tracking-wider uppercase">
            American <span className="text-amber-400">Restaurant</span>
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-gray-300 hover:text-amber-400 text-sm uppercase tracking-widest transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-amber-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://americanrestaurantnewyork.com/american-restaurant/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-amber-500 hover:bg-amber-400 text-black text-sm font-bold uppercase tracking-widest px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5"
            >
              Order Online
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white hover:text-amber-400 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-white/10">
          <ul className="flex flex-col px-6 py-6 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-gray-300 hover:text-amber-400 text-sm uppercase tracking-widest py-2 border-b border-white/5 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://americanrestaurantnewyork.com/american-restaurant/"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-amber-500 text-black text-sm font-bold uppercase tracking-widest px-5 py-3 rounded-full text-center"
              >
                Order Online
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
