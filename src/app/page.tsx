import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Protection. Defined by Outcome, Not Activity.</h1>
          <p className="subhead">
            Security advisory for leaders responsible for critical missions.
            Built on experience protecting one of the most complex public
            environments in the United States.
          </p>

          <div className="cta-buttons">
            <Link href="/why-yuzana" className="btn btn-primary">
              Read the Philosophy
            </Link>
            <Link href="/founder" className="btn btn-secondary">
              The Founder
            </Link>
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
          <cite>— Timothy Lee</cite>
        </div>
      </section>
    </main>
  );
}
