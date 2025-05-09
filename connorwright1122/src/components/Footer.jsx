import React from 'react';
import '../index.css'; 

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/connor-wright-865io/",
    imgSrc: "/assets/images/footer-logos/logo-linkedin.png",
    alt: "LinkedIn Logo"
  },
  {
    href: "https://github.com/connorwright1122",
    imgSrc: "/assets/images/footer-logos/logo-github.png",
    alt: "GitHub Logo"
  },
  {
    href: "https://www.youtube.com/@ConnorWright-io6kx",
    imgSrc: "/assets/images/footer-logos/logo-yt.png",
    alt: "YouTube Logo"
  },
  {
    href: "https://www.instagram.com/connorisavisionary/?hl=en",
    imgSrc: "/assets/images/footer-logos/logo-ig.png",
    alt: "Instagram Logo"
  }
];

export default function Footer() {
  return (
    <footer>
      <div className="social-media-buttons">
        {socialLinks.map(({ href, imgSrc, alt }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-logo"
          >
            <img src={imgSrc} alt={alt} />
          </a>
        ))}
      </div>
    </footer>
  );
}
