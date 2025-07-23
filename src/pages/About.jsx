import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800 py-12 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-700">
          About Us
        </h1>

        <p className="text-lg mb-6 text-center">
          <strong>Josvic Finance Development Limited</strong> is a registered
          and certified Ugandan financial technology company under the{" "}
          <strong>Uganda Registration Services Bureau (URSB)</strong>. We are
          committed to empowering communities, especially youth, through
          financial literacy, technology, and growth opportunities.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              Our Services
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <strong>Forex Trading:</strong> We train and support clients to
                trade in global forex markets with modern tools.
              </li>
              <li>
                <strong>Loan Services:</strong> Accessible micro-loans for
                business startups and personal use with flexible repayment
                options.
              </li>
              <li>
                <strong>Student Portal:</strong> A dedicated space for students
                to ask questions, learn trading, and receive mentorship.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              Our Impact
            </h2>
            <p className="text-gray-700">
              Josvic Finance is dedicated to creating financial independence for
              young people. Through our portals, training programs, and funding
              models, we've impacted hundreds of youth across the region—helping
              them build digital skills, business ideas, and financial
              confidence.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4 text-center">
            Meet Our Team
          </h2>
          <p className="text-center text-gray-700 mb-6">
            We are a passionate and experienced team of financial analysts,
            software developers, education specialists, and youth mentors.
          </p>
          {/* Placeholder team section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="bg-gray-100 p-4 rounded shadow text-center">
              <h3 className="text-lg font-bold text-blue-700">John V.</h3>
              <p className="text-sm">Founder & CEO</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow text-center">
              <h3 className="text-lg font-bold text-blue-700">Sarah A.</h3>
              <p className="text-sm">Head of Student Programs</p>
            </div>
            <div className="bg-gray-100 p-4 rounded shadow text-center">
              <h3 className="text-lg font-bold text-blue-700">David K.</h3>
              <p className="text-sm">Forex Analyst</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Join Us</h2>
          <p className="text-gray-700">
            Whether you're a student, entrepreneur, or forex enthusiast — Josvic
            Finance is here to support your growth. Together, we are building a
            smarter financial future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
