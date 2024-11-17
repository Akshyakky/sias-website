import React from "react";
import Navigation from "./Navbar";
import ServiceCard from "./ServiceCard";
import TestimonialCard from "./TestimonialCard";
import StatCard from "./StatCard";
import ContactForm from "./ContactForm";
import { Calculator, FileText, TrendingUp, Users, Building, Award, Globe } from "lucide-react";

const HomePage = () => {
  const services = {
    accounting: [
      "Financial Statements Preparation",
      "Monthly Bookkeeping Services",
      "Value Added Tax (VAT) Filing",
      "Corporate Tax Compliance",
      "Tax Planning & Advisory",
      "Business Setup Support",
      "Financial Reporting",
    ],
    auditing: ["Internal Audit Services", "Compliance Audits", "Financial Due Diligence", "Risk Assessment", "Statutory Audits"],
    consulting: ["Business Advisory", "Financial Planning", "Startup Consultation", "Growth Strategy", "Regulatory Compliance"],
  };

  const stats = [
    { icon: Users, value: "1+", label: "Satisfied Clients" },
    { icon: Building, value: "3+", label: "Years Experience" },
    { icon: Award, value: "100%", label: "Commitment" },
    { icon: Globe, value: "1+", label: "Industries Served" },
  ];

  const testimonials = [
    {
      name: "Sia",
      position: "Business Owner",
      company: "Al Rashid Trading",
      content: "SIAS provided excellent guidance for our tax compliance and bookkeeping needs. Their professional approach and attention to detail is commendable.",
    },
    {
      name: "Kiran",
      position: "Managing Director",
      company: "Future Tech UAE",
      content: "As a startup, we needed reliable accounting services. SIAS has been instrumental in setting up our financial systems and ensuring compliance.",
    },
    {
      name: "Sandesh",
      position: "Finance Manager",
      company: "Gulf Enterprises",
      content: "The team at SIAS delivers precise and timely financial services. Their expertise in UAE regulations has been invaluable for our business.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <div className="bg-blue-950 text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-2">SIAS</span>
            <span className="text-sm text-blue-200">Strategic International Accounting Services</span>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="tel:+97150XXXXXXX" className="hover:text-blue-200 transition-colors">
              +971 50 XXX XXXX
            </a>
            <a href="mailto:info@sias.ae" className="hover:text-blue-200 transition-colors">
              info@sias.ae
            </a>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-blue-900 text-white shadow-lg">
        <div className="container mx-auto px-4">
          <Navigation />
        </div>
      </div>

      {/* Hero Section with gradient */}
      <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to SIAS</h1>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Modern Accounting Solutions in UAE</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Expert financial guidance for businesses of all sizes - from startups to established enterprises</p>
          <a href="#contact" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors shadow-lg">
            Get Started
          </a>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 transform hover:-translate-y-1 transition-transform duration-300">
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <div className="text-3xl font-bold text-blue-900 mb-2 text-center">{stat.value}</div>
              <div className="text-gray-600 text-center">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">SIAS Services</h2>
          <p className="text-gray-600 mt-2">Comprehensive solutions for your business success</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard title="Accounting Services" items={services.accounting} icon={Calculator} />
          <ServiceCard title="Auditing Excellence" items={services.auditing} icon={FileText} />
          <ServiceCard title="Consulting & Advisory" items={services.consulting} icon={TrendingUp} />
        </div>
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Contact Us</h2>
        <ContactForm />
      </div>

      {/* Footer updated with new contact info */}
      <footer className="bg-blue-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="text-2xl font-bold mb-2">SIAS</div>
            <div className="text-sm text-blue-200">Strategic International Accounting Services</div>
          </div>
          <div className="text-center">
            <p className="mb-4">Your Trusted Financial Partner in UAE</p>
            <div className="flex justify-center space-x-6">
              <a href="tel:+97150XXXXXXX" className="hover:text-blue-200 transition-colors">
                +971 50 XXX XXXX
              </a>
              <a href="mailto:info@sias.ae" className="hover:text-blue-200 transition-colors">
                info@sias.ae
              </a>
            </div>
            <div className="mt-4 text-blue-200">
              <p>Dubai, United Arab Emirates</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
