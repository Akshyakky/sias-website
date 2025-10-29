// ContactForm.tsx - Enhanced with better styling and animations
"use client";
import React, { useState } from "react";
import { AlertCircle, Send, CheckCircle } from "lucide-react";

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
      const response = await fetch("https://siasaccounting.com/api/contact.php", {
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
      console.error("Form submission error:", error);
      setFormStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to send message. Please try again later.");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white text-center">
          <h2 className="text-2xl font-bold">Request A Call Back Today</h2>
          <p className="text-blue-100 mt-2 text-sm">Get expert accounting consultation</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <input
                required
                name="firstName"
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
              />
            </div>
            <div className="relative">
              <input
                required
                name="lastName"
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
              />
            </div>
          </div>

          <div className="flex gap-4">
            <select className="w-24 px-4 py-3 border-2 border-gray-200 rounded-lg bg-gray-50 cursor-not-allowed" disabled>
              <option value="+971">+971</option>
            </select>
            <input
              required
              name="phone"
              type="tel"
              placeholder="Phone Number"
              pattern="[0-9]{9}"
              title="Please enter a valid 9-digit phone number"
              className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
            />
          </div>

          <input
            required
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
          />

          <textarea
            required
            name="message"
            placeholder="What services are you looking for?"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-500 transition-all duration-300 hover:border-gray-300 h-24 resize-none"
          />

          <button
            type="submit"
            disabled={formStatus === "submitting"}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 font-semibold disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] hover:shadow-lg flex items-center justify-center space-x-2"
          >
            {formStatus === "submitting" ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <span>Let's Talk</span>
                <Send size={18} />
              </>
            )}
          </button>

          {formStatus === "success" && (
            <div className="flex items-center justify-center gap-2 text-green-600 bg-green-50 p-3 rounded-lg animate-fadeIn">
              <CheckCircle className="w-5 h-5" />
              <span>Thank you! We'll contact you soon.</span>
            </div>
          )}

          {formStatus === "error" && (
            <div className="flex items-center justify-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg animate-fadeIn">
              <AlertCircle className="w-5 h-5" />
              <span className="text-sm">{errorMessage}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
