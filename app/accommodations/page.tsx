"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../_componants/navbar";
import { Instagram, Facebook } from "lucide-react";

export default function Accommodations() {
  const rooms = [
    {
      name: "Lake View Suite",
      tagline: "Panoramic Serenity",
      details: "75 m² · King Bed · Private Terrace",
      price: "€850",
      description:
        "Awaken to the gentle shimmer of Lake Como through floor-to-ceiling windows. This suite features antique Venetian furnishings, a marble bathroom with soaking tub, and a private terrace where breakfast is served at your leisure.",
      amenities: [
        "Lake panorama",
        "Private terrace",
        "Soaking tub",
        "Butler service",
      ],
      image: "/images/suite-lakeview.png",
    },
    {
      name: "Garden Room",
      tagline: "Botanical Retreat",
      details: "45 m² · Queen Bed · Garden View",
      price: "€520",
      description:
        "Nestled among centuries-old olive trees and fragrant lemon groves, our Garden Rooms offer a tranquil escape. Hand-painted frescoes, silk draperies, and views of our manicured Italian gardens create an atmosphere of refined calm.",
      amenities: [
        "Garden view",
        "Hand-painted frescoes",
        "Rainfall shower",
        "Minibar",
      ],
      image: "/images/villa-exterior.png",
    },
    {
      name: "The Vittoria Suite",
      tagline: "Ultimate Indulgence",
      details: "120 m² · Private Pool · Panoramic Views",
      price: "€1,450",
      description:
        "Our crown jewel spans the entire top floor, offering 360-degree views of the lake and Alps. Features include a private infinity pool, personal concierge, antique library, and a dining room for intimate gatherings.",
      amenities: [
        "Private infinity pool",
        "Personal concierge",
        "Antique library",
        "Private dining",
      ],
      image: "/images/suite-lakeview.png",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-bg">
          <Image
            src="/images/suite-lakeview.png"
            alt="Luxury suite overlooking Lake Como"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Accommodations
          </p>
          <h1 className="text-display">Suites & Rooms</h1>
          <p
            className="text-body-lg"
            style={{ maxWidth: "600px", marginTop: "1.5rem" }}
          >
            Each of our twelve rooms tells its own story, adorned with antique
            furnishings and offering breathtaking views of the lake or our
            manicured Italian gardens.
          </p>
        </div>
      </section>

      {/* Rooms Detail Section */}
      <section className="rooms-detail">
        {rooms.map((room, index) => (
          <div
            key={room.name}
            className={`room-detail-row ${index % 2 === 1 ? "reversed" : ""}`}
          >
            <div className="room-detail-image">
              <Image
                src={room.image}
                alt={room.name}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="room-detail-content">
              <p className="text-subtitle">{room.tagline}</p>
              <h2 className="text-display" style={{ margin: "0.5rem 0 1rem" }}>
                {room.name}
              </h2>
              <p className="room-detail-specs">{room.details}</p>
              <p className="text-body" style={{ margin: "1.5rem 0" }}>
                {room.description}
              </p>
              <ul className="room-detail-amenities">
                {room.amenities.map((amenity) => (
                  <li key={amenity}>{amenity}</li>
                ))}
              </ul>
              <div className="room-detail-footer">
                <div className="room-detail-price">
                  <span className="price-value">{room.price}</span>
                  <span className="price-label">per night</span>
                </div>
                <a href="#booking" className="room-detail-cta">
                  Reserve
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Booking CTA */}
      <section className="page-cta">
        <div className="page-cta-content">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Begin Your Stay
          </p>
          <h2 className="text-display" style={{ marginBottom: "1rem" }}>
            Reserve Your Room
          </h2>
          <p
            className="text-body"
            style={{ marginBottom: "2rem", maxWidth: "500px" }}
          >
            Our concierge team is available to assist with every detail of your
            stay, from room selection to personalized experiences.
          </p>
          <Link href="/#booking" className="hero-cta-primary">
            Check Availability
          </Link>
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
                  Weddings & Events
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
