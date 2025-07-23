import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section */}
      <section
        className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581091870620-bf3dc53f529e?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded text-center text-white max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Josvic Finance
          </h1>
          <p className="text-lg mb-6">
            Empowering youth through Forex trading, loans, and digital financial
            education.
          </p>
          <Link to="/about">
            <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-12">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3 text-center">
          {/* Forex */}
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Forex Trading
            </h3>
            <p className="text-gray-700 mb-4">
              Get trained and access real-time forex markets. Trade with
              confidence and grow your skills.
            </p>
            <Link to="/forex" className="text-blue-500 hover:underline">
              Explore Forex →
            </Link>
          </div>

          {/* Loans */}
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Loan Services
            </h3>
            <p className="text-gray-700 mb-4">
              Access flexible and affordable loans for business, education, or
              emergencies.
            </p>
            <Link to="/loans" className="text-blue-500 hover:underline">
              Apply for a Loan →
            </Link>
          </div>

          {/* Student Portal */}
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              Student Portal
            </h3>
            <p className="text-gray-700 mb-4">
              Learn, ask questions, and connect with mentors to build financial
              literacy.
            </p>
            <Link
              to="/student-portal"
              className="text-blue-500 hover:underline"
            >
              Visit Portal →
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-700 text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Josvic Finance is dedicated to transforming financial futures. Whether
          you're a student, trader, or entrepreneur, we're here to support your
          journey.
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
