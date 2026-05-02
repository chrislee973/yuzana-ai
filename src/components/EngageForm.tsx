"use client";

import { useEffect, useRef, useState } from "react";

interface FormState {
  name: string;
  email: string;
  organization: string;
  role: string;
  ambiguity: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

type FormVisibility = "visible" | "hiding" | "hidden";

const FIELD_ORDER: (keyof FormState)[] = [
  "name",
  "email",
  "organization",
  "role",
  "ambiguity",
];

const FIELD_LABELS: Record<keyof FormState, string> = {
  name: "your name",
  email: "your email",
  organization: "your organization",
  role: "your role",
  ambiguity: "the ambiguity you're trying to resolve",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EngageForm() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    organization: "",
    role: "",
    ambiguity: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formVisibility, setFormVisibility] = useState<FormVisibility>(
    "visible"
  );
  const [showSuccess, setShowSuccess] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const fieldRefs = useRef<
    Record<keyof FormState, HTMLInputElement | HTMLTextAreaElement | null>
  >({
    name: null,
    email: null,
    organization: null,
    role: null,
    ambiguity: null,
  });

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
    if (errors[name as keyof FormState]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name as keyof FormState];
        return next;
      });
    }
  };

  const validate = (state: FormState): FormErrors => {
    const next: FormErrors = {};
    if (!state.name.trim()) next.name = "Please enter your name.";
    if (!state.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!EMAIL_RE.test(state.email.trim())) {
      next.email = "Please enter a valid email address.";
    }
    if (!state.organization.trim())
      next.organization = "Please enter your organization.";
    if (!state.role.trim()) next.role = "Please enter your role.";
    if (!state.ambiguity.trim())
      next.ambiguity =
        "Please describe the ambiguity you're trying to resolve.";
    return next;
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
    e.currentTarget.style.borderColor = "#B8976A";
    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(184, 151, 106, 0.12)";
  };

  const handleTextareaBlur = (
    e: React.FocusEvent<HTMLTextAreaElement>
  ) => {
    if (!e.currentTarget.value) {
      e.currentTarget.style.borderColor = "#D7D2CA";
      e.currentTarget.style.boxShadow = "none";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setSubmitError(null);

    const validationErrors = validate(formState);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      const firstInvalid = FIELD_ORDER.find((field) => validationErrors[field]);
      if (firstInvalid) {
        const el = fieldRefs.current[firstInvalid];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.focus({ preventScroll: true });
        }
      }
      return;
    }

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
      setSubmitError(
        error instanceof Error
          ? `Couldn't send your request: ${error.message}. Please try again or email us directly.`
          : "Couldn't send your request. Please try again or email us directly."
      );
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
    backgroundColor: "#565453",
    color: "#FAF9F6",
    textAlign: "center",
  };

  return (
    <>
      {notice && (
        <div
          style={{
            backgroundColor: "#F5F3EE",
            color: "#FAF9F6",
            padding: "1rem",
            textAlign: "center",
            marginBottom: "2rem",
            borderLeft: "3px solid #B8976A",
            backgroundImage:
              "linear-gradient(to right, rgba(184, 151, 106, 0.14), rgba(184, 151, 106, 0.04))",
          }}
        >
          <p style={{ margin: 0, fontSize: "0.95rem", color: "#5A5854" }}>
            {notice}
          </p>
        </div>
      )}

      <form
        className="contact-form"
        id="contactForm"
        onSubmit={handleSubmit}
        noValidate
        style={formStyle}
      >
        <p className="form-required-legend">
          <span className="required-mark" aria-hidden="true">*</span>
          Required
        </p>

        <div className="form-group">
          <label htmlFor="name">
            Name
            <span className="required-mark" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            ref={(el) => {
              fieldRefs.current.name = el;
            }}
            aria-required="true"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={errors.name ? "error" : undefined}
            value={formState.name}
            onChange={handleChange}
          />
          {errors.name && (
            <span className="field-error" id="name-error" role="alert">
              {errors.name}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">
            Email
            <span className="required-mark" aria-hidden="true">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            ref={(el) => {
              fieldRefs.current.email = el;
            }}
            aria-required="true"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={errors.email ? "error" : undefined}
            value={formState.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span className="field-error" id="email-error" role="alert">
              {errors.email}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="organization">
            Organization
            <span className="required-mark" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            ref={(el) => {
              fieldRefs.current.organization = el;
            }}
            aria-required="true"
            aria-invalid={errors.organization ? true : undefined}
            aria-describedby={
              errors.organization ? "organization-error" : undefined
            }
            className={errors.organization ? "error" : undefined}
            value={formState.organization}
            onChange={handleChange}
          />
          {errors.organization && (
            <span className="field-error" id="organization-error" role="alert">
              {errors.organization}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="role">
            Role
            <span className="required-mark" aria-hidden="true">*</span>
          </label>
          <input
            type="text"
            id="role"
            name="role"
            ref={(el) => {
              fieldRefs.current.role = el;
            }}
            aria-required="true"
            aria-invalid={errors.role ? true : undefined}
            aria-describedby={errors.role ? "role-error" : undefined}
            className={errors.role ? "error" : undefined}
            value={formState.role}
            onChange={handleChange}
          />
          {errors.role && (
            <span className="field-error" id="role-error" role="alert">
              {errors.role}
            </span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="ambiguity">
            What ambiguity are you trying to resolve?
            <span className="required-mark" aria-hidden="true">*</span>
          </label>
          <textarea
            id="ambiguity"
            name="ambiguity"
            ref={(el) => {
              fieldRefs.current.ambiguity = el;
            }}
            aria-required="true"
            aria-invalid={errors.ambiguity ? true : undefined}
            aria-describedby={errors.ambiguity ? "ambiguity-error" : undefined}
            className={`textarea-large${errors.ambiguity ? " error" : ""}`}
            value={formState.ambiguity}
            onChange={handleTextareaInput}
            onFocus={handleTextareaFocus}
            onBlur={handleTextareaBlur}
            placeholder="Tell us about the specific challenges, uncertainties, or questions you're facing..."
          />
          {errors.ambiguity && (
            <span className="field-error" id="ambiguity-error" role="alert">
              {errors.ambiguity}
            </span>
          )}
        </div>

        {submitError && (
          <p
            className="field-error"
            role="alert"
            style={{ marginBottom: "1rem" }}
          >
            {submitError}
          </p>
        )}

        <button type="submit" className="btn btn-submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Request a Conversation"}
        </button>
      </form>

      <div id="successMessage" style={successStyle}>
        <h3 style={{ color: "#FAF9F6", marginBottom: "1rem" }}>
          Thank you for reaching out.
        </h3>
        <p style={{ color: "#FAF9F6", margin: 0 }}>
          We&apos;ll review your message and respond within 48 hours.
        </p>
      </div>
    </>
  );
}
