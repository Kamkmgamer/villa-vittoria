"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../_componants/navbar";
import {
  Instagram,
  Facebook,
  Users,
  Heart,
  Sparkles,
  Building,
} from "lucide-react";

export default function Events() {
  const eventTypes = [
    {
      icon: Heart,
      title: "Weddings",
      description:
        "Exchange vows against the breathtaking backdrop of Lake Como. Our wedding team orchestrates every detail, from intimate elopements to grand celebrations, ensuring your special day is nothing short of magical.",
      capacity: "Up to 120 guests",
      image: "/images/villa-exterior.png",
    },
    {
      icon: Users,
      title: "Corporate Retreats",
      description:
        "Inspire your team in an extraordinary setting. Our meeting spaces combine historic elegance with modern technology, while team-building activities make use of our unique lakeside location.",
      capacity: "Up to 50 guests",
      image: "/images/hero.png",
    },
    {
      icon: Sparkles,
      title: "Private Celebrations",
      description:
        "Mark life&apos;s milestones in style—anniversaries, birthdays, reunions. We tailor every celebration to your vision, creating bespoke experiences that your guests will remember forever.",
      capacity: "Custom arrangements",
      image: "/images/suite-lakeview.png",
    },
    {
      icon: Building,
      title: "Exclusive Buyouts",
      description:
        "For the ultimate in privacy and personalization, reserve the entire villa for your exclusive use. Perfect for multi-day celebrations, intimate destination weddings, or corporate gatherings.",
      capacity: "Full villa (12 rooms)",
      image: "/images/villa-exterior.png",
    },
  ];

  const venues = [
    {
      name: "The Grand Terrace",
      capacity: "120 guests",
      description: "Our signature outdoor venue with panoramic lake views",
    },
    {
      name: "The Rose Garden",
      capacity: "60 guests",
      description: "An intimate setting among fragrant heritage roses",
    },
    {
      name: "The Library",
      capacity: "30 guests",
      description: "Historic charm for intimate dinners and meetings",
    },
    {
      name: "The Wine Cellar",
      capacity: "20 guests",
      description: "Underground elegance for exclusive gatherings",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="page-hero page-hero-tall">
        <div className="page-hero-bg">
          <Image
            src="/images/villa-exterior.png"
            alt="Events at Villa Vittoria"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Unforgettable Occasions
          </p>
          <h1 className="text-display">Weddings & Events</h1>
          <p
            className="text-body-lg"
            style={{ maxWidth: "600px", marginTop: "1.5rem" }}
          >
            Create lasting memories in one of Italy&apos;s most romantic
            settings. From fairy-tale weddings to corporate retreats, we bring
            your vision to life.
          </p>
        </div>
      </section>

      {/* Event Types */}
      <section className="events-section">
        <div className="events-header">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Tailored Experiences
          </p>
          <h2 className="text-display">Types of Events</h2>
        </div>
        <div className="events-grid">
          {eventTypes.map((event) => {
            const IconComponent = event.icon;
            return (
              <div key={event.title} className="event-card">
                <div className="event-card-image">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  <div className="event-card-overlay" />
                </div>
                <div className="event-card-content">
                  <div className="event-card-icon">
                    <IconComponent size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="event-card-title">{event.title}</h3>
                  <p className="event-card-description">{event.description}</p>
                  <span className="event-card-capacity">{event.capacity}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Venues Section */}
      <section className="venues-section">
        <div className="venues-header">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Our Spaces
          </p>
          <h2 className="text-display" style={{ marginBottom: "1rem" }}>
            Event Venues
          </h2>
          <p
            className="text-body"
            style={{ maxWidth: "600px", margin: "0 auto" }}
          >
            From grand terraces to intimate cellar rooms, each space at Villa
            Vittoria offers a unique atmosphere for your celebration.
          </p>
        </div>
        <div className="venues-grid">
          {venues.map((venue) => (
            <div key={venue.name} className="venue-card">
              <h3 className="venue-card-name">{venue.name}</h3>
              <p className="venue-card-capacity">{venue.capacity}</p>
              <p className="venue-card-description">{venue.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="page-cta">
        <div className="page-cta-content">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Start Planning
          </p>
          <h2 className="text-display" style={{ marginBottom: "1rem" }}>
            Let&apos;s Create Together
          </h2>
          <p
            className="text-body"
            style={{ marginBottom: "2rem", maxWidth: "500px" }}
          >
            Our events team is ready to help you craft an unforgettable
            celebration. Share your vision, and we&apos;ll bring it to life.
          </p>
          <Link href="/#booking" className="hero-cta-primary">
            Contact Events Team
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
