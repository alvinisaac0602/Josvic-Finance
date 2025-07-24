import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const ForexPage = () => {
  const user = {
    name: "John Doe",
    accountId: "JF-123456",
    balance: 12750.0,
    email: "john@josvicfinance.com",
    currency: "USD",
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
      container.innerHTML = ""; // clear old chart if any
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="bg-white text-gray-800 py-10 px-4 md:px-16 font-sans">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
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
      <div className="bg-gray-50 p-4 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800">
          📈 Live Forex Chart (EUR/USD)
        </h2>
        <div id="forex_chart_container" className="w-full h-[500px]" />
      </div>
    </div>
  );
};

export default ForexPage;
