"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/why-yuzana", label: "Why YUZANA" },
  { href: "/founder", label: "Founder" },
  { href: "/engage", label: "Engage" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuToggleRef = useRef<HTMLButtonElement | null>(null);
  const navLinksRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!isMenuOpen) return;
      const target = event.target as Node;
      const navLinks = navLinksRef.current;
      const menuToggle = menuToggleRef.current;

      if (navLinks?.contains(target) || menuToggle?.contains(target)) {
        return;
      }

      setIsMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  return (
    <nav className={isScrolled ? "scrolled" : ""}>
      <div className="nav-container">
        <Link href="/" className="logo">
          <Image
            src="/yuzanalogo(blacktext).svg"
            alt="YUZANA"
            width={200}
            height={86}
            priority
            style={{ height: '48px', width: 'auto', display: 'block' }}
          />
        </Link>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          ref={menuToggleRef}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
        <ul
          className={`nav-links${isMenuOpen ? " active" : ""}`}
          ref={navLinksRef}
        >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive ? "active" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
