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
            The industry is obsessed with volume—more tools, more alerts, more
            compliance checklists. YUZANA exists to filter the signal from the
            noise and counter the &ldquo;Security Theater&rdquo; mindset.
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
              <span className="eyebrow">02 — THE DOCTRINE</span>
              <h2 className="belief-title">Contextual Intelligence.</h2>
            </div>
            <div className="belief-content">
              <p>
                Effective decision-making relies on truth, not volume.
              </p>
              <p>
                We practice the doctrine of <strong>Situational Convergence</strong>—deeply
                mapping your internal Protection Domain (&ldquo;<strong>Know Yourself</strong>&rdquo;)
                and filtering for strictly relevant external Threat Intelligence
                (&ldquo;<strong>Know Your Enemy</strong>&rdquo;).
              </p>
              <p>
                We strip away global noise to integrate these two realities into
                a single pane of glass—replacing anxiety with clarity.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="philosophy-section">
          <div className="belief-block">
            <div className="belief-title-wrapper">
              <span className="eyebrow">03 — THE DISCIPLINE</span>
              <h2 className="belief-title">Minimum Effective Security.</h2>
            </div>
            <div className="belief-content">
              <p>
                Complexity is the hiding place of failure. Every organization
                faces a unique threat landscape; generic templates just create
                bloat. We design for the <strong>Minimum Effective Posture</strong>—architecting
                a defense that is precision-matched to your specific reality.
                We strip away the excess to build a system that is lightweight,
                agile, and personalized to the threats you actually face.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="dark-mode-section">
        <div className="container">
          <div className="belief-block">
            <div className="belief-title-wrapper">
              <span className="eyebrow">04 — THE VISION</span>
              <h2 className="belief-title">The Dark SOC.</h2>
            </div>
            <div className="belief-content">
              <p>
                Manufacturing has moved to &ldquo;Dark Factories&rdquo;—fully
                autonomous operations. Cybersecurity must follow.
              </p>
              <p>
                Our vision is the <strong>Autonomous SOC</strong>: a self-healing
                ecosystem where routine threats are neutralized at machine speed.
                We move from &ldquo;Human-in-the-Loop&rdquo; (bottleneck) to
                &ldquo;Human-on-the-Loop&rdquo; (oversight)—preserving human
                judgment for where it matters most: high-stakes decision making
                and complex threat hunting.
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
          <h3>The End of Complexity.</h3>
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
