import React from "react";

const PortfolioPage = () => {
  const user = {
    name: "John Doe",
    accountId: "JF-123456",
    email: "john@josvicfinance.com",
    balance: 12750.0,
    equity: 13200.5,
    currency: "USD",
  };

  const openTrades = [
    {
      id: "T-001",
      pair: "EUR/USD",
      type: "Buy",
      lotSize: 1.0,
      entryPrice: 1.095,
      currentPrice: 1.1035,
      profit: 850.0,
    },
    {
      id: "T-002",
      pair: "GBP/USD",
      type: "Sell",
      lotSize: 0.5,
      entryPrice: 1.275,
      currentPrice: 1.2785,
      profit: -175.0,
    },
  ];

  return (
    <div className="bg-white min-h-screen text-gray-800 py-10 px-6 md:px-16 font-sans">
      <h1 className="text-4xl font-bold text-center text-gray-700 mb-8">
        📊 My Portfolio
      </h1>

      {/* User Info */}
      <div className="bg-gray-100 p-6 rounded shadow max-w-3xl mx-auto mb-10">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          Account Info
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
          <li>
            <strong>Equity:</strong> ${user.equity.toLocaleString()}{" "}
            {user.currency}
          </li>
        </ul>
      </div>

      {/* Open Trades */}
      <div className="bg-gray-50 p-6 rounded shadow max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Open Trades
        </h2>
        {openTrades.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-blue-100 text-gray-800">
                  <th className="px-4 py-2 border">Trade ID</th>
                  <th className="px-4 py-2 border">Pair</th>
                  <th className="px-4 py-2 border">Type</th>
                  <th className="px-4 py-2 border">Lot Size</th>
                  <th className="px-4 py-2 border">Entry Price</th>
                  <th className="px-4 py-2 border">Current Price</th>
                  <th className="px-4 py-2 border">Profit</th>
                </tr>
              </thead>
              <tbody>
                {openTrades.map((trade) => (
                  <tr key={trade.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2 border">{trade.id}</td>
                    <td className="px-4 py-2 border">{trade.pair}</td>
                    <td className="px-4 py-2 border">{trade.type}</td>
                    <td className="px-4 py-2 border">{trade.lotSize}</td>
                    <td className="px-4 py-2 border">{trade.entryPrice}</td>
                    <td className="px-4 py-2 border">{trade.currentPrice}</td>
                    <td
                      className={`px-4 py-2 border font-medium ${
                        trade.profit >= 0 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      ${trade.profit.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No open trades at the moment.
          </p>
        )}
      </div>
    </div>
  );
};

export default PortfolioPage;
