import React from "react";

const Loans = () => {
  return (
    <div className="bg-white text-gray-800 py-10 px-4 md:px-16 space-y-20">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Loan Application
        </h1>
        <p className="text-lg max-w-2xl mx-auto">
          Choose a loan type below and fill out the required information. Ensure
          all documents and payment proofs are submitted as outlined.
        </p>
      </div>

      {/* Brokerage Firms Funded Loans */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          📈 Brokerage Firms Funded Loans
        </h2>
        <div className="space-y-4">
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              <strong>10,000$ commitment:</strong> Application fee 5% ($500)
            </li>
            <li>
              <strong>25,000$ commitment:</strong> Application fee 5% ($1,250)
            </li>
            <li>
              <strong>50,000$ commitment:</strong> Application fee 5% ($2,500)
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-600">
            Personal Details
          </h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Full Name, Email, Phone Number, Date of Birth</li>
            <li>Broker account details: Deriv, Exness</li>
            <li>CR Number, MT4/MT5 Logins</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-600">
            Trading Experience
          </h3>
          <p className="text-gray-700">
            Years of experience, Instruments traded, Platforms used
          </p>

          <h3 className="text-xl font-semibold text-blue-600">
            Financial Info
          </h3>
          <p className="text-gray-700">
            Annual income, Net worth, Financial obligations
          </p>

          <h3 className="text-xl font-semibold text-blue-600">
            Loan Details & Risk
          </h3>
          <p className="text-gray-700">
            Amount requested, Purpose, Strategy, Risk tolerance
          </p>

          <h3 className="text-xl font-semibold text-blue-600">
            Disclosure & Terms
          </h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              Invest back 20% of loan to JOSVIC pool account. Failure to repay
              loan may lead to deduction from this investment.
            </li>
            <li>Understand forex risk and consent to terms.</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-600">
            Required Documents
          </h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>Proof of ID (NRC/Passport)</li>
            <li>Proof of income/residency</li>
            <li>Proof of application fee payment</li>
          </ul>
        </div>
      </section>

      {/* Pool Investment-Backed Loans */}
      <section>
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">
          💼 Forex Pool Account Investment-Backed Loan
        </h2>
        <div className="space-y-4 text-gray-700">
          <h3 className="text-xl font-semibold text-blue-600">
            Applicant Info
          </h3>
          <p>Full name, Email, Phone, Address, ID/Passport, Country</p>

          <h3 className="text-xl font-semibold text-blue-600">
            Investment Details
          </h3>
          <ul className="list-disc pl-6">
            <li>Investment amount, Strategy, ROI</li>
            <li>
              Eligible to apply 3x running investment after 90 days active
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-600">Repayment</h3>
          <p>
            Loan is repaid via profits from pool account. Terms depend on ROI
            and investment performance.
          </p>

          <h3 className="text-xl font-semibold text-blue-600">
            Disclosure & Agreement
          </h3>
          <ul className="list-disc pl-6">
            <li>Understand risk and volatility of forex</li>
            <li>Josvic may request collateral if investment underperforms</li>
          </ul>

          <h3 className="text-xl font-semibold text-blue-600">
            Required Documents
          </h3>
          <ul className="list-disc pl-6">
            <li>Proof of ID (Passport/NRC)</li>
            <li>Proof of trading experience</li>
            <li>Pool account statements</li>
          </ul>
        </div>
      </section>

      {/* Contact Info */}
      <section className="bg-blue-50 p-6 rounded shadow">
        <h2 className="text-xl font-semibold text-blue-700 mb-4">
          📞 Contact Us
        </h2>
        <ul className="text-gray-700 space-y-1">
          <li>Email: contact@josvicfinance.com</li>
          <li>Phone: +256 700 000000</li>
          <li>WhatsApp: +256 700 000000</li>
          <li>Address: Plot 123, Kampala, Uganda</li>
        </ul>
      </section>
    </div>
  );
};

export default Loans;
