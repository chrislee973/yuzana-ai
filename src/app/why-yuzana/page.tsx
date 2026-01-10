import { Metadata } from "next";
import Link from "next/link";
import "./why-yuzana.css";

export const metadata: Metadata = {
  title: "Why YUZANA - YUZANA.AI",
  description:
    "Noise Is the Enemy. Precision Security, Trust Gap, and the Dark SOC vision.",
};

export default function WhyYuzana() {
  return (
    <main>
      <div className="container">
        <header className="philosophy-header">
          <span className="eyebrow">The Philosophy</span>
          <h1>Noise Is the Enemy.</h1>
          <p className="hero-sub">
            The industry is drowning in data but starving for context. YUZANA
            exists to counter the &ldquo;Security Theater&rdquo; mindset.
          </p>
        </header>
      </div>

      <div className="container">
        <section className="philosophy-section">
          <div className="belief-block">
            <div className="belief-title-wrapper">
              <span className="eyebrow">01 — The Method</span>
              <h2 className="belief-title">Precision Security.</h2>
            </div>
            <div className="belief-content">
              <p>Legacy security relies on volume. We believe in precision.</p>

              <div className="highlight-box">
                <p>
                  We focus on the <strong>Triple Threat Zone</strong>—the
                  precise intersection of Critical Assets, Active Threats, and
                  Exploitable Weaknesses.
                </p>
                <p className="meta">
                  Everything outside of that intersection is distraction.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="philosophy-section">
          <div className="belief-block">
            <div className="belief-title-wrapper">
              <span className="eyebrow">02 — The Barrier</span>
              <h2 className="belief-title">The Trust Gap.</h2>
            </div>
            <div className="belief-content">
              <p>
                Why is the modern SOC still manually intensive? Because leaders
                do not trust their tools to act alone.
              </p>
              <p>
                We bridge this gap by building <strong>High-Fidelity Context</strong>
                —aligning defenses to business physiology so that automation
                becomes safe, surgical, and trusted.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="dark-mode-section">
        <div className="container">
          <div className="belief-block">
            <div className="belief-title-wrapper">
              <span className="eyebrow">03 — The Vision</span>
              <h2 className="belief-title">The Dark SOC.</h2>
            </div>
            <div className="belief-content">
              <p>
                Manufacturing has moved to &ldquo;Dark Factories&rdquo;—fully
                autonomous operations. Cybersecurity must follow.
              </p>
              <p>
                Our vision is the <strong>Autonomous SOC</strong>: a self-healing
                ecosystem where routine threats are neutralized instantly without
                human intervention.
              </p>
              <p>
                This approach solves the critical capacity gap—reducing the
                manual load so your security operation becomes scalable,
                resilient, and sustainable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="manifesto-close">
          <span className="eyebrow">The Outcome</span>
          <h3>Minimum Effective Security.</h3>
          <p>
            Complexity is the hiding place of failure.<br />
            Fewer tools. Less noise. Total confidence.
          </p>
        </section>
      </div>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to restore clarity?</h2>
          <p className="subhead">
            Let&apos;s have a conversation about what matters most to your
            organization.
          </p>
          <Link href="/engage" className="btn btn-primary">
            Start the Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
