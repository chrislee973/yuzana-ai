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
      <section className="page-header">
        <div className="container">
          <span className="eyebrow">Engage</span>
          <h1>Navigate with Confidence.</h1>
          <p className="page-lead">
            YUZANA works with a limited number of organizations to ensure
            principal-led focus. There is no sales pitch. Just a direct
            conversation.
          </p>
        </div>
      </section>

      <section className="engage-layout">
        <div className="container">
          <div className="engage-grid">
            <aside className="engage-sidebar">
              <p className="section-label">When We Typically Engage</p>
              <ol className="engage-sidebar-list">
                <li>
                  <span className="engage-sidebar-num">01</span>
                  <p>Security is a board-level concern.</p>
                </li>
                <li>
                  <span className="engage-sidebar-num">02</span>
                  <p>Mission continuity matters more than compliance theater.</p>
                </li>
                <li>
                  <span className="engage-sidebar-num">03</span>
                  <p>
                    Leadership is ready to confront the ground truth of their
                    environment.
                  </p>
                </li>
              </ol>
            </aside>

            <div>
              <EngageForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
