import Link from "next/link";

export default function Home() {
  const heroStats = [
    {
      value: "1B+",
      label: "Security events processed daily at LA's Integrated SOC",
    },
    {
      value: "#1",
      label: "Nation's first city-led public-private cyber lab",
    },
    {
      value: "2nd",
      label: "Largest US city CISO experience",
    },
  ];

  return (
    <main>
      <section className="hero">
        <div className="container">
          <span className="hero-eyebrow">
            Advisory · Architecture · Alignment
          </span>
          <h1>Security That Holds. Under Real Pressure.</h1>
          <p className="subhead">
            Most security programs are built to look impressive. YUZANA is
            built to work — when the stakes are highest, the threat is real,
            and the margin for error is zero.
          </p>

          <div className="cta-buttons">
            <Link href="/engage" className="btn btn-primary">
              Request a Conversation
            </Link>
            <Link href="/why-yuzana" className="btn btn-secondary">
              Read the Philosophy →
            </Link>
          </div>

          <div className="hero-stats" aria-label="Selected founder experience">
            {heroStats.map((stat) => (
              <div className="hero-stat" key={stat.value}>
                <span className="hero-stat-value">{stat.value}</span>
                <p className="hero-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="supporting-statement">
        <div className="container-narrow">
          <div className="large-text">
            The security industry is loud.
            <br />
            <br />
            Tools multiply. Signals fragment. Confidence erodes.
            <br />
            <br />
            YUZANA exists to restore clarity.
            <br />
            <br />
            We work with boards, executives, and security leaders who need
            security to hold under pressure — not just look impressive on paper.
          </div>
        </div>
      </section>

      <section className="origin-anchor">
        <div className="container-narrow">
          <blockquote>
            &ldquo;YUZANA was the name of my childhood home — the place where my
            family felt most secure. I chose this name to remind us that
            security is not about fear, but about the ability to operate with
            confidence.&rdquo;
          </blockquote>
          <cite>
            — Timothy Lee, Founder &amp; Principal · Former CISO, City of Los
            Angeles
          </cite>
        </div>
      </section>
    </main>
  );
}
