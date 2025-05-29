import React from "react";
import Navigation from "./Navbar";
import ContactForm from "./ContactForm";
import { Mail, Phone } from "lucide-react";
import Logo from "./Logo";

export interface ContactInfo {
  phone: string;
  email: string;
}
const HomePage = () => {
  const contactInfo: ContactInfo = {
    phone: "+97150 2258370",
    email: "info@siasaccounting.com",
  };
  const services = {
    accounting: [
      {
        title: "Bookkeeping and Accounting Services",
        description: "Maintain accurate and up-to-date financial records to ensure smooth business operations and informed decision-making.",
      },
      {
        title: "Value Added Tax (VAT) Services",
        description: "Expert assistance in VAT registration, compliance, and filing, ensuring your business adheres to UAE VAT regulations.",
      },
      {
        title: "Budgeting and Forecasting",
        description: "Strategic financial planning to manage resources effectively and prepare for future growth and market fluctuations.",
      },
      {
        title: "Preparation of Financial Statements",
        description: "Comprehensive and compliant financial statements that provide a clear picture of your company's performance.",
      },
      {
        title: "Accounting System Design & Implementation",
        description: "Implement customized accounting systems to streamline financial processes and improve operational efficiency.",
      },
      {
        title: "Corporate Tax Services",
        description: "Navigate the complexities of corporate tax with expert advice and ensure compliance with UAE tax laws.",
      },
    ],
    benefits: [
      {
        title: "Cost Savings",
        description: "Eliminate the overhead costs of hiring and training an in-house team while gaining access to premium accounting expertise.",
      },
      {
        title: "Access to Expertise",
        description: "Work with seasoned professionals who bring in-depth knowledge of UAE's financial and regulatory landscape.",
      },
      {
        title: "Timely Financial Reporting",
        description: "Receive accurate and timely financial reports to stay informed and make strategic business decisions.",
      },
      {
        title: "Accuracy",
        description: "Reduce the risk of errors with meticulous and professional accounting services that ensure compliance and precision.",
      },
      {
        title: "Customized Services",
        description: "Enjoy tailored accounting solutions designed to meet the specific needs of your business, regardless of size or industry.",
      },
    ],
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Sticky Header Wrapper */}
      <div className="sticky top-0 z-50">
        {/* Top Black Bar */}
        <div className="bg-blue-800 text-white py-2">
          <div className="container mx-auto px-4">
            {/* Desktop View */}
            <div className="hidden md:flex justify-between items-center">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-blue-200">
                  {contactInfo.email}
                </a>
              </div>
            </div>

            {/* Mobile View */}
            <div className="md:hidden">
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-center">
                  <Phone size={16} className="mr-2" />
                  <a href={`tel:${contactInfo.phone}`} className="text-sm hover:text-blue-200">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center justify-center">
                  <Mail size={16} className="mr-2" />
                  <a href={`mailto:${contactInfo.email}`} className="text-sm hover:text-blue-200">
                    {contactInfo.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header with Navigation */}
        <div className="bg-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Logo variant="default" className="h-12" />
                <span className="text-3xl md:text-4xl font-bold text-blue-700 tracking-tight">SIAS Accounting</span>
              </div>

              <div className="flex items-center space-x-8">
                <Navigation contactInfo={contactInfo} />
                {/* Desktop Contact Info with Icon */}
                <div className="hidden md:flex items-center whitespace-nowrap">
                  <span className="text-blue-600 mr-2">Connect with us:</span>
                  <div className="flex items-center">
                    <Phone size={16} className="text-blue-600 mr-1" />
                    <a href={`tel:${contactInfo.phone}`} className="text-blue-600">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <div className="relative bg-gradient-to-b from-blue-900 via-blue-700 to-blue-500 text-white">
        {/* Modern geometric background pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Content container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="py-12 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Hero content - Left side */}
              <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Accounting and Bookkeeping Services in UAE</h1>

                {/* New Tagline */}
                <div className="mb-4">
                  <p className="text-xl md:text-2xl font-semibold text-blue-100 mb-3">Trusted Financial Solutions for UAE Business</p>
                </div>

                {/* Existing Subtitle */}
                <p className="text-lg md:text-xl text-blue-100 mb-6">Expert financial guidance for businesses of all sizes - from startups to established enterprises</p>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center bg-white text-blue-800 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Get Started
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Hero Image - Right side */}
              <div className="relative">
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/images/Sias_4C.png"
                    alt="Professional accounting team working with financial documents and technology"
                    className="w-full h-80 md:h-96 object-cover"
                    loading="eager"
                  />
                  {/* Image overlay for better integration */}
                  <div className="absolute inset-0 bg-blue-900/10"></div>
                </div>

                {/* Floating accent elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-300/20 rounded-full blur-2xl"></div>
              </div>
            </div>

            {/* Subtle decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="relative py-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img src="/images/services-background.jpg" alt="Modern office environment" className="w-full h-full object-cover" />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-white/85"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700">Our Services</h2>
            <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
              At SIA Accounting Services, we provide expert financial guidance tailored to businesses of all sizes, from dynamic startups to well-established enterprises. Our
              commitment is to help you achieve financial clarity, compliance, and growth by offering comprehensive and professional accounting solutions.
            </p>
          </div>

          {/* Featured Image and Introduction */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-col lg:flex-row items-center gap-12 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8">
              {/* Featured Image */}
              <div className="w-full lg:w-1/2">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="/images/services-featured.jpg"
                    alt="Professional accounting team providing comprehensive financial services"
                    className="w-full h-80 lg:h-96 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>

                  {/* Floating accent badge */}
                  {/* <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">Professional Excellence</div> */}
                </div>
              </div>

              {/* Content Section */}
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold text-blue-700">Comprehensive Financial Solutions for Your Business Success</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We offer a full range of accounting services designed to meet the unique needs of your business. Our experienced professionals ensure your financial operations
                  run smoothly while you focus on growing your enterprise.
                </p>

                {/* Key highlights */}
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span>UAE Tax Regulation Compliance</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Experienced Financial Professionals</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    <span>Tailored Solutions for All Business Sizes</span>
                  </div>
                </div>

                {/* Call to action */}
                <div className="pt-4">
                  <a
                    href="#contact"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Discuss Your Needs
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h8m0 0l-4-4m4 4l-4 4" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <p className="text-gray-700 text-lg max-w-3xl mx-auto">We offer a full range of accounting services designed to meet the unique needs of your business:</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.accounting.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-6 hover:shadow-xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-blue-700 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Why Outsource Our Accounting Services? Section - Compact Design */}
      <div className="bg-blue-50 py-12">
        {" "}
        {/* Reduced py-16 to py-12 */}
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            {" "}
            {/* Reduced mb-12 to mb-8 */}
            <h2 className="text-3xl font-bold text-blue-700">Why Outsource Our Accounting Services?</h2>
            <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
              Outsourcing your accounting needs can significantly benefit your business. Here's why it's a smart decision:
            </p>{" "}
            {/* Reduced mt-4 to mt-3 */}
          </div>

          <div className="max-w-6xl mx-auto space-y-6">
            {" "}
            {/* Reduced space-y-8 to space-y-6 */}
            {services.benefits.map((benefit, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-6 bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all ${
                  // Reduced gap-8 to gap-6 and p-8 to p-6
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Section */}
                <div className="w-full lg:w-1/2">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={getBenefitImage(benefit.title)}
                      alt={`${benefit.title} illustration`}
                      className="w-full h-56 lg:h-64 object-cover hover:scale-105 transition-transform duration-300" /* Reduced h-64 lg:h-80 to h-56 lg:h-64 */
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-blue-600/10"></div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-3">
                  {" "}
                  {/* Reduced space-y-4 to space-y-3 */}
                  <h3 className="text-2xl font-bold text-blue-700">{benefit.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{benefit.description}</p> {/* Reduced text-lg to text-base for subtle compactness */}
                  {/* Optional: Add a subtle accent or call-to-action */}
                  <div className="flex items-center text-blue-600 font-medium">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    Professional Excellence Guaranteed
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700">Partner with SIAS Accounting Services</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Experience the benefits of seamless financial management. Whether you're a growing startup or a large corporation, we're here to provide the financial expertise you
            need to thrive in today's competitive market.
          </p>
        </div>
        <ContactForm />
      </div>

      {/* <a
        href="https://wa.me/+97150XXXXXXX"
        className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.917 1.044 5.591 2.778 7.678L1.5 24l4.322-1.278C7.939 23.556 9.901 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm.045 19.286c-1.147 0-2.244-.229-3.24-.645l-3.36.995 1.005-3.36c-.416-.996-.645-2.093-.645-3.24 0-4.587 3.727-8.314 8.314-8.314 4.587 0 8.314 3.727 8.314 8.314 0 4.587-3.727 8.314-8.314 8.314z" />
        </svg>
      </a> */}

      {/* Footer - Adjusted Blue */}
      <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-12">
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
                Your trusted financial partner in the UAE, providing comprehensive accounting, tax, and business advisory services to help your business thrive in today's
                competitive marketplace.
              </p>

              {/* Social Media Links */}
              <div className="space-y-3">
                <h4 className="font-semibold text-white">Follow Us</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/siasaccounting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full transition-colors duration-300 group"
                    aria-label="Follow us on Facebook"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>

                  <a
                    href="https://www.instagram.com/siasaccounting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 rounded-full transition-all duration-300 group"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>

                  <a
                    href="mailto:info@siasaccounting.com"
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full transition-colors duration-300 group"
                    aria-label="Send us an email"
                  >
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-blue-200 hover:text-white transition-colors duration-300 flex items-center">
                    <span className="w-1 h-1 bg-blue-400 rounded-full mr-3"></span>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="font-semibold text-white mb-4">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-blue-200 text-sm">Phone</p>
                    <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-blue-200 transition-colors duration-300 font-medium">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-blue-200 text-sm">Email</p>
                    <a href={`mailto:${contactInfo.email}`} className="text-white hover:text-blue-200 transition-colors duration-300 font-medium break-all">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-300 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-blue-200 text-sm">Location</p>
                    <p className="text-white">Dubai, United Arab Emirates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-blue-600/30">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-blue-200 text-sm text-center md:text-left">
                <p>&copy; {new Date().getFullYear()} SIAS Accounting Services. All rights reserved.</p>
              </div>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </a>
                <a href="#" className="text-blue-200 hover:text-white transition-colors duration-300">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
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

  // Fallback to a default business image if specific image not found
  return imageMap[title] || "/images/benefits/default-business.jpg";
};

export default HomePage;
