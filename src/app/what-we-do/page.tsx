import { Metadata } from "next";
import "./what-we-do.css";

export const metadata: Metadata = {
  title: "What We Do - YUZANA.AI",
  description:
    "Clarity in Complexity. Advisory. Architecture. Alignment. Executive cybersecurity advisory.",
};

export default function WhatWeDo() {
  return (
    <main>
      {/* Hero */}
      <section className="section-spacer">
        <div className="container">
          <h1>Clarity in Complexity.</h1>
          <p className="subhead">
            The gap between cybersecurity spending and real safety is widening.
            Organizations face adaptive threats, yet rely on static tools and
            fragmented signals.
          </p>
          <p className="subhead">
            YUZANA helps leaders reconnect intent with execution through{" "}
            <strong>Minimum Effective Security</strong>—optimizing resources to
            deliver maximum resilience with zero waste.
          </p>
        </div>
      </section>

      {/* Core Message */}
      <section style={{ padding: "4rem 0", backgroundColor: "#fff" }}>
        <div className="container">
          <h2>Advisory. Architecture. Alignment.</h2>
          <p>
            YUZANA is an <strong>executive cybersecurity advisory firm</strong>{" "}
            providing strategic guidance, independent judgment, and decision
            support for complex and high-consequence environments.
          </p>
          <p>
            We do not sell products or predefined playbooks. We partner with
            executive leadership and security teams to design defenses that hold
            under pressure.
          </p>
        </div>
      </section>

      {/* Our Capabilities */}
      <section className="section-spacer">
        <div className="container">
          <div className="wwd-section-heading">
            <span className="wwd-eyebrow">Services</span>
            <h2>Our Capabilities</h2>
          </div>

          {/* 01. Strategic Advisory */}
          <div className="capability-block">
            <div className="capability-title-wrapper">
              <span className="wwd-eyebrow">01</span>
              <h3 className="capability-title">Strategic Advisory</h3>
              <p className="capability-subtitle">The Retainer</p>
            </div>
            <div className="capability-content">
              <span className="capability-label">
                For organizations that need
              </span>
              <p>
                Trusted, senior-level cybersecurity guidance and a strategic
                second opinion.
              </p>

              <span className="capability-label">What we do</span>
              <p>
                We act as an extension of your leadership team—advising CISOs,
                CIOs, CEOs, and Boards on governance, prioritization, and
                long-term security direction. Our role is to bring clarity to
                complex decisions and alignment across leadership.
              </p>

              <span className="capability-label">Common focus areas</span>
              <ul className="focus-list">
                <li>Security strategy and risk prioritization</li>
                <li>Governance and executive decision support</li>
                <li>Vendor and tool rationalization (cutting noise)</li>
                <li>Executive and board-level alignment</li>
              </ul>
            </div>
          </div>

          {/* 02. Operational Architecture */}
          <div className="capability-block">
            <div className="capability-title-wrapper">
              <span className="wwd-eyebrow">02</span>
              <h3 className="capability-title">Operational Architecture</h3>
              <p className="capability-subtitle">The Blueprint</p>
            </div>
            <div className="capability-content">
              <span className="capability-label">
                For organizations that need
              </span>
              <p>
                To move from manual chaos to resilient, automated security
                operations.
              </p>

              <span className="capability-label">What we do</span>
              <p>
                We design the <strong>operational security blueprint</strong>—from
                SOC evolution to major-event readiness—so organizations can
                transition toward modern, resilient operating models. We deliver
                the architecture and direction; your teams or partners execute.
              </p>

              <span className="capability-label">Common focus areas</span>
              <ul className="focus-list">
                <li>SOC modernization and automation strategy</li>
                <li>
                  Critical infrastructure and mission-critical asset protection
                </li>
                <li>Major event and special-operations readiness</li>
              </ul>
            </div>
          </div>

          {/* 03. Executive Risk Clarity */}
          <div className="capability-block">
            <div className="capability-title-wrapper">
              <span className="wwd-eyebrow">03</span>
              <h3 className="capability-title">Executive Risk Clarity</h3>
              <p className="capability-subtitle">The Bridge</p>
            </div>
            <div className="capability-content">
              <span className="capability-label">
                For organizations that need
              </span>
              <p>
                To explain technical risk clearly to non-technical leadership and
                Boards.
              </p>

              <span className="capability-label">What we do</span>
              <p>
                We bridge the gap between the SOC and the
                Boardroom—translating threats, vulnerabilities, and incidents
                into business consequence and leadership decisions. No
                fear-based scoring. No dashboards for show.
              </p>

              <span className="capability-label">Common focus areas</span>
              <ul className="focus-list">
                <li>Board-level risk narratives and reporting</li>
                <li>Crisis communication and executive briefings</li>
                <li>Security investment justification and prioritization</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How We Engage */}
      <section style={{ padding: "6rem 0", backgroundColor: "#fff" }}>
        <div className="container">
          <div className="wwd-section-heading">
            <span className="wwd-eyebrow">Engagement</span>
            <h2>How We Engage</h2>
          </div>

          <p className="engage-intro" style={{ marginTop: "3rem" }}>
            YUZANA operates on a <strong>principal-led model</strong>. We do
            not delegate advisory work to junior consultants.
          </p>
          <p className="engage-intro">We engage in two primary ways:</p>

          <div className="engage-models">
            <div className="engage-model">
              <span className="engage-model-number">01</span>
              <h3>Strategic Sprint</h3>
              <p className="engage-model-subtitle">Ground Truth Review</p>
              <p>
                A fixed-fee, time-bound engagement to assess current reality,
                identify what truly matters, and deliver an executive-level
                security roadmap.
              </p>
            </div>

            <div className="engage-model">
              <span className="engage-model-number">02</span>
              <h3>Executive Advisory Retainer</h3>
              <p className="engage-model-subtitle">&nbsp;</p>
              <p>
                An ongoing advisory relationship providing strategic counsel,
                architectural oversight, and leadership support for complex and
                evolving security environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="wwd-dark-section">
        <div className="container">
          <span className="wwd-eyebrow" style={{ color: "rgba(245, 245, 240, 0.6)" }}>
            Foundation
          </span>
          <h2>Our Principles</h2>
          <ul className="principles-list">
            <li>
              <span className="principle-name">Advisory Only:</span> We provide
              clarity and experienced judgment—not operational labor or managed
              services.
            </li>
            <li>
              <span className="principle-name">Vendor Neutral:</span>{" "}
              Independent advice, free from sales incentives.
            </li>
            <li>
              <span className="principle-name">Executive Focus:</span> We speak
              the language of leadership and the Board—not the helpdesk.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
