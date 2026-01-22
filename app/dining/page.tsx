"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../_componants/navbar";
import { Instagram, Facebook, Clock } from "lucide-react";

export default function Dining() {
  const venues = [
    {
      name: "Terrazza sul Lago",
      tagline: "Lakeside Fine Dining",
      description:
        "Our signature restaurant, perched on a romantic terrace overlooking the lake. Chef Marco Bellini crafts seasonal tasting menus that honor Lombardy's culinary heritage while embracing contemporary technique.",
      hours: "Dinner: 7:00 PM - 10:30 PM",
      dress: "Smart Elegant",
      reservations: "Required",
      image: "/images/villa-exterior.png",
    },
    {
      name: "Il Giardino",
      tagline: "Garden Café",
      description:
        "A casual yet refined setting among our fragrant gardens. Enjoy freshly baked pastries at breakfast, light Mediterranean fare for lunch, and aperitivo as the sun sets over the distant mountains.",
      hours: "8:00 AM - 7:00 PM",
      dress: "Resort Casual",
      reservations: "Recommended",
      image: "/images/hero.png",
    },
    {
      name: "La Cantina",
      tagline: "Wine Cellar Experience",
      description:
        "Descend into our centuries-old wine cellar for an intimate tasting journey. Our sommelier guides you through rare Italian vintages paired with artisanal cheeses and charcuterie from local producers.",
      hours: "By appointment",
      dress: "Smart Casual",
      reservations: "Required",
      image: "/images/suite-lakeview.png",
    },
  ];

  const menuHighlights = [
    {
      course: "Antipasto",
      name: "Carpaccio di Branzino",
      description: "Lake Como sea bass, citrus, capers, micro herbs",
    },
    {
      course: "Primo",
      name: "Risotto allo Zafferano",
      description: "Carnaroli rice, Lombardy saffron, bone marrow, gold leaf",
    },
    {
      course: "Secondo",
      name: "Filetto di Manzo",
      description: "Piedmontese beef, truffle jus, seasonal vegetables",
    },
    {
      course: "Dolce",
      name: "Pannacotta al Limone",
      description: "Lemon pannacotta, garden berries, amaretti crumble",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image
            src="/images/villa-exterior.png"
            alt="Dining at Villa Vittoria"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Culinary Excellence
          </p>
          <h1 className="text-display">Dining</h1>
          <p
            className="text-body-lg"
            style={{ maxWidth: "600px", marginTop: "1.5rem" }}
          >
            From intimate dinners overlooking the lake to casual garden lunches,
            every meal at Villa Vittoria celebrates the finest Italian
            traditions.
          </p>
        </div>
      </section>

      {/* Venues Section */}
      <section className="dining-venues">
        {venues.map((venue, index) => (
          <div
            key={venue.name}
            className={`dining-venue-row ${index % 2 === 1 ? "reversed" : ""}`}
          >
            <div className="dining-venue-image">
              <Image
                src={venue.image}
                alt={venue.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="dining-venue-content">
              <p className="text-subtitle">{venue.tagline}</p>
              <h2
                className="text-display"
                style={{ margin: "0.5rem 0 1.5rem" }}
              >
                {venue.name}
              </h2>
              <p className="text-body" style={{ marginBottom: "2rem" }}>
                {venue.description}
              </p>
              <div className="dining-venue-details">
                <div className="dining-venue-detail">
                  <Clock size={16} strokeWidth={1.5} />
                  <span>{venue.hours}</span>
                </div>
                <div className="dining-venue-detail">
                  <span className="detail-label">Dress Code:</span>
                  <span>{venue.dress}</span>
                </div>
                <div className="dining-venue-detail">
                  <span className="detail-label">Reservations:</span>
                  <span>{venue.reservations}</span>
                </div>
              </div>
              <Link href="/#booking" className="dining-venue-cta">
                Reserve a Table
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <div className="menu-header">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            A Taste of Villa Vittoria
          </p>
          <h2 className="text-display" style={{ marginBottom: "1rem" }}>
            Seasonal Menu
          </h2>
          <p className="text-body">
            Our menus change with the seasons, celebrating the finest
            ingredients from our gardens and trusted local producers.
          </p>
        </div>
        <div className="menu-grid">
          {menuHighlights.map((item) => (
            <div key={item.name} className="menu-item">
              <span className="menu-item-course">{item.course}</span>
              <h3 className="menu-item-name">{item.name}</h3>
              <p className="menu-item-description">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Private Dining CTA */}
      <section className="page-cta">
        <div className="page-cta-content">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Private Events
          </p>
          <h2 className="text-display" style={{ marginBottom: "1rem" }}>
            Private Dining
          </h2>
          <p
            className="text-body"
            style={{ marginBottom: "2rem", maxWidth: "500px" }}
          >
            Host an unforgettable private dinner in our wine cellar, lakeside
            terrace, or within the historic walls of the villa.
          </p>
          <Link href="/events" className="hero-cta-primary">
            Explore Private Events
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
