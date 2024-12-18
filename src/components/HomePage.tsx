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
                <span className="text-2xl font-bold text-gray-800">SIAS Accounting</span>
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
      <div className="relative bg-gradient-to-br from-blue-800 to-blue-600 text-white">
        {/* Modern geometric background pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Content container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl py-12 md:py-20">
            {/* Hero content */}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Accounting and Bookkeeping Services in UAE</h1>
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

            {/* Subtle decorative elements */}
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-blue-400/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-700">Our Services</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            At SIA Accounting Services, we provide expert financial guidance tailored to businesses of all sizes, from dynamic startups to well-established enterprises. Our
            commitment is to help you achieve financial clarity, compliance, and growth by offering comprehensive and professional accounting solutions.
          </p>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">We offer a full range of accounting services designed to meet the unique needs of your business:</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.accounting.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-blue-700 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-700">Why Outsource Our Accounting Services?</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">Outsourcing your accounting needs can significantly benefit your business. Here's why it's a smart decision:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-blue-700 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
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
      {/* Footer - Adjusted Blue */}
      <footer className="bg-blue-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Logo variant="default" className="mb-4" />
            <div className="text-2xl font-bold mb-2">SIAS</div>
          </div>
          <div className="text-center">
            <p className="mb-4">Your Trusted Financial Partner in UAE</p>
            <div className="flex justify-center space-x-6">
              <a href="tel:+97150 2258370" className="hover:text-blue-100 transition-colors flex items-center">
                <Phone size={16} className="mr-2" />
                +97150 2258370
              </a>
              <a href="mailto:info@siasaccounting.com" className="hover:text-blue-100 transition-colors flex items-center">
                <Mail size={16} className="mr-2" />
                info@siasaccounting.com
              </a>
            </div>
            <div className="mt-4 text-blue-100">
              <p>Dubai, United Arab Emirates</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
