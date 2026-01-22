"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../_componants/navbar";
import { Instagram, Facebook, X } from "lucide-react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    {
      src: "/images/hero.png",
      alt: "Lake Como view from villa terrace",
      category: "Views",
    },
    {
      src: "/images/villa-exterior.png",
      alt: "Villa Vittoria exterior",
      category: "Villa",
    },
    {
      src: "/images/suite-lakeview.png",
      alt: "Luxury suite interior",
      category: "Rooms",
    },
    {
      src: "/images/hero.png",
      alt: "Sunset over Lake Como",
      category: "Views",
    },
    {
      src: "/images/villa-exterior.png",
      alt: "Italian garden",
      category: "Gardens",
    },
    {
      src: "/images/suite-lakeview.png",
      alt: "Terrace dining",
      category: "Dining",
    },
    {
      src: "/images/hero.png",
      alt: "Private boat on lake",
      category: "Experiences",
    },
    {
      src: "/images/villa-exterior.png",
      alt: "Rose garden path",
      category: "Gardens",
    },
    {
      src: "/images/suite-lakeview.png",
      alt: "Master bathroom",
      category: "Rooms",
    },
  ];

  const categories = [
    "All",
    ...Array.from(new Set(galleryImages.map((img) => img.category))),
  ];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="page-hero page-hero-short">
        <div className="page-hero-bg">
          <Image
            src="/images/hero.png"
            alt="Villa Vittoria Gallery"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
            priority
          />
          <div className="page-hero-overlay" />
        </div>
        <div className="page-hero-content">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Visual Journey
          </p>
          <h1 className="text-display">Gallery</h1>
          <p
            className="text-body-lg"
            style={{ maxWidth: "600px", marginTop: "1.5rem" }}
          >
            Explore the beauty of Villa Vittoria through our curated collection
            of photographs.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        {/* Category Filter */}
        <div className="gallery-filter">
          {categories.map((category) => (
            <button
              key={category}
              className={`gallery-filter-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                style={{ objectFit: "cover" }}
              />
              <div className="gallery-item-overlay">
                <span className="gallery-item-category">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <button
            className="lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="Close lightbox"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].alt}
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="lightbox-nav">
            <button
              className="lightbox-nav-btn"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(
                  selectedImage === 0
                    ? filteredImages.length - 1
                    : selectedImage - 1,
                );
              }}
            >
              ←
            </button>
            <span className="lightbox-counter">
              {selectedImage + 1} / {filteredImages.length}
            </span>
            <button
              className="lightbox-nav-btn"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(
                  selectedImage === filteredImages.length - 1
                    ? 0
                    : selectedImage + 1,
                );
              }}
            >
              →
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="page-cta">
        <div className="page-cta-content">
          <p className="text-subtitle" style={{ marginBottom: "1rem" }}>
            Experience It Yourself
          </p>
          <h2 className="text-display" style={{ marginBottom: "1rem" }}>
            Visit Villa Vittoria
          </h2>
          <p
            className="text-body"
            style={{ marginBottom: "2rem", maxWidth: "500px" }}
          >
            Pictures capture moments, but the true magic of Lake Como must be
            experienced in person.
          </p>
          <Link href="/#booking" className="hero-cta-primary">
            Book Your Stay
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
