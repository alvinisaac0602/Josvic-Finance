import React, { useState } from "react";

const Student = () => {
  const [form, setForm] = useState({
    package: "",
    startDate: "",
    email: "",
    whatsapp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.package || !form.startDate || !form.email || !form.whatsapp) {
      alert("Please fill out all fields.");
      return;
    }
    alert(
      `Mentorship application submitted!\n\nPackage: ${form.package}\nStart Date: ${form.startDate}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}`
    );
    setForm({
      package: "",
      startDate: "",
      email: "",
      whatsapp: "",
    });
  };

  return (
    <div className="bg-white min-h-screen py-10 px-4 md:px-16 text-gray-800">
      <div className="max-w-2xl mx-auto bg-gray-50 p-6 rounded shadow">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Student Mentorship Application
        </h1>

        <p className="text-gray-600 mb-6 text-center">
          Are you a young, driven individual seeking to understand and grow in
          the world of forex trading and finance? At Josvic Finance, we believe
          that knowledge is the greatest investment.
        </p>
        <p className="text-gray-600 mb-8 text-center">
          Our mentorship programs are designed to equip you with practical
          trading skills, discipline, and insight. Whether you're just beginning
          or looking to sharpen your strategies, our 2-month and lifetime
          packages are tailored to guide your journey to financial freedom.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Package Selection */}
          <div>
            <label className="block font-medium mb-2">
              Select Mentorship Package
            </label>
            <select
              name="package"
              value={form.package}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            >
              <option value="">-- Choose Package --</option>
              <option value="2 Months - $250">2 Months - $250</option>
              <option value="Lifetime - $500">Lifetime - $500</option>
            </select>
          </div>

          {/* Start Date */}
          <div>
            <label className="block font-medium mb-2">
              Preferred Start Date
            </label>
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label className="block font-medium mb-2">WhatsApp Contact</label>
            <input
              type="text"
              name="whatsapp"
              placeholder="+2607XXXXXXXX"
              value={form.whatsapp}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default Student;
