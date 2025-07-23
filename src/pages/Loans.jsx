import React, { useState } from "react";

const Loans = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    amount: "",
    purpose: "",
    duration: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Loan application submitted! (Mock only)");
    setForm({
      name: "",
      email: "",
      amount: "",
      purpose: "",
      duration: "",
    });
  };

  return (
    <div className="bg-white text-gray-800 py-10 px-4 md:px-16">
      <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
        Loan Services
      </h1>

      {/* Description */}
      <div className="max-w-3xl mx-auto mb-10 text-center text-gray-700">
        <p className="text-lg mb-4">
          At Josvic Finance, we provide affordable and accessible loan solutions
          to support your financial needs — from business growth to personal
          emergencies.
        </p>
        <ul className="list-disc list-inside text-left max-w-xl mx-auto">
          <li>Business Startup Loans</li>
          <li>Student Education Loans</li>
          <li>Short-term Personal Loans</li>
          <li>Flexible repayment plans from 1 to 12 months</li>
        </ul>
      </div>

      {/* Application Form */}
      <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Loan Application Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="amount" className="block font-medium mb-1">
              Loan Amount (USD)
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={form.amount}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          <div>
            <label htmlFor="purpose" className="block font-medium mb-1">
              Purpose of Loan
            </label>
            <textarea
              id="purpose"
              name="purpose"
              value={form.purpose}
              onChange={handleChange}
              rows="3"
              required
              className="w-full border border-gray-300 p-2 rounded"
            ></textarea>
          </div>

          <div>
            <label htmlFor="duration" className="block font-medium mb-1">
              Repayment Duration
            </label>
            <select
              id="duration"
              name="duration"
              value={form.duration}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">Select duration</option>
              <option value="1 Month">1 Month</option>
              <option value="3 Months">3 Months</option>
              <option value="6 Months">6 Months</option>
              <option value="12 Months">12 Months</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Loans;
