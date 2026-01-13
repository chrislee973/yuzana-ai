"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function GlobalEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const anchorHandlers: Array<{
      element: HTMLAnchorElement;
      handler: (event: MouseEvent) => void;
    }> = [];

    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((anchor) => {
      const handler = (event: MouseEvent) => {
        event.preventDefault();
        const href = anchor.getAttribute("href");
        if (!href) return;
        const target = document.querySelector(href);
        if (!target) return;
        const offsetTop =
          (target as HTMLElement).offsetTop - 80; // Account for fixed nav
        window.scrollTo({ top: offsetTop, behavior: "smooth" });
      };

      anchor.addEventListener("click", handler);
      anchorHandlers.push({ element: anchor, handler });
    });

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let observer: IntersectionObserver | null = null;
    const isFounderPage = pathname === "/founder";
    if (!prefersReducedMotion && !isFounderPage) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              element.style.opacity = "1";
              element.style.transform = "translateY(0)";
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      document.querySelectorAll<HTMLElement>("section").forEach((section) => {
        section.style.opacity = "0";
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer?.observe(section);
      });
    }

    const buttonHandlers: Array<{
      element: HTMLElement;
      enter: () => void;
      leave: () => void;
    }> = [];

    document.querySelectorAll<HTMLElement>(".btn").forEach((button) => {
      const enter = () => {
        button.style.transform = "translateY(-2px)";
      };
      const leave = () => {
        button.style.transform = "translateY(0)";
      };

      button.addEventListener("mouseenter", enter);
      button.addEventListener("mouseleave", leave);
      buttonHandlers.push({ element: button, enter, leave });
    });

    console.log(
      "%cYUZANA.AI",
      "font-size: 24px; font-weight: bold; color: #C8553D;"
    );
    console.log(
      "%cThe Quiet Architect",
      "font-size: 14px; color: #1A1A1D;"
    );
    console.log(
      "%cSecurity defined by outcome, not activity.",
      "font-size: 12px; color: #666;"
    );

    return () => {
      anchorHandlers.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });

      buttonHandlers.forEach(({ element, enter, leave }) => {
        element.removeEventListener("mouseenter", enter);
        element.removeEventListener("mouseleave", leave);
      });

      if (observer) {
        observer.disconnect();
      }
    };
  }, [pathname]);

  return null;
}
