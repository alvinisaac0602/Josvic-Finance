import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  BarChart2,
  GraduationCap,
  Banknote,
  BookOpen,
  UserCheck,
  ArrowRight,
} from "lucide-react";

const Home = () => {
  return (
    <div className="font-sans text-gray-800">
      {/* Hero */}
      <section
        className="relative h-[95vh] bg-cover bg-center flex items-center justify-center transition-all duration-500 ease-in-out"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1605902711622-cfb43c4437d3?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        <div className="relative z-10 text-white text-center max-w-3xl px-6 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 drop-shadow">
            Josvic Finance
          </h1>
          <p className="text-lg mb-4">
            Empowering youth with trading tools, loans, and financial literacy.
          </p>
          <div className="mb-4 flex justify-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <Users size={16} /> 5,000+ Youth Reached
            </span>
            <span className="flex items-center gap-1">
              <BarChart2 size={16} /> 3M+ UGX Invested
            </span>
          </div>
          <p className="mb-6">
            💡 Vision: A financially independent African youth
          </p>
          <Link to="/about">
            <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition transform hover:scale-105">
              Learn More
            </button>
          </Link>
        </div>
      </section>

      {/* Our Impact */}
      <section className="bg-white py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-8">🌍 Our Impact</h2>
        <div className="grid md:grid-cols-4 gap-8 text-blue-700">
          <div className="transform hover:scale-105 transition">
            <GraduationCap size={36} className="mx-auto mb-2" />
            <h3 className="text-3xl font-bold">5,000+</h3>
            <p className="text-gray-600">Students Trained</p>
          </div>
          <div className="transform hover:scale-105 transition">
            <Banknote size={36} className="mx-auto mb-2" />
            <h3 className="text-3xl font-bold">1,200+</h3>
            <p className="text-gray-600">Loans Disbursed</p>
          </div>
          <div className="transform hover:scale-105 transition">
            <BarChart2 size={36} className="mx-auto mb-2" />
            <h3 className="text-3xl font-bold">3M+</h3>
            <p className="text-gray-600">UGX Invested</p>
          </div>
          <div className="transform hover:scale-105 transition">
            <UserCheck size={36} className="mx-auto mb-2" />
            <h3 className="text-3xl font-bold">99%</h3>
            <p className="text-gray-600">Success Rate</p>
          </div>
        </div>
      </section>

      {/* Forex Trading Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-12">
          💹 Forex Opportunities
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: <BarChart2 size={28} className="text-blue-600" />,
              title: "Funded Accounts",
              desc: "Trade with our capital and grow your profits with zero risk.",
              link: "/forex",
              image:
                "https://images.unsplash.com/photo-1581093448798-5fe0f93f7c71?auto=format&fit=crop&w=800&q=60",
            },
            {
              icon: <BookOpen size={28} className="text-blue-600" />,
              title: "Forex Lessons",
              desc: "Weekly mentorship, video lessons, and practical challenges.",
              link: "/forex",
              image:
                "https://images.unsplash.com/photo-1611222087618-b61e61b1cc9f?auto=format&fit=crop&w=800&q=60",
            },
            {
              icon: <Banknote size={28} className="text-blue-600" />,
              title: "Loan Accounts",
              desc: "Access quick and flexible loans to support your trading journey.",
              link: "/loans",
              image:
                "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=60",
            },
          ].map(({ icon, title, desc, link, image }, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-xl transition transform hover:scale-[1.03] overflow-hidden"
            >
              <img
                src={image}
                alt={title}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-left">
                <div className="mb-3">{icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {title}
                </h3>
                <p className="text-gray-700 mb-4">{desc}</p>
                <Link
                  to={link}
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Student Portal */}
      <section className="py-16 px-6 md:px-16 bg-white text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">
          🎓 Student Portal
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Join thousands of students gaining financial literacy, mentorship, and
          access to trading capital.
        </p>
        <div className="grid md:grid-cols-2 gap-10">
          <img
            src="https://images.unsplash.com/photo-1601234894782-a0e7e38b2730?auto=format&fit=crop&w=800&q=60"
            alt="Students"
            className="rounded-lg shadow-lg w-full h-72 object-cover"
          />
          <div className="text-left">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              How to Join
            </h3>
            <ul className="list-disc text-gray-700 pl-6 mb-4">
              <li>Register online through our portal</li>
              <li>Submit identification for verification</li>
              <li>Start learning with access to materials</li>
            </ul>
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              What You Get
            </h3>
            <ul className="list-disc text-gray-700 pl-6">
              <li>Forex bootcamps</li>
              <li>Q&A mentorship sessions</li>
              <li>Access to loan applications</li>
              <li>Certificates upon completion</li>
            </ul>
            <Link to="/student">
              <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
                Join Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">💼 Ready to Start?</h2>
        <p className="text-lg max-w-xl mx-auto mb-6">
          Whether you're a beginner or ready to scale, Josvic Finance gives you
          the tools to succeed.
        </p>
        <Link to="/signup">
          <button className="bg-white text-blue-700 font-medium px-6 py-2 rounded hover:bg-gray-100 transition">
            Get Started Today
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
