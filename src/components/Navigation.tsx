"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/what-we-do", label: "What We Do" },
  { href: "/work", label: "Work" },
  { href: "/why-yuzana", label: "Why YUZANA" },
  { href: "/founder", label: "Founder" },
  { href: "/engage", label: "Engage", cta: true },
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
            className="nav-logo-image"
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
            const classes = [
              isActive ? "active" : null,
              item.cta
                ? "nav-cta inline-flex items-center justify-center !bg-ink !px-5 !py-2.5 !text-warm-white transition-colors duration-200 hover:!bg-accent-dark hover:!text-warm-white max-[820px]:!block max-[820px]:!w-full max-[820px]:!bg-transparent max-[820px]:!px-0 max-[820px]:!py-[0.95rem] max-[820px]:!text-[color:var(--text-secondary)] max-[820px]:hover:!text-accent-dark"
                : null,
              item.cta && isActive
                ? "!bg-accent-dark !text-warm-white max-[820px]:!bg-transparent max-[820px]:!text-accent-dark"
                : null,
            ]
              .filter(Boolean)
              .join(" ");

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={classes || undefined}
                  onClick={() => setIsMenuOpen(false)}
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
