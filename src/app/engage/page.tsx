import { Metadata } from "next";
import EngageForm from "@/components/EngageForm";

export const metadata: Metadata = {
  title: "Engage - YUZANA.AI",
  description:
    "Navigate with Confidence. Request a conversation with YUZANA.AI.",
};

export default function Engage() {
  return (
    <main>
      <section className="engage-section">
        <div className="container-narrow">
          <h1>Navigate with Confidence.</h1>

          <div className="intro-copy">
            <p>
              YUZANA works with a limited number of organizations to ensure
              principal-led focus. We typically engage when:
            </p>

            <ol>
              <li>Security is a board-level concern.</li>
              <li>Mission continuity matters more than compliance theater.</li>
              <li>
                Leadership is ready to confront the ground truth of their
                environment.
              </li>
            </ol>

            <p>There is no sales pitch. Just a conversation.</p>
          </div>

          <EngageForm />
        </div>
      </section>
    </main>
  );
}
