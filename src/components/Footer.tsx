import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <Link href="/" className="site-footer-mark">
          YUZANA
        </Link>
        <p className="site-footer-copy">&copy; 2026 YUZANA.AI. All rights reserved.</p>
      </div>
    </footer>
  );
}
