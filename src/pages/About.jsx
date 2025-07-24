import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800 py-12 px-4 md:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-10 text-gray-700">
          About Us
        </h1>

        {/* What We Do / Mission / Vision / Achievements */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                What We Do
              </h2>
              <p>
                Josvic Finance Development Limited is a registered fintech
                company in Uganda, empowering youth with opportunities in forex
                trading, micro-loans, and digital literacy. We provide practical
                tools and training to transform lives financially.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                Our Mission
              </h2>
              <p>
                To provide accessible financial education and digital solutions
                that foster entrepreneurship, trading skills, and personal
                growth among African youth.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                Our Vision
              </h2>
              <p>
                A financially empowered generation of African youth, confident
                in managing, growing, and investing their finances effectively.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">
                Achievements
              </h2>
              <ul className="list-disc list-inside">
                <li>5,000+ students trained in forex and finance</li>
                <li>1,200+ loans disbursed to young entrepreneurs</li>
                <li>Over 3M UGX invested in community trading accounts</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Meet the Team - Images Only */}
        {/* Meet the Team - Images Only */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-600 text-center mb-6">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["team1.jpg", "team2.jpg", "team3.jpg"].map((image, index) => (
              <div key={index} className="rounded overflow-hidden shadow">
                <img
                  src={`/${image}`}
                  alt={`Team member ${index + 1}`}
                  className="w-full h-60 object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Our Services */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4 text-center">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="p-4 bg-gray-50 rounded shadow">
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Forex Trading
              </h3>
              <p>
                We train and support clients in navigating global forex markets
                with mentorship and funded accounts.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded shadow">
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Loan Services
              </h3>
              <p>
                We offer fast, flexible micro-loans to empower personal and
                business growth for our users.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded shadow">
              <h3 className="text-xl font-bold text-gray-700 mb-2">
                Student Portal
              </h3>
              <p>
                A digital space where students get access to learning materials,
                mentorship, and a growth community.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center bg-blue-50 p-10 rounded shadow">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Contact Us
          </h2>
          <p className="mb-2">📧 Email: support@josvicfinance.com</p>
          <p className="mb-2">📞 Phone: +256 123 456 789</p>
          <p className="mb-4">
            📍 Address: Plot 10, Kampala Road, Kampala, Uganda
          </p>
          <a
            href="/contact"
            className="inline-block mt-4 bg-gray-600 text-white px-6 py-2 rounded hover:bg-blue-gray transition"
          >
            Get in Touch
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
