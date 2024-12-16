import React from "react";
import Navigation from "./Navbar";
import ContactForm from "./ContactForm";
import { Users, Building, Award, Globe } from "lucide-react";
import Logo from "./Logo";

const HomePage = () => {
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

  const stats = [
    { icon: Users, value: "1+", label: "Satisfied Clients" },
    { icon: Building, value: "1+", label: "Years Experience" },
    { icon: Award, value: "100%", label: "Commitment" },
    { icon: Globe, value: "1+", label: "Industries Served" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Bar */}
      <div className="bg-blue-950 text-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Logo variant="small" className="hover:shadow-lg transition-shadow duration-300" />
            <div className="flex flex-col">
              <span className="text-2xl font-bold">SIAS</span>
              {/* <span className="text-sm text-blue-200">Strategic International Accounting Services</span> */}
            </div>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="tel:050 2258370" className="hover:text-blue-200 transition-colors">
              050 2258370
            </a>
            <a href="mailto:info@siasaccounting.com" className="hover:text-blue-200 transition-colors">
              info@siasaccounting.com
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
      <div className="bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <Logo variant="hero" className="hover:scale-105 transform transition-all duration-300 " />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-8">Accounting Services in UAE</h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto px-4">Expert financial guidance for businesses of all sizes - from startups to established enterprises</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-block bg-white text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors shadow-lg mx-4">
              Get Started
            </a>
          </div>
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
          <h2 className="text-3xl font-bold text-blue-900">Our Services</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            At SIA Accounting Services, we provide expert financial guidance tailored to businesses of all sizes, from dynamic startups to well-established enterprises. Our
            commitment is to help you achieve financial clarity, compliance, and growth by offering comprehensive and professional accounting solutions.
          </p>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">We offer a full range of accounting services designed to meet the unique needs of your business:</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.accounting.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
              <h3 className="text-xl font-bold text-blue-900 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Why Outsource Your Accounting Services?</h2>
            <p className="text-gray-600 mt-4 max-w-3xl mx-auto">Outsourcing your accounting needs can significantly benefit your business. Here's why it's a smart decision:</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
                <h3 className="text-xl font-bold text-blue-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Partner with SIAS Accounting Services</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Experience the benefits of seamless financial management. Whether you're a growing startup or a large corporation, we're here to provide the financial expertise you
            need to thrive in today's competitive market.
          </p>
        </div>
        <ContactForm />
      </div>

      {/* Footer updated with new contact info */}
      <footer className="bg-blue-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <Logo variant="default" className="mb-4" />
            <div className="text-2xl font-bold mb-2">SIAS</div>
            <div className="text-sm text-blue-200">Strategic International Accounting Services</div>
          </div>
          <div className="text-center">
            <p className="mb-4">Your Trusted Financial Partner in UAE</p>
            <div className="flex justify-center space-x-6">
              <a href="tel:050 2258370" className="hover:text-blue-200 transition-colors">
                050 2258370
              </a>
              <a href="mailto:info@siasaccounting.com" className="hover:text-blue-200 transition-colors">
                info@siasaccounting.com
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
