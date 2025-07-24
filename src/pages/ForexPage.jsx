import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ForexPage = () => {
  const user = {
    name: "John Doe",
    accountId: "JF-123456",
    balance: 12750.0,
    email: "john@josvicfinance.com",
    currency: "USD",
  };

  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      width: "100%",
      height: 500,
      symbol: "FX:EURUSD",
      interval: "30",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      enable_publishing: false,
      allow_symbol_change: true,
      container_id: "forex_chart_container",
    });

    const container = document.getElementById("forex_chart_container");
    if (container) {
      container.innerHTML = "";
      container.appendChild(script);
    }
  }, []);

  const faqs = [
    {
      question: "What is Forex trading?",
      answer:
        "Forex trading involves buying and selling currencies with the aim of making a profit from fluctuations in exchange rates.",
    },
    {
      question: "Is Forex trading risky?",
      answer:
        "Yes. While there’s potential for profit, forex trading carries high risk due to market volatility. Never invest more than you can afford to lose.",
    },
    {
      question: "How much do I need to start trading?",
      answer:
        "With Josvic Finance, you can begin with as little as $50. We recommend starting small while learning the platform and market.",
    },
    {
      question: "Can I withdraw my money anytime?",
      answer:
        "Yes. You can withdraw funds at any time, provided you meet any applicable verification or minimum withdrawal requirements.",
    },
  ];

  return (
    <div className="bg-white text-gray-800 py-10 px-4 md:px-16 font-sans">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">
        Forex Trading Dashboard
      </h1>

      {/* User Info */}
      <div className="bg-gray-100 p-6 rounded shadow max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          👤 Account Summary
        </h2>
        <ul className="text-gray-700 space-y-1 text-base">
          <li>
            <strong>Name:</strong> {user.name}
          </li>
          <li>
            <strong>Account ID:</strong> {user.accountId}
          </li>
          <li>
            <strong>Email:</strong> {user.email}
          </li>
          <li>
            <strong>Balance:</strong> ${user.balance.toLocaleString()}{" "}
            {user.currency}
          </li>
        </ul>
        <div className="mt-6 flex gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded shadow transition">
            Start Trading
          </button>
          <Link to="/portfolio">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded shadow transition">
              View Portfolio
            </button>
          </Link>
        </div>
      </div>

      {/* Live Chart */}
      <div className="bg-gray-50 p-4 rounded shadow mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          📈 Live Forex Chart (EUR/USD)
        </h2>
        <div id="forex_chart_container" className="w-full h-[500px]" />
      </div>

      {/* Getting Started Steps */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">
          🚀 Getting Started with Forex Trading
        </h2>
        <p className="text-center mb-8 text-gray-600">
          Follow these steps to begin your forex trading journey with Josvic
          Finance.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              1. Open an Account
            </h3>
            <p className="text-gray-600">
              Register with us and verify your identity to access the trading
              dashboard.
            </p>
          </div>
          <div className="bg-white p-6 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              2. Fund Your Wallet
            </h3>
            <p className="text-gray-600">
              Use secure payment methods to deposit funds to your trading
              account.
            </p>
          </div>
          <div className="bg-white p-6 border rounded-xl shadow hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              3. Start Trading
            </h3>
            <p className="text-gray-600">
              Analyze charts, apply strategies, and place trades on major
              currency pairs.
            </p>
          </div>
        </div>
      </div>

      {/* Video Tutorial */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          🎥 Forex Trading Tutorial
        </h2>
        <p className="text-center text-gray-600 mb-4">
          Watch this short video to learn the basics of forex trading.
        </p>
        <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
          <iframe
            className="w-full h-[315px]"
            src="/Tutorialvid.mp4"
            title="Forex Trading Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          ❓ Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border rounded-md shadow-sm">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 bg-blue-100 hover:bg-blue-200 font-medium flex justify-between items-center"
              >
                {faq.question}
                <span>{openFAQ === index ? "−" : "+"}</span>
              </button>
              {openFAQ === index && (
                <div className="px-4 py-3 text-gray-700 bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForexPage;
