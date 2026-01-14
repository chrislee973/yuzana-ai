"use client";

import { useEffect, useState } from "react";

interface FormState {
  name: string;
  email: string;
  organization: string;
  role: string;
  ambiguity: string;
}

type FormVisibility = "visible" | "hiding" | "hidden";

export default function EngageForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    organization: "",
    role: "",
    ambiguity: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formVisibility, setFormVisibility] = useState<FormVisibility>(
    "visible"
  );
  const [showSuccess, setShowSuccess] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);

  useEffect(() => {
    try {
      const previousSubmission = localStorage.getItem("yuzana_submission");
      if (!previousSubmission) return;

      const submissionData = JSON.parse(previousSubmission);
      const submissionDate = new Date(submissionData.timestamp);
      const daysSinceSubmission =
        (Date.now() - submissionDate.getTime()) / (1000 * 60 * 60 * 24);

      if (daysSinceSubmission < 7) {
        setNotice(
          "You recently submitted a request. We typically respond within 48 hours."
        );
      }
    } catch (error) {
      console.warn("Could not check previous submissions:", error);
    }
  }, []);

  useEffect(() => {
    if (!showSuccess) return;

    const timer = setTimeout(() => {
      setSuccessVisible(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [showSuccess]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInvalid = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    e.currentTarget.classList.add("error");
  };

  const handleInput = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.currentTarget.classList.contains("error")) {
      e.currentTarget.classList.remove("error");
    }
  };

  const handleTextareaInput = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    handleChange(e);

    e.currentTarget.style.height = "auto";
    e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
  };

  const handleTextareaFocus = (
    e: React.FocusEvent<HTMLTextAreaElement>
  ) => {
    e.currentTarget.style.borderColor = "#C8553D";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(200, 85, 61, 0.1)";
  };

  const handleTextareaBlur = (
    e: React.FocusEvent<HTMLTextAreaElement>
  ) => {
    if (!e.currentTarget.value) {
      e.currentTarget.style.borderColor = "#D0D0CC";
      e.currentTarget.style.boxShadow = "none";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/engage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send request");
      }

      await new Promise((resolve) => setTimeout(resolve, 1500));

      setFormVisibility("hiding");

      setTimeout(() => {
        setFormVisibility("hidden");
        setShowSuccess(true);

        try {
          localStorage.setItem(
            "yuzana_submission",
            JSON.stringify({
              submitted: true,
              timestamp: new Date().toISOString(),
            })
          );
        } catch (error) {
          console.warn("Could not save to localStorage:", error);
        }
      }, 500);
    } catch (error) {
      console.error("Submission error:", error);
      setIsSubmitting(false);
    }
  };

  const formStyle: React.CSSProperties = {
    opacity: formVisibility === "hiding" ? "0" : "1",
    transform: formVisibility === "hiding" ? "translateY(-20px)" : "translateY(0)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
    display: formVisibility === "hidden" ? "none" : "block",
  };

  const successStyle: React.CSSProperties = {
    display: showSuccess ? "block" : "none",
    opacity: successVisible ? "1" : "0",
    transform: successVisible ? "translateY(0)" : "translateY(20px)",
    transition: "opacity 0.5s ease, transform 0.5s ease",
    marginTop: "3rem",
    padding: "2rem",
    backgroundColor: "#C8553D",
    color: "#F5F5F0",
    textAlign: "center",
  };

  return (
    <>
      {notice && (
        <div
          style={{
            backgroundColor: "#C8553D",
            color: "#F5F5F0",
            padding: "1rem",
            textAlign: "center",
            marginBottom: "2rem",
            borderRadius: "4px",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.95rem" }}>{notice}</p>
        </div>
      )}

      <form
        className="contact-form"
        id="contactForm"
        onSubmit={handleSubmit}
        style={formStyle}
      >
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formState.name}
            onChange={handleChange}
            onInvalid={handleInvalid}
            onInput={handleInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formState.email}
            onChange={handleChange}
            onInvalid={handleInvalid}
            onInput={handleInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="organization">Organization</label>
          <input
            type="text"
            id="organization"
            name="organization"
            required
            value={formState.organization}
            onChange={handleChange}
            onInvalid={handleInvalid}
            onInput={handleInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="role">Role</label>
          <input
            type="text"
            id="role"
            name="role"
            required
            value={formState.role}
            onChange={handleChange}
            onInvalid={handleInvalid}
            onInput={handleInput}
          />
        </div>

        <div className="form-group">
          <label htmlFor="ambiguity">
            What ambiguity are you trying to resolve?
          </label>
          <textarea
            id="ambiguity"
            name="ambiguity"
            required
            value={formState.ambiguity}
            onChange={handleTextareaInput}
            onFocus={handleTextareaFocus}
            onBlur={handleTextareaBlur}
            onInvalid={handleInvalid}
            onInput={handleInput}
            placeholder="Tell us about the specific challenges, uncertainties, or questions you're facing..."
            className="textarea-large"
          />
        </div>

        <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Request a Conversation"}
        </button>
      </form>

      <div id="successMessage" style={successStyle}>
        <h3 style={{ color: "#F5F5F0", marginBottom: "1rem" }}>
          Thank you for reaching out.
        </h3>
        <p style={{ color: "#F5F5F0", margin: 0 }}>
          We&apos;ll review your message and respond within 48 hours.
        </p>
      </div>
    </>
  );
}
