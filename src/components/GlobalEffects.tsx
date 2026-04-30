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

    console.log(
      "%cYUZANA.AI",
      "font-size: 24px; font-weight: bold; color: #B8976A;"
    );
    console.log(
      "%cEditorial Security Advisory",
      "font-size: 14px; color: #0D0D0D;"
    );
    console.log(
      "%cSecurity that holds under real pressure.",
      "font-size: 12px; color: #5A5854;"
    );

    return () => {
      anchorHandlers.forEach(({ element, handler }) => {
        element.removeEventListener("click", handler);
      });
    };
  }, [pathname]);

  return null;
}
