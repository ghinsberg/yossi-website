"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

interface FormData {
  name: string;
  email: string;
  organisation: string;
  phone: string;
  eventDate: string;
  eventLocation: string;
  audienceSize: string;
  format: string;
  budget: string;
  keynote: string;
  message: string;
  referral: string;
}

interface FormErrors {
  [key: string]: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  organisation: "",
  phone: "",
  eventDate: "",
  eventLocation: "",
  audienceSize: "",
  format: "",
  budget: "",
  keynote: "Not sure yet",
  message: "",
  referral: "",
};

type Status = "idle" | "submitting" | "success" | "error";

const inputStyles =
  "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-text placeholder:text-brand-text-secondary/50 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition";
const labelStyles = "block text-sm font-medium text-brand-text-secondary mb-2";
const selectStyles =
  "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-brand-text focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%239ca3af%22%20d%3D%22M2%204l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[right_1rem_center]";

export default function BookingForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Please enter a valid email";
    if (!formData.organisation.trim())
      errs.organisation = "Organisation is required";
    if (!formData.eventDate) errs.eventDate = "Event date is required";
    if (!formData.eventLocation.trim())
      errs.eventLocation = "Event location is required";
    if (!formData.audienceSize)
      errs.audienceSize = "Please select audience size";
    if (!formData.format) errs.format = "Please select a format";
    if (!formData.budget || formData.budget === "")
      errs.budget = "Please select a budget range";
    if (!formData.message.trim())
      errs.message = "Please describe your event briefly";
    return errs;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  }

  function buildMailtoFallback() {
    const subject = encodeURIComponent(
      `Booking Enquiry from ${formData.name} — ${formData.organisation}`
    );
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Organisation: ${formData.organisation}`,
        `Phone: ${formData.phone || "N/A"}`,
        `Event Date: ${formData.eventDate}`,
        `Event Location: ${formData.eventLocation}`,
        `Audience Size: ${formData.audienceSize || "N/A"}`,
        `Format: ${formData.format}`,
        `Budget: ${formData.budget}`,
        `Keynote Interest: ${formData.keynote}`,
        `Message: ${formData.message || "N/A"}`,
        `Referral: ${formData.referral || "N/A"}`,
      ].join("\n")
    );
    return `mailto:michael@encorespeakers.com?subject=${subject}&body=${body}`;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("success");
      } else {
        // API returned an error — fall back to mailto
        window.location.href = buildMailtoFallback();
        setStatus("error");
      }
    } catch {
      // Network error — fall back to mailto
      window.location.href = buildMailtoFallback();
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-16">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
          <svg
            className="w-8 h-8 text-green-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h2 className="text-3xl font-heading font-bold text-brand-text mb-4">
          Thank you!
        </h2>
        <p className="text-brand-text-secondary text-lg mb-8">
          We&apos;ve received your enquiry and will be in touch within 24 hours.
        </p>
        <Button href="/" variant="gold" size="lg">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className={labelStyles}>
            Your name<span className="text-brand-gold ml-1">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
            className={inputStyles}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className={labelStyles}>
            Your email<span className="text-brand-gold ml-1">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="email@company.com"
            className={inputStyles}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Organisation */}
        <div>
          <label htmlFor="organisation" className={labelStyles}>
            Organisation / Company
            <span className="text-brand-gold ml-1">*</span>
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            placeholder="Your organisation"
            className={inputStyles}
          />
          {errors.organisation && (
            <p className="text-red-400 text-sm mt-1">{errors.organisation}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className={labelStyles}>
            Phone
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className={inputStyles}
          />
        </div>

        {/* Event Date */}
        <div>
          <label htmlFor="eventDate" className={labelStyles}>
            Event date (approximate)
            <span className="text-brand-gold ml-1">*</span>
          </label>
          <input
            type="date"
            id="eventDate"
            name="eventDate"
            value={formData.eventDate}
            onChange={handleChange}
            className={inputStyles}
          />
          {errors.eventDate && (
            <p className="text-red-400 text-sm mt-1">{errors.eventDate}</p>
          )}
        </div>

        {/* Event Location */}
        <div>
          <label htmlFor="eventLocation" className={labelStyles}>
            Event location (City, Country)
            <span className="text-brand-gold ml-1">*</span>
          </label>
          <input
            type="text"
            id="eventLocation"
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            placeholder="e.g. Sydney, Australia"
            className={inputStyles}
          />
          {errors.eventLocation && (
            <p className="text-red-400 text-sm mt-1">{errors.eventLocation}</p>
          )}
        </div>

        {/* Audience Size */}
        <div>
          <label htmlFor="audienceSize" className={labelStyles}>
            Expected audience size
            <span className="text-brand-gold ml-1">*</span>
          </label>
          <select
            id="audienceSize"
            name="audienceSize"
            value={formData.audienceSize}
            onChange={handleChange}
            className={selectStyles}
          >
            <option value="">Select...</option>
            <option value="Under 100">Under 100</option>
            <option value="100-500">100&ndash;500</option>
            <option value="500-1000">500&ndash;1,000</option>
            <option value="1000-5000">1,000&ndash;5,000</option>
            <option value="5000+">5,000+</option>
          </select>
          {errors.audienceSize && (
            <p className="text-red-400 text-sm mt-1">{errors.audienceSize}</p>
          )}
        </div>

        {/* Format */}
        <div>
          <label className={labelStyles}>
            Format<span className="text-brand-gold ml-1">*</span>
          </label>
          <div className="flex gap-4 mt-1">
            {["In-Person", "Virtual", "Hybrid"].map((option) => {
              const isSelected = formData.format === option;
              return (
                <label
                  key={option}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="format"
                    value={option}
                    checked={isSelected}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                      isSelected
                        ? "border-brand-gold bg-brand-gold"
                        : "border-white/20"
                    }`}
                  >
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-black" />
                    )}
                  </span>
                  <span
                    className={`text-sm transition ${
                      isSelected
                        ? "text-brand-text"
                        : "text-brand-text-secondary"
                    }`}
                  >
                    {option}
                  </span>
                </label>
              );
            })}
          </div>
          {errors.format && (
            <p className="text-red-400 text-sm mt-1">{errors.format}</p>
          )}
        </div>

        {/* Budget Range */}
        <div>
          <label htmlFor="budget" className={labelStyles}>
            Budget range<span className="text-brand-gold ml-1">*</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={selectStyles}
          >
            <option value="">Select...</option>
            <option value="Under $20K">Under $20K</option>
            <option value="$20K-$35K">$20K&ndash;$35K</option>
            <option value="$35K-$50K">$35K&ndash;$50K</option>
            <option value="$50K+">$50K+</option>
            <option value="To be discussed">To be discussed</option>
          </select>
          {errors.budget && (
            <p className="text-red-400 text-sm mt-1">{errors.budget}</p>
          )}
        </div>

        {/* Keynote Interest */}
        <div>
          <label htmlFor="keynote" className={labelStyles}>
            Which keynote interests you most?
          </label>
          <select
            id="keynote"
            name="keynote"
            value={formData.keynote}
            onChange={handleChange}
            className={selectStyles}
          >
            <option value="Not sure yet">Not sure yet</option>
            <option value="Be Brave in a New World">
              Be Brave in a New World
            </option>
            <option value="Surviving the Jungle">Surviving the Jungle</option>
            <option value="Laws of the Jungle">Laws of the Jungle</option>
          </select>
        </div>
      </div>

      {/* Message - full width */}
      <div className="mt-6">
        <label htmlFor="message" className={labelStyles}>
          Tell us briefly about your audience and what you&apos;re hoping
          Yossi&apos;s keynote will achieve
          <span className="text-brand-gold ml-1">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          placeholder="e.g. We're hosting our annual leadership summit for 500 senior executives..."
          className={inputStyles}
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      {/* Referral - full width */}
      <div className="mt-6">
        <label htmlFor="referral" className={labelStyles}>
          How did you hear about Yossi?
        </label>
        <select
          id="referral"
          name="referral"
          value={formData.referral}
          onChange={handleChange}
          className={selectStyles}
        >
          <option value="">Select...</option>
          <option value="Speaker bureau">Speaker bureau</option>
          <option value="Colleague or friend referral">Colleague or friend referral</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Google search">Google search</option>
          <option value="AI assistant (ChatGPT, Perplexity, etc.)">AI assistant (ChatGPT, Perplexity, etc.)</option>
          <option value="Saw Yossi speak at an event">Saw Yossi speak at an event</option>
          <option value="Read the book / saw the film">Read the book / saw the film</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Error message */}
      {status === "error" && (
        <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 text-sm">
            Something went wrong. Please try again or contact us directly at{" "}
            <a
              href="mailto:michael@encorespeakers.com"
              className="underline hover:text-red-300"
            >
              michael@encorespeakers.com
            </a>
          </p>
        </div>
      )}

      {/* Submit */}
      <div className="mt-8">
        <Button
          variant="gold"
          size="lg"
          type="submit"
          className="w-full md:w-auto"
        >
          {status === "submitting" ? "Sending..." : "Send Enquiry"}
        </Button>
      </div>
    </form>
  );
}
