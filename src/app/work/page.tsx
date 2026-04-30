import { Metadata } from "next";
import Link from "next/link";
import "./work.css";

export const metadata: Metadata = {
  title: "Selected Work - YUZANA.AI",
  description:
    "Selected work across municipal government, port infrastructure, law enforcement, and public-private cybersecurity partnerships.",
};

const environments = [
  {
    title: "Municipal Government",
    description:
      "City-scale infrastructure protecting millions of residents and critical civic systems.",
  },
  {
    title: "Critical Port Infrastructure",
    description:
      "The busiest container port in the Western Hemisphere — operational continuity is non-negotiable.",
  },
  {
    title: "Law Enforcement",
    description:
      "High-sensitivity environments requiring precision architecture and mission-critical uptime.",
  },
  {
    title: "Public-Private Partnership",
    description:
      "Designing the frameworks through which government and business share real threat intelligence.",
  },
];

const engagements = [
  {
    number: "01",
    context: "Municipal Government · Major US City",
    title:
      "Standing up a city-wide Critical Infrastructure Protection program from the ground up",
    body: "Established the security architecture and operational doctrine for America's second-largest city — encompassing utilities, transportation, emergency services, and civic digital systems. Directed an Integrated SOC processing over one billion security events per day.",
    tags: [
      "SOC Architecture",
      "Critical Infrastructure",
      "Governance",
      "Executive Alignment",
    ],
  },
  {
    number: "02",
    context: "Maritime / Port Authority · Western US",
    title: "Designing the nation's first maritime Cyber Security Operations Center",
    body: "Built from scratch at the Port of Los Angeles — the Western Hemisphere's busiest container port. Addressed the unique challenge of securing operational technology (OT) systems alongside IT infrastructure in a 24/7 high-volume logistics environment.",
    tags: ["OT/IT Convergence", "CSOC Design", "Major Event Readiness"],
  },
  {
    number: "03",
    context: "Public-Private Partnership · City of Los Angeles",
    title:
      "Founding the LA Cyber Lab — the nation's first city-led threat intelligence sharing model",
    body: "Designed and launched the governance structure, trust framework, and operational model for a first-of-kind partnership. Created a mechanism for private sector organizations to receive and share real-time threat intelligence previously unavailable outside of government channels.",
    tags: ["Threat Intelligence", "Partnership Design", "Policy & Governance"],
  },
  {
    number: "04",
    context: "Law Enforcement · Active Advisory",
    title:
      "Strategic security advisory for a major municipal law enforcement agency",
    body: "Ongoing advisory engagement focused on security posture assessment, operational architecture, and executive alignment for a large-scale law enforcement environment managing sensitive systems and high public accountability.",
    tags: [
      "Strategic Advisory",
      "Architecture Review",
      "Sensitive Environments",
    ],
  },
];

export default function WorkPage() {
  return (
    <main>
      <section className="work-hero">
        <div className="container">
          <span className="work-eyebrow">Selected Work</span>
          <h1>Environments Where Failure Is Not an Option.</h1>
          <p className="subhead">
            YUZANA has operated at the intersection of complex infrastructure,
            public accountability, and adversarial pressure. The following
            reflects the types of environments and challenges we have been
            brought in to solve.
          </p>
        </div>
      </section>

      <section className="work-section">
        <div className="container">
          <div className="work-section-heading">
            <span className="work-eyebrow">Where We&apos;ve Operated</span>
            <h2>High-stakes environments demand a different kind of security leadership.</h2>
          </div>

          <div className="work-environment-grid">
            {environments.map((environment) => (
              <article className="work-card" key={environment.title}>
                <h3>{environment.title}</h3>
                <p>{environment.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="work-section work-section-muted">
        <div className="container">
          <div className="work-section-heading">
            <span className="work-eyebrow">Representative Engagements</span>
            <p className="work-section-intro">
              Details are held in confidence. Scope and outcomes are shared at
              the level appropriate to each conversation.
            </p>
          </div>

          <div className="work-engagements">
            {engagements.map((engagement) => (
              <article className="work-engagement" key={engagement.number}>
                <div className="work-engagement-meta">
                  <span className="work-engagement-number">
                    {engagement.number}
                  </span>
                  <p className="work-engagement-context">{engagement.context}</p>
                </div>
                <div className="work-engagement-body">
                  <h3>{engagement.title}</h3>
                  <p>{engagement.body}</p>
                  <div className="work-tags" aria-label="Engagement tags">
                    {engagement.tags.map((tag) => (
                      <span className="work-tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="work-confidentiality-note">
            <p>
              <strong>Confidentiality Note:</strong> YUZANA operates at the
              principal level in sensitive environments. We do not publicize
              client names without explicit permission. If you are evaluating a
              potential engagement, we are happy to speak to relevant
              experience in a direct conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section work-cta-section">
        <div className="container">
          <h2>Need relevant experience under pressure?</h2>
          <p className="subhead">
            Start with a direct conversation about your environment, the stakes,
            and what has to hold.
          </p>
          <div className="cta-buttons">
            <Link href="/engage" className="btn btn-primary">
              Start a Conversation
            </Link>
            <Link href="/what-we-do" className="btn btn-secondary">
              What We Do →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
