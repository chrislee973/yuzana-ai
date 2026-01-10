import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Founder - YUZANA.AI",
  description:
    "Timothy Lee - Operator. Architect. Advisor. Former CISO of the City of Los Angeles.",
};

export default function Founder() {
  return (
    <main>
      <section className="founder-hero">
        <div className="container">
          <h1>Timothy Lee</h1>
          <p className="title" style={{ textAlign: "center", marginLeft: "auto", marginRight: "auto" }}>
            Founder & Principal
          </p>
          <blockquote>
            &ldquo;Security is not about the absence of threats. It is the
            presence of resilience.&rdquo;
          </blockquote>
        </div>
      </section>

      <section className="founder-narrative">
        <div className="container-wide">
          <div className="bio-grid">
            <div className="bio-content">
              <h2>Operator. Architect. Advisor.</h2>

              <p>
                Timothy Lee is a veteran security executive who has spent his
                career protecting some of the most complex public environments
                in the United States. He founded YUZANA.AI to bridge the gap
                between the promise of security technology and the reality of
                operational defense.
              </p>

              <h3>Defense at Scale</h3>

              <p>
                Timothy&apos;s approach is defined by operational reality.
                Before leading the City&apos;s overall strategy, he established
                the cybersecurity program at the Port of Los Angeles, designing
                and implementing the nation&apos;s first maritime Cyber Security
                Operations Center (CSOC) to secure the busiest container port in
                the Western Hemisphere.
              </p>

              <p>
                He later served as the Chief Information Security Officer for
                the City of Los Angeles, where he established the City&apos;s
                Critical Infrastructure Protection program—securing the digital
                and physical lifelines of America&apos;s second-largest
                metropolis. There, he directed the award-winning Integrated
                Security Operations Center (ISOC), a command hub processing over
                one billion security events daily.
              </p>

              <h3>Collaborative Intelligence</h3>

              <p>
                Timothy founded the LA Cyber Lab, the nation&apos;s first
                city-led public-private partnership, to fundamentally change how
                government and business share threat intelligence.
              </p>

              <p>
                Timothy is a frequent speaker at various national and
                international conferences.
              </p>

              <ul className="credentials-list">
                <li>Former CISO, City of Los Angeles</li>
                <li>Founder & Board Member, LA Cyber Lab</li>
                <li>
                  Former CISO, Port of Los Angeles (Established first seaport
                  CSOC)
                </li>
                <li>
                  Cybersecurity Leader of The Year & Statescoop 50 Award
                  Recipient
                </li>
              </ul>
            </div>

            <div className="bio-photo">
              <img
                src="/tl_headshot.jpeg"
                alt="Timothy Lee - Founder & Principal, YUZANA.AI"
                className="founder-headshot"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          padding: "6rem 0",
          backgroundColor: "#1A1A1D",
          color: "#F5F5F0",
          textAlign: "center",
        }}
      >
        <div className="container">
          <h2 style={{ color: "#F5F5F0" }}>Work with Timothy</h2>
          <p
            className="subhead"
            style={{ color: "#D0D0CC", margin: "2rem auto 3rem" }}
          >
            YUZANA engages with a limited number of organizations to ensure
            principal-led focus.
          </p>
          <Link href="/engage" className="btn btn-primary">
            Request a Conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
