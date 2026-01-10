import { Metadata } from "next";

export const metadata: Metadata = {
  title: "What We Do - YUZANA.AI",
  description: "Clarity in Complexity. Advisory. Architecture. Alignment.",
};

export default function WhatWeDo() {
  return (
    <main>
      <section className="section-spacer">
        <div className="container">
          <h1>Clarity in Complexity.</h1>
          <p className="subhead">
            Most organizations suffer from a fundamental Problem/Solution
            Mismatch. They face adaptive threats but rely on static tools and
            fragmented signals.
          </p>
          <p className="subhead">
            YUZANA helps leaders reconnect intent with execution through Minimum
            Effective Cybersecurity—optimizing resources to deliver maximum
            resilience with zero waste.
          </p>
        </div>
      </section>

      <section style={{ padding: "4rem 0", backgroundColor: "#fff" }}>
        <div className="container">
          <h2>Advisory. Architecture. Alignment.</h2>
          <p>
            We do not sell products or predefined playbooks. We work directly
            with boards, executives, and security leaders to design security
            that holds under pressure.
          </p>
        </div>
      </section>

      <section className="section-spacer">
        <div className="container">
          <div className="three-col-grid">
            <div className="grid-item">
              <h3>Strategic Advisory & Governance</h3>
              <p>
                We translate technical reality into executive clarity — helping
                leadership understand not just what is happening, but what
                matters and why.
              </p>
            </div>

            <div className="grid-item">
              <h3>Security Operations Design</h3>
              <p>
                We design and refine SOCs based on how incidents actually
                unfold. Human judgment, clear escalation, and decisive action
                come first — automation supports, not replaces.
              </p>
            </div>

            <div className="grid-item">
              <h3>Executive Risk Clarity</h3>
              <p>
                We provide unvarnished assessments of exposure and resilience.
                No fear-based scoring. No dashboards for show. Just the ground
                truth leaders need to act.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="dark-section">
        <div className="container">
          <h2>Building What Comes Next</h2>
          <p>
            Our advisory work informs the platform we are developing. YUZANA is
            building an AI-enabled capability shaped by real operational
            experience — not theory.
          </p>
          <p className="key-line">
            We solve it manually today so we can automate it responsibly
            tomorrow.
          </p>
        </div>
      </section>
    </main>
  );
}
