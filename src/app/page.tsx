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
  const credentials = [
    "Chief Information Security Officer — City of Los Angeles",
    "Founded the nation's first Maritime CSOC — Port of Los Angeles",
    "Founded LA Cyber Lab — first city-led public-private threat intelligence partnership",
    "Cybersecurity Leader of the Year · Statescoop 50 Award recipient",
  ];

  return (
    <main>
      <section className="hero hero-split">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="hero-eyebrow">
                Advisory · Architecture · Alignment
              </span>
              <h1>
                Security That Holds.
                <br className="hero-headline-break" />
                <em>Under Real Pressure.</em>
              </h1>
              <p className="subhead">
                Most security programs are built to look impressive. YUZANA is
                built to work — when the stakes are highest, the threat is
                real, and the margin for error is zero.
              </p>

              <div
                className="hero-stats"
                aria-label="Selected founder experience"
              >
                {heroStats.map((stat) => (
                  <div className="hero-stat" key={stat.value}>
                    <span className="hero-stat-value">{stat.value}</span>
                    <p className="hero-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="hero-btns">
                <Link href="/engage" className="btn btn-primary">
                  Request a Conversation
                </Link>
                <Link href="/why-yuzana" className="btn btn-secondary">
                  Read the Philosophy →
                </Link>
              </div>
            </div>

            <aside className="hero-aside">
              <div className="hero-quote-block">
                <p className="hero-quote">
                  &ldquo;YUZANA was the name of my childhood home — the place
                  where my family felt most secure. I chose this name to remind
                  us that security is not about fear, but about the ability to
                  operate with confidence.&rdquo;
                </p>
                <p className="hero-quote-attr">
                  — Timothy Lee, Founder &amp; Principal
                  <br />
                  Former CISO, City of Los Angeles
                </p>
              </div>

              <p className="hero-aside-label">Selected credentials</p>
              <ul className="credential-list">
                {credentials.map((credential) => (
                  <li key={credential}>{credential}</li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>&ldquo;Complexity is the hiding place of failure.&rdquo;</h2>
          <p>
            Fewer tools. Less noise. Total confidence. YUZANA exists to restore
            clarity to leaders responsible for complex, high-stakes
            environments.
          </p>
          <Link href="/engage" className="btn btn-white">
            Start a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
