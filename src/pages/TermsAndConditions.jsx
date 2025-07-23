import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TermsAndConditions = () => {
  const [agreed, setAgreed] = useState(false);
  const navigate = useNavigate();

  const handleProceed = () => {
    if (!agreed) {
      alert("You must agree to the Terms and Conditions to proceed.");
      return;
    }
    navigate("/signup"); // or wherever you want to redirect
  };

  return (
    <div className="bg-white text-gray-800 py-10 px-4 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Forex Trading Fund Management – Terms & Conditions
        </h1>

        <div className="space-y-6 text-sm md:text-base leading-relaxed">
          <p>
            <strong>1. Introduction</strong>
            <br />
            These Terms and Conditions ("Agreement") govern the relationship
            between the company and the client regarding the management of funds
            in Forex trading. By agreeing to these Terms and Conditions, you
            acknowledge that you have read, understood, and accepted the terms
            outlined herein.
          </p>

          <p>
            <strong>2. Scope of Services</strong>
            <br />
            The Fund Manager will provide discretionary investment management
            services to the Client, including but not limited to:
            <ul className="list-disc list-inside ml-4">
              <li>Managing Client funds in Forex trading;</li>
              <li>Executing trades on behalf of the Client;</li>
              <li>
                Monitoring and adjusting the investment portfolio as deemed
                necessary.
              </li>
            </ul>
          </p>

          <p>
            <strong>3. Client Responsibilities</strong>
            <br />
            The Client shall:
            <ul className="list-disc list-inside ml-4">
              <li>
                Provide accurate and complete information about themselves and
                their financial situation;
              </li>
              <li>
                Ensure that the funds deposited are free from any encumbrances
                or liens;
              </li>
              <li>
                Understand and accept the risks associated with Forex trading.
              </li>
            </ul>
          </p>

          <p>
            <strong>4. Fund Management</strong>
            <br />
            The Fund Manager shall:
            <ul className="list-disc list-inside ml-4">
              <li>
                Manage Client funds in accordance with the agreed-upon
                investment strategy;
              </li>
              <li>
                Make decisions regarding the buying and selling of currencies;
              </li>
              <li>Monitor the performance of the investment portfolio.</li>
            </ul>
          </p>

          <p>
            <strong>5. Trading Risks</strong>
            <br />
            The Client acknowledges that Forex trading involves significant
            risks, including but not limited to:
            <ul className="list-disc list-inside ml-4">
              <li>Market volatility;</li>
              <li>Leverage;</li>
              <li>Liquidity risks;</li>
              <li>Regulatory changes.</li>
            </ul>
          </p>

          <p>
            <strong>6. Fees and Charges</strong>
            <br />
            The Fund Manager shall be entitled to the following fees:
            <ul className="list-disc list-inside ml-4">
              <li>
                Management Fee: 50% of profits made (if funds are traded on a
                client's account);
              </li>
              <li>Performance Fee;</li>
              <li>Other Charges as agreed.</li>
            </ul>
          </p>

          <p>
            <strong>7. Client Funds</strong>
            <br />
            The Client's funds shall be held in a separate account in the
            Client's name, and the Fund Manager shall not have the authority to
            withdraw or transfer funds without the Client's prior consent,
            except as specified in this Agreement.
          </p>

          <p>
            <strong>8. Reporting and Statements</strong>
            <br />
            The Fund Manager shall provide the Client with regular reports and
            statements, including but not limited to:
            <ul className="list-disc list-inside ml-4">
              <li>Monthly performance reports;</li>
              <li>Trade confirmations;</li>
              <li>Account statements.</li>
            </ul>
          </p>

          <p>
            <strong>9. Termination</strong>
            <br />
            Either party may terminate this Agreement upon 30 days written
            notice to the other party. Upon termination, the Fund Manager shall:
            <ul className="list-disc list-inside ml-4">
              <li>Cease managing the Client's funds;</li>
              <li>Provide a final report and statement;</li>
              <li>Return any remaining funds to the Client.</li>
            </ul>
          </p>

          <p>
            <strong>10. Confidentiality</strong>
            <br />
            Both the Fund Manager and the Client shall maintain the
            confidentiality of this Agreement and all information exchanged in
            connection with the management of the Client's funds.
          </p>

          <p>
            <strong>11. Liability and Indemnification</strong>
            <br />
            The Fund Manager shall not be liable for any losses or damages
            arising from:
            <ul className="list-disc list-inside ml-4">
              <li>Market fluctuations;</li>
              <li>Trading decisions made in good faith;</li>
              <li>Any other events beyond the Fund Manager's control.</li>
            </ul>
            The Client agrees to indemnify and hold harmless the Fund Manager
            against any claims, losses, or damages arising from:
            <ul className="list-disc list-inside ml-4">
              <li>The Client's failure to provide accurate information;</li>
              <li>The Client's breach of this Agreement;</li>
              <li>Any other actions or omissions by the Client.</li>
            </ul>
          </p>

          <p>
            <strong>12. Governing Law</strong>
            <br />
            This Agreement shall be governed by and construed in accordance with
            the laws of the country you are applying from. Any disputes arising
            shall be resolved internally.
          </p>

          <p>
            <strong>13. Amendments</strong>
            <br />
            The Fund Manager reserves the right to amend these Terms and
            Conditions with 3 weeks’ written notice to the Client.
          </p>

          <p>
            <strong>14. Acceptance</strong>
            <br />
            By checking the box below, you confirm that you have read,
            understood, and agreed to these Terms and Conditions.
          </p>
        </div>

        {/* Acceptance Checkbox */}
        <div className="mt-8">
          <label className="inline-flex items-start gap-2">
            <input
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              className="mt-1"
            />
            <span className="text-sm">
              I have read and accept the Terms and Conditions of Josvic Finance
              Fund Management.
            </span>
          </label>
        </div>

        {/* Proceed Button */}
        <div className="mt-6">
          <button
            onClick={handleProceed}
            disabled={!agreed}
            className={`px-6 py-2 rounded text-white ${
              agreed
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            } transition`}
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
