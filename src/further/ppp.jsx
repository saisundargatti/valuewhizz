/* eslint-disable react/prop-types */
import { useState } from "react";
import PartPaymentEntry from "./partPayment";

function PPP({ loanAmount, setLoanAmount, toCurrency }) {
  const [partPayments, setPartPayments] = useState([]);

  const handleAddPartPayment = (newPartPayment) => {
    setPartPayments([...partPayments, newPartPayment]);
    setLoanAmount(loanAmount - newPartPayment.amount);
  };

  const [showPartPayment, setShowPartPayment] = useState(false);
  return (
    <div className="mb-4">
      <h2 className="text-lg font-semibold mb-2">Pre Payments</h2>
      <button
        onClick={() => setShowPartPayment(!showPartPayment)}
        className="bg-blue-500 text-white px-2 py-1 rounded"
      >
        +
      </button>
      {showPartPayment && (
        <PartPaymentEntry onAddPartPayment={handleAddPartPayment} />
      )}
      {showPartPayment && (
        <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Date</th>
              <th className="border px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {partPayments.map((payment, index) => (
              <tr key={index} className="mt-2">
                <td className="border px-4 text-center py-2">{payment.date}</td>
                <td className="border px-4 text-center py-2">
                  {toCurrency(payment.amount)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default PPP;
