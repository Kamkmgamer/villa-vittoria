"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isLoaded] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  const menuItems = [
    { label: "Accommodations", href: "/accommodations" },
    { label: "Experience", href: "/experience" },
    { label: "Dining", href: "/dining" },
    { label: "Events", href: "/events" },
    { label: "Gallery", href: "/gallery" },
  ];

  return (
    <>
      <motion.nav
        className={`nav ${isScrolled ? "scrolled" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <Link href="/" className="nav-logo">
          <span className="nav-logo-main">Villa Vittoria</span>
          <span className="nav-logo-sub">Lake Como</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav-links nav-links-desktop">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -10 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
            >
              <a href={item.href} className="nav-link">
                {item.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Reserve CTA Button (Desktop) */}
        <motion.a
          href="#booking"
          className="nav-cta nav-cta-desktop"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -10 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Reserve
        </motion.a>

        {/* Hamburger Button */}
        <button
          className={`hamburger-btn ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line hamburger-line-1"></span>
          <span className="hamburger-line hamburger-line-2"></span>
          <span className="hamburger-line hamburger-line-3"></span>
        </button>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 40px) 40px)" }}
            exit={{ clipPath: "circle(0% at calc(100% - 40px) 40px)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            onClick={handleOverlayClick}
          >
            <nav className="mobile-menu-content">
              <ul className="mobile-menu-links">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      className="mobile-menu-link"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              {/* Reserve Button Mobile */}
              <motion.a
                href="#booking"
                className="mobile-menu-cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                onClick={() => setIsMenuOpen(false)}
              >
                Reserve Your Stay
              </motion.a>

              {/* Brand Accent */}
              <motion.div
                className="mobile-menu-brand"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
              >
                <span className="mobile-menu-tagline">
                  Est. 1892 · Lake Como, Italy
                </span>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
