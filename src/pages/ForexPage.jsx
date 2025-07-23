import React, { useEffect } from "react";

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
    document.getElementById("forex_chart_container").appendChild(script);
  }, []);

  return (
    <div className="bg-white text-gray-800 py-10 px-4 md:px-16">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
        Forex Trading
      </h1>

      {/* User Info */}
      <div className="bg-gray-100 p-6 rounded shadow max-w-2xl mx-auto mb-10">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">
          Account Summary
        </h2>
        <ul className="text-gray-700 space-y-1">
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
      </div>

      {/* Forex Chart */}
      <div className="bg-gray-50 p-4 rounded shadow">
        <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
          Live Forex Chart
        </h2>
        <div id="forex_chart_container" className="w-full h-[500px]"></div>
      </div>
    </div>
  );
};

export default ForexPage;
