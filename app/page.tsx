"use client";

import {
  Sailboat,
  Wine,
  SmilePlus,
  TreePine,
  Instagram,
  Facebook,
} from "lucide-react";
import Image from "next/image";
import Navbar from "./_componants/navbar";

export default function Home() {
  const experienceItems = [
    {
      icon: Sailboat,
      title: "Private Cruises",
      description:
        "Explore the lake aboard our vintage mahogany Riva, with champagne and canapés served as you glide past storied villas.",
    },
    {
      icon: Wine,
      title: "Wine & Dine",
      description:
        "Our chef crafts seasonal Italian cuisine using ingredients from our gardens and partnerships with local artisans.",
    },
    {
      icon: SmilePlus,
      title: "Wellness & Spa",
      description:
        "Rejuvenate in our intimate spa with treatments inspired by ancient Italian wellness traditions.",
    },
    {
      icon: TreePine,
      title: "Garden Tours",
      description:
        "Wander through centuries-old olive groves, lemon arbors, and rose gardens with our resident horticulturist.",
    },
  ];

  return (
    <>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <Image
            src="/images/hero.png"
            alt="Lake Como at golden hour"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="hero-overlay" />
        </div>
        <div className="hero-mist" />

        <div className="hero-content">
          <div className="hero-eyebrow">
            <p className="text-subtitle">Est. 1892 · Lake Como, Italy</p>
          </div>

          <h1 className="text-hero hero-title">
            <span className="hero-title-line">
              <span
                className="hero-title-text"
                style={{ "--delay": "0.5s" } as React.CSSProperties}
              >
                Where Time
              </span>
            </span>
            <span className="hero-title-line">
              <span
                className="hero-title-text hero-title-italic"
                style={{ "--delay": "0.7s" } as React.CSSProperties}
              >
                Surrenders
              </span>
            </span>
          </h1>

          <p className="text-body-lg hero-description">
            An intimate sanctuary nestled on the serene shores of Lake Como,
            where Italian elegance meets timeless hospitality.
          </p>

          <div className="hero-cta-group">
            <a href="#booking" className="hero-cta-primary">
              Check Availability
            </a>
            <a href="#experience" className="hero-cta-secondary">
              <span>Discover the Experience</span>
              <span className="hero-cta-arrow" />
            </a>
          </div>
        </div>

        <div className="hero-scroll">
          <span className="hero-scroll-text">Scroll</span>
          <div className="hero-scroll-line" />
        </div>
      </section>

      {/* Introduction Section */}
      <section className="intro">
        <div className="intro-content">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            The Villa
          </p>
          <h2 className="text-display" style={{ marginBottom: "1.5rem" }}>
            A Legacy of Italian Excellence
          </h2>
          <p className="text-body" style={{ marginBottom: "1.5rem" }}>
            For over a century, Villa Vittoria has welcomed discerning travelers
            seeking refuge from the ordinary. Perched gracefully above the
            crystalline waters of Lake Como, our historic residence offers an
            unparalleled blend of old-world charm and contemporary luxury.
          </p>
          <p className="text-body">
            Each morning, wake to the gentle sounds of the lake. Each evening,
            watch the Alps turn gold as the sun sets behind the distant peaks.
            This is not merely a stay—it is a return to life&apos;s most
            precious moments.
          </p>

          <div className="ornament" style={{ marginTop: "2rem" }}>
            <span className="ornament-diamond" />
          </div>
        </div>

        <div className="intro-visual">
          <div className="intro-image">
            <Image
              src="/images/villa-exterior.png"
              alt="Villa Vittoria exterior"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="intro-image-frame" />
          <div className="intro-badge">
            <div className="intro-badge-number">130+</div>
            <div className="intro-badge-text">Years of Excellence</div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="rooms" id="rooms">
        <div className="rooms-header">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Accommodations
          </p>
          <h2 className="text-display" style={{ marginBottom: "1rem" }}>
            Suites & Rooms
          </h2>
          <p className="text-body">
            Each of our twelve rooms tells its own story, adorned with antique
            furnishings and offering breathtaking views of the lake or our
            manicured Italian gardens.
          </p>
        </div>

        <div className="rooms-grid">
          {[
            {
              name: "Lake View Suite",
              details: "75 m² · King Bed · Terrace",
              price: "€850",
              image: "/images/suite-lakeview.png",
            },
            {
              name: "Garden Room",
              details: "45 m² · Queen Bed · Garden View",
              price: "€520",
              image: "/images/villa-exterior.png",
            },
            {
              name: "The Vittoria Suite",
              details: "120 m² · Private Pool · Panoramic",
              price: "€1,450",
              image: "/images/suite-lakeview.png",
            },
          ].map((room, index) => (
            <div key={index} className="room-card">
              <div className="room-image">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="room-overlay" />
              <div className="room-content">
                <h3 className="room-name">{room.name}</h3>
                <p className="room-details">{room.details}</p>
                <div className="room-price">
                  <span className="room-price-value">{room.price}</span>
                  <span className="room-price-label">per night</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience" id="experience">
        <div className="experience-header">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Curated Moments
          </p>
          <h2 className="text-display" style={{ marginBottom: "1rem" }}>
            The Villa Experience
          </h2>
          <p className="text-body">
            From private boat excursions to lakeside dining, every moment at
            Villa Vittoria is crafted with intention.
          </p>
        </div>

        <div className="experience-grid">
          {experienceItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={index} className="experience-card">
                <div className="experience-icon">
                  <IconComponent size={22} strokeWidth={1.5} />
                </div>
                <h3 className="experience-title">{item.title}</h3>
                <p className="experience-description">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial">
        <div className="testimonial-content">
          <blockquote className="testimonial-quote">
            Villa Vittoria is not a hotel—it is a homecoming. The kind of place
            where you arrive as a guest and leave as family, with the lake
            forever calling you back.
          </blockquote>
          <div className="testimonial-source">
            <div className="testimonial-line" />
            <p className="testimonial-author">Condé Nast Traveler</p>
            <div className="testimonial-line" />
          </div>
        </div>
      </section>

      {/* Booking CTA Section */}
      <section className="cta" id="booking">
        <div className="cta-visual">
          <div className="cta-image">
            <Image
              src="/images/hero.png"
              alt="Lake Como view"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        <div className="cta-content">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Begin Your Journey
          </p>
          <h2 className="text-display" style={{ marginBottom: "1rem" }}>
            Reserve Your Escape
          </h2>
          <p className="text-body">
            Allow us to craft your perfect Lake Como experience. Our concierge
            team is available to assist with every detail, from room selection
            to curating your bespoke itinerary.
          </p>

          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <div className="cta-input-group">
              <input
                type="date"
                className="cta-input"
                placeholder="Check-in"
                aria-label="Check-in date"
              />
              <input
                type="date"
                className="cta-input"
                placeholder="Check-out"
                aria-label="Check-out date"
              />
            </div>
            <div className="cta-input-group">
              <select className="cta-input" aria-label="Number of guests">
                <option>2 Guests</option>
                <option>1 Guest</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
              </select>
              <select className="cta-input" aria-label="Room type">
                <option>All Room Types</option>
                <option>Lake View Suite</option>
                <option>Garden Room</option>
                <option>The Vittoria Suite</option>
              </select>
            </div>
            <button type="submit" className="cta-submit">
              Check Availability
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">Villa Vittoria</div>
            <p className="footer-tagline">
              A timeless retreat on the shores of Lake Como, where Italian
              elegance and heartfelt hospitality create memories that last a
              lifetime.
            </p>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  Accommodations
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Dining
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Weddings & Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-heading">Information</h4>
            <ul className="footer-links">
              <li>
                <a href="#" className="footer-link">
                  About the Villa
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Location & Directions
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
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
                <span className="footer-link">22021 Bellagio (CO)</span>
              </li>
              <li>
                <span className="footer-link">Italy</span>
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
          <p className="footer-copyright">
            © 2026 Relais Villa Vittoria. All rights reserved.
          </p>
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
