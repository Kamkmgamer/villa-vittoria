"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../_componants/navbar";
import {
  Sailboat,
  Wine,
  TreePine,
  Sun,
  Mountain,
  Palette,
  Instagram,
  Facebook,
} from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      icon: Sailboat,
      title: "Private Lake Cruises",
      description:
        "Glide across the serene waters of Lake Como aboard our vintage mahogany Riva. Your captain will navigate past storied villas while you enjoy champagne and artisanal canapés prepared by our chef.",
      duration: "2-4 hours",
      image: "/images/hero.png",
    },
    {
      icon: Wine,
      title: "Vineyard Excursions",
      description:
        "Journey through the terraced vineyards of Lombardy with our sommelier. Visit family-owned wineries, taste rare vintages, and return with bottles curated exclusively for you.",
      duration: "Half or full day",
      image: "/images/villa-exterior.png",
    },
    {
      icon: TreePine,
      title: "Garden & Nature Walks",
      description:
        "Explore our historic gardens with our resident horticulturist. Wander through centuries-old olive groves, fragrant lemon arbors, and rose gardens while learning their fascinating histories.",
      duration: "1-2 hours",
      image: "/images/villa-exterior.png",
    },
    {
      icon: Sun,
      title: "Wellness & Spa",
      description:
        "Rejuvenate in our intimate spa, where treatments draw from ancient Italian wellness traditions. Indulge in olive oil massages, thermal baths, and bespoke beauty rituals.",
      duration: "By appointment",
      image: "/images/suite-lakeview.png",
    },
    {
      icon: Mountain,
      title: "Alpine Adventures",
      description:
        "For the adventurous spirit, we arrange private hiking expeditions in the surrounding Alps, helicopter tours over the lakes, and exclusive access to mountain refugios.",
      duration: "Full day",
      image: "/images/hero.png",
    },
    {
      icon: Palette,
      title: "Art & Culture",
      description:
        "Discover the artistic heritage of Lake Como with private tours of historic villas, exclusive gallery viewings, and meetings with local artisans who continue centuries-old traditions.",
      duration: "Half day",
      image: "/images/villa-exterior.png",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image
            src="/images/hero.png"
            alt="Lake Como experience"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Curated Moments
          </p>
          <h1 className="text-display">The Villa Experience</h1>
          <p
            className="text-body-lg"
            style={{ maxWidth: "600px", marginTop: "1.5rem" }}
          >
            From private boat excursions to lakeside dining, every moment at
            Villa Vittoria is crafted with intention and designed to create
            lasting memories.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="experiences-section">
        <div className="experiences-grid-full">
          {experiences.map((exp) => {
            const IconComponent = exp.icon;
            return (
              <div key={exp.title} className="experience-card-full">
                <div className="experience-card-image">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="experience-card-overlay" />
                </div>
                <div className="experience-card-content">
                  <div className="experience-card-icon">
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="experience-card-title">{exp.title}</h3>
                  <p className="experience-card-description">
                    {exp.description}
                  </p>
                  <div className="experience-card-meta">
                    <span className="experience-card-duration">
                      {exp.duration}
                    </span>
                    <Link href="/#booking" className="experience-card-link">
                      Inquire →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quote Section */}
      <section className="testimonial">
        <div className="testimonial-content">
          <blockquote className="testimonial-quote">
            Every experience at Villa Vittoria is a journey—not just to a place,
            but to a feeling. We craft moments that become treasured memories.
          </blockquote>
          <div className="testimonial-source">
            <div className="testimonial-line" />
            <p className="testimonial-author">The Villa Vittoria Team</p>
            <div className="testimonial-line" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-cta">
        <div className="page-cta-content">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Create Your Journey
          </p>
          <h2 className="text-display" style={{ marginBottom: "1rem" }}>
            Plan Your Experience
          </h2>
          <p
            className="text-body"
            style={{ marginBottom: "2rem", maxWidth: "500px" }}
          >
            Our concierge will curate a bespoke itinerary tailored to your
            interests and preferences.
          </p>
          <Link href="/#booking" className="hero-cta-primary">
            Contact Concierge
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">Villa Vittoria</div>
            <p className="footer-tagline">
              A timeless retreat on the shores of Lake Como.
            </p>
          </div>
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="/accommodations" className="footer-link">
                  Accommodations
                </a>
              </li>
              <li>
                <a href="/dining" className="footer-link">
                  Dining
                </a>
              </li>
              <li>
                <a href="/experience" className="footer-link">
                  Experiences
                </a>
              </li>
              <li>
                <a href="/events" className="footer-link">
                  Events
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="footer-heading">Contact</h4>
            <ul className="footer-links">
              <li>
                <span className="footer-link">Via Lakeside, 12</span>
              </li>
              <li>
                <span className="footer-link">22021 Bellagio (CO), Italy</span>
              </li>
              <li>
                <a href="tel:+39031234567" className="footer-link">
                  +39 031 234 567
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Relais Villa Vittoria.</p>
          <div className="footer-social">
            <a href="#" className="footer-social-link" aria-label="Instagram">
              <Instagram size={16} strokeWidth={1.5} />
            </a>
            <a href="#" className="footer-social-link" aria-label="Facebook">
              <Facebook size={16} strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
