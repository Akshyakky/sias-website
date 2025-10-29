// HomePage.tsx - Enhanced with modern design improvements
"use client";
import React, { useState, useEffect } from "react";
import Navigation from "./Navbar";
import ContactForm from "./ContactForm";
import { Mail, Phone, ChevronRight, CheckCircle, ArrowRight } from "lucide-react";
import Logo from "./Logo";

export interface ContactInfo {
  phone: string;
  email: string;
}

const HomePage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const contactInfo: ContactInfo = {
    phone: "+97150 2258370",
    email: "info@siasaccounting.com",
  };

  const services = {
    accounting: [
      {
        title: "Bookkeeping and Accounting Services",
        description: "Maintain accurate and up-to-date financial records to ensure smooth business operations and informed decision-making.",
        icon: "📊",
      },
      {
        title: "Value Added Tax (VAT) Services",
        description: "Expert assistance in VAT registration, compliance, and filing, ensuring your business adheres to UAE VAT regulations.",
        icon: "📋",
      },
      {
        title: "Budgeting and Forecasting",
        description: "Strategic financial planning to manage resources effectively and prepare for future growth and market fluctuations.",
        icon: "📈",
      },
      {
        title: "Preparation of Financial Statements",
        description: "Comprehensive and compliant financial statements that provide a clear picture of your company's performance.",
        icon: "📑",
      },
      {
        title: "Accounting System Design & Implementation",
        description: "Implement customized accounting systems to streamline financial processes and improve operational efficiency.",
        icon: "⚙️",
      },
      {
        title: "Corporate Tax Services",
        description: "Navigate the complexities of corporate tax with expert advice and ensure compliance with UAE tax laws.",
        icon: "🏢",
      },
    ],
    benefits: [
      {
        title: "Cost Savings",
        description: "Eliminate the overhead costs of hiring and training an in-house team while gaining access to premium accounting expertise.",
        color: "from-green-500 to-emerald-600",
      },
      {
        title: "Access to Expertise",
        description: "Work with seasoned professionals who bring in-depth knowledge of UAE's financial and regulatory landscape.",
        color: "from-blue-500 to-indigo-600",
      },
      {
        title: "Timely Financial Reporting",
        description: "Receive accurate and timely financial reports to stay informed and make strategic business decisions.",
        color: "from-purple-500 to-pink-600",
      },
      {
        title: "Accuracy",
        description: "Reduce the risk of errors with meticulous and professional accounting services that ensure compliance and precision.",
        color: "from-orange-500 to-red-600",
      },
      {
        title: "Customized Services",
        description: "Enjoy tailored accounting solutions designed to meet the specific needs of your business, regardless of size or industry.",
        color: "from-teal-500 to-cyan-600",
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Enhanced Sticky Header */}
      <div className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}>
        {/* Top Bar with Animation */}
        <div className={`bg-gradient-to-r from-blue-900 to-indigo-800 text-white transition-all duration-300 ${scrolled ? "h-0 overflow-hidden" : "py-2"}`}>
          <div className="container mx-auto px-4">
            <div className="hidden md:flex justify-between items-center">
              <div className="flex items-center hover:text-blue-200 transition-colors">
                <Mail size={16} className="mr-2" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-center">
                  <Phone size={16} className="mr-2" />
                  <a href={`tel:${contactInfo.phone}`} className="text-sm">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <Mail size={16} className="mr-2" />
                  <a href={`mailto:${contactInfo.email}`} className="text-sm">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header with Glass Effect */}
        <div className={`bg-white/95 backdrop-blur-md transition-all duration-300 ${scrolled ? "py-3" : "py-4"}`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Logo variant="default" className="h-12" />
                <span
                  className={`text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent tracking-tight transition-all duration-300 ${
                    scrolled ? "md:text-3xl" : ""
                  }`}
                >
                  SIAS Accounting
                </span>
              </div>

              <div className="flex items-center space-x-8">
                <Navigation contactInfo={contactInfo} />
                <div className="hidden md:flex items-center whitespace-nowrap">
                  <span className="text-blue-600 mr-2 font-medium">Connect:</span>
                  <div className="flex items-center group">
                    <Phone size={16} className="text-blue-600 mr-1 group-hover:scale-110 transition-transform" />
                    <a href={`tel:${contactInfo.phone}`} className="text-blue-600 hover:text-blue-700 transition-colors font-medium">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Hero Section with Modern Gradient and Animations */}
      <div className="relative bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="py-16 md:py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero content */}
              <div className="max-w-2xl">
                <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                  {/* <span className="text-sm font-medium">Trusted by 500+ UAE Businesses</span> */}
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeInUp">
                  Accounting and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-purple-200">Bookkeeping</span> Services in UAE
                </h1>

                <p className="text-xl md:text-2xl font-semibold text-blue-100 mb-4 animate-fadeInUp animation-delay-200">Trusted Financial Solutions for UAE Business</p>

                <p className="text-lg md:text-xl text-blue-100 mb-8 animate-fadeInUp animation-delay-400">
                  Expert financial guidance for businesses of all sizes - from startups to established enterprises
                </p>

                <div className="flex flex-wrap gap-4 animate-fadeInUp animation-delay-600">
                  <a
                    href="#contact"
                    className="group inline-flex items-center bg-white text-blue-800 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300"
                  >
                    Our Services
                  </a>
                </div>
              </div>

              {/* Enhanced Hero Image */}
              <div className="relative animate-fadeInRight">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/Sias_4C.png" alt="Professional accounting team" className="w-full h-80 md:h-96 object-cover" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-400/30 rounded-full blur-2xl animate-pulse animation-delay-2000"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Services Section */}
      <div id="services" className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/images/single_service_01.jpg" alt="" className="w-full h-full object-cover" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Financial Solutions</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">At SIAS Accounting Services, we provide expert financial guidance tailored to businesses of all sizes</p>
          </div>

          {/* Featured Image and Introduction - Enhanced */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-3xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              {/* Featured Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/images/services-featured.png"
                    alt="Professional accounting services"
                    className="w-full h-80 lg:h-96 object-cover hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-3xl font-bold text-gray-800">
                  Your Success is <span className="text-blue-600">Our Priority</span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We offer a full range of accounting services designed to meet the unique needs of your business. Our experienced professionals ensure your financial operations
                  run smoothly.
                </p>

                {/* Key highlights with icons */}
                <div className="space-y-4">
                  {["UAE Tax Regulation Compliance", "Experienced Financial Professionals", "Tailored Solutions for All Business Sizes"].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-700 group">
                      <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 group-hover:bg-blue-600 transition-colors">
                        <CheckCircle className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                      </div>
                      <span className="group-hover:text-blue-600 transition-colors">{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Discuss Your Needs
                  <ChevronRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </div>

          {/* Services Grid - Enhanced Cards */}
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.accounting.map((service, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActiveService(index)}
                  onMouseLeave={() => setActiveService(null)}
                  className={`group bg-white rounded-2xl shadow-lg p-6 transition-all duration-300 cursor-pointer ${
                    activeService === index ? "shadow-2xl transform -translate-y-2" : "hover:shadow-xl hover:-translate-y-1"
                  }`}
                >
                  {/* Icon */}
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{service.icon}</div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>

                  {/* Hover indicator */}
                  <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Benefits Section */}
      <div className="bg-gradient-to-br from-white to-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">
              Why <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Outsource</span> Our Accounting Services?
            </h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-lg">Outsourcing your accounting needs can significantly benefit your business</p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {services.benefits.map((benefit, index) => (
              <div
                key={index}
                className={`group flex flex-col lg:flex-row items-center gap-8 bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section with Gradient Overlay */}
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={getBenefitImage(benefit.title)}
                      alt={`${benefit.title} illustration`}
                      className="w-full h-64 lg:h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>

                  <div className="flex items-center text-blue-600 font-medium group-hover:text-indigo-600 transition-colors">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Professional Excellence Guaranteed
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Contact Section */}
      <div id="contact" className="relative container mx-auto px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/images/single_service_02.jpg" alt="" className="w-full h-full object-cover object-center" />
        </div>
        <div className="relative z-10">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="text-4xl font-bold text-gray-800 mt-2 mb-4">
              Partner with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">SIAS Accounting</span>
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Experience seamless financial management. Whether you're a growing startup or a large corporation, we're here to provide the expertise you need.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Information */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Logo variant="default" className="mr-4" />
                <div>
                  <h3 className="text-2xl font-bold">SIAS Accounting</h3>
                  <p className="text-blue-200 text-sm">Professional Financial Services</p>
                </div>
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed max-w-md">
                Your trusted financial partner in the UAE, providing comprehensive accounting, tax, and business advisory services.
              </p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/siasaccounting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/siasaccounting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "Our Services", "Contact Us"].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(" ", "-")}`} className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center group">
                      <span className="w-1 h-1 bg-blue-400 rounded-full mr-3 group-hover:w-2 transition-all duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <Phone className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-blue-200 text-sm">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-blue-200 transition-colors font-medium">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3 group">
                  <Mail className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-blue-200 text-sm">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-blue-200 transition-colors font-medium break-all">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-800/30">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-blue-200 text-sm">&copy; {new Date().getFullYear()} SIAS Accounting Services. All rights reserved.</p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Enhanced WhatsApp Button */}
      <a
        href="https://wa.me/971502258370"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 hover:scale-110 transition-all duration-300 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.917 1.044 5.591 2.778 7.678L1.5 24l4.322-1.278C7.939 23.556 9.901 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.045 19.286c-1.147 0-2.244-.229-3.24-.645l-3.36.995 1.005-3.36c-.416-.996-.645-2.093-.645-3.24 0-4.587 3.727-8.314 8.314-8.314 4.587 0 8.314 3.727 8.314 8.314 0 4.587-3.727 8.314-8.314 8.314z" />
        </svg>
        <span className="absolute -top-2 -left-2 w-3 h-3 bg-green-400 rounded-full animate-ping"></span>
      </a>

      {/* Add Animation Styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
          animation-fill-mode: both;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
          animation-fill-mode: both;
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out 0.2s both;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

const getBenefitImage = (title: string): string => {
  const imageMap: { [key: string]: string } = {
    "Cost Savings": "/images/benefits/cost-savings.png",
    "Access to Expertise": "/images/benefits/expertise.jpg",
    "Timely Financial Reporting": "/images/benefits/reporting.jpg",
    Accuracy: "/images/benefits/accuracy.jpg",
    "Customized Services": "/images/benefits/customized.png",
  };
  return imageMap[title] || "/images/benefits/default-business.jpg";
};

export default HomePage;
