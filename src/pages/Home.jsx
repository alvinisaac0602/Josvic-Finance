import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[90vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091870620-bf3dc53f529e?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 text-white text-center max-w-2xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Josvic Finance
          </h1>
          <p className="text-lg mb-6">
            Empowering youth through Forex trading, loans, and financial
            education.
          </p>
          <Link to="/about">
            <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-14 px-4 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          Why Choose Josvic Finance?
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          We are registered with URSB and committed to financial inclusion. Our
          services are tailored to help students, professionals, and
          entrepreneurs gain financial stability and knowledge.
        </p>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Our Core Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          {/* Forex */}
          <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Forex Trading
            </h3>
            <p className="text-gray-700 mb-4">
              Access live markets, mentorship, and trading platforms tailored
              for new and experienced traders.
            </p>
            <Link to="/forex" className="text-blue-500 hover:underline">
              Explore Forex →
            </Link>
          </div>

          {/* Loans */}
          <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Loan Services
            </h3>
            <p className="text-gray-700 mb-4">
              Quick and flexible loan options for education, business, or
              emergencies — with simple terms.
            </p>
            <Link to="/loans" className="text-blue-500 hover:underline">
              Apply for a Loan →
            </Link>
          </div>

          {/* Student Portal */}
          <div className="bg-white p-6 rounded shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Student Portal
            </h3>
            <p className="text-gray-700 mb-4">
              Join our mentorship program. Ask questions, access lessons, and
              become financially literate.
            </p>
            <Link to="/student" className="text-blue-500 hover:underline">
              Join the Portal →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-4">
          Start Your Financial Journey
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Whether you’re looking to trade, borrow, or learn, Josvic Finance is
          here to support your goals.
        </p>
        <Link to="/signup">
          <button className="bg-white text-blue-700 font-medium px-6 py-2 rounded hover:bg-gray-200 transition">
            Get Started
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
