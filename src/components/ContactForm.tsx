"use client";
import React, { useState } from "react";
import { AlertCircle } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: FormData = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      phone: `+971${formData.get("phone") as string}`,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const response = await fetch('https://siasaccounting.com/api/contact.php', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to send message");
      }

      setFormStatus("success");
      form.reset();
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again later.");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-6">Request A Call Back Today</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              required
              name="firstName"
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <input
              required
              name="lastName"
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-4">
          <select className="w-24 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" disabled>
            <option value="+971">+971</option>
          </select>
          <input
            required
            name="phone"
            type="tel"
            placeholder="Phone Number"
            pattern="[0-9]{9}"
            title="Please enter a valid 9-digit phone number"
            className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <input required name="email" type="email" placeholder="Email" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <textarea
          required
          name="message"
          placeholder="What services are you looking for?"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
        />
        <button
          type="submit"
          disabled={formStatus === "submitting"}
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors font-medium disabled:bg-blue-400"
        >
          {formStatus === "submitting" ? "Sending..." : "Let's Talk"}
        </button>

        {formStatus === "success" && <div className="text-green-600 text-center">Thank you! We've received your message and will contact you soon.</div>}

        {formStatus === "error" && (
          <div className="flex items-center justify-center gap-2 text-red-600">
            <AlertCircle className="w-4 h-4" />
            <span>{errorMessage}</span>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
