// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "Lokasi", href: "#location" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));

    const observers = ids.map((id) => {
      const el = document.getElementById(id);

      if (!el) return null;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          threshold: 0.4,
        },
      );

      obs.observe(el);

      return obs;
    });

    return () => {
      observers.forEach((obs) => obs?.disconnect());
    };
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);

    const id = href.slice(1);
    const el = document.getElementById(id);

    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-milk/80 backdrop-blur-md border-b border-latte/30"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className="flex flex-col leading-none cursor-pointer"
        >
          <span className="font-display text-2xl font-semibold text-espresso tracking-tight">
            Jugoss
          </span>

          <span className="text-[11px] font-body text-roasted tracking-[0.2em] uppercase">
            Coffee
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const isActive = activeSection === href.slice(1);

            return (
              <li key={href}>
                <button
                  onClick={() => handleNavClick(href)}
                  className={`font-body text-sm font-medium transition-colors duration-200 relative pb-0.5 cursor-pointer ${
                    isActive
                      ? "text-roasted"
                      : "text-espresso/70 hover:text-espresso"
                  }`}
                >
                  {label}

                  <span
                    className={`absolute bottom-0 left-0 h-px bg-roasted transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA Desktop */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-espresso text-cream text-sm font-medium font-body px-5 py-2.5 rounded-full hover:-translate-y-0.5 transition-transform duration-200"
        >
          Pesan Sekarang
        </a>

        {/* Hamburger Mobile */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden text-espresso p-1 cursor-pointer"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-milk/95 backdrop-blur-md border-b border-latte/30 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="px-6 pt-2 pb-6 flex flex-col gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNavClick(href)}
                className="w-full text-left font-body text-sm font-medium text-espresso/80 hover:text-roasted py-3 border-b border-latte/20 transition-colors duration-200 cursor-pointer"
              >
                {label}
              </button>
            </li>
          ))}

          <li className="pt-3">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-espresso text-cream text-sm font-medium font-body px-5 py-3 rounded-full"
            >
              Pesan Sekarang
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
