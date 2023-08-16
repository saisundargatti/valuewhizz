import { Pie } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// eslint-disable-next-line react/prop-types
function PieAndTable({ principalPaid, interestPaid, toCurrency, totalAmount }) {
  // Chart Data and Options for EMI Breakup
  ChartJS.register(ArcElement, Tooltip, Legend);
  const emiBreakupData = {
    labels: ["Principal Paid", "Interest Paid"],
    datasets: [
      {
        data: [principalPaid, interestPaid],
        backgroundColor: ["#36A2EB", "#FF6384"],
      },
    ],
  };

  const emiBreakupOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const principalPercentage = (principalPaid / totalAmount) * 100;
  const interestPercentage = (interestPaid / totalAmount) * 100;

  return (
    <div className="flex justify-center mt-6">
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-semibold mb-2">Loan Breakup</h2>
        <div className="w-full h-64 md:h-auto">
          <Pie data={emiBreakupData} options={emiBreakupOptions} />
        </div>
        <div className="mt-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Description</th>
                <th className="border p-2">Amount</th>
                <th className="border p-2">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-2">Loan Component</td>
                <td className="border p-2">{toCurrency(principalPaid)}</td>
                <td className="border p-2">
                  {principalPercentage.toFixed(2)}%
                </td>
              </tr>
              <tr>
                <td className="border p-2">Interest Component</td>
                <td className="border p-2">{toCurrency(interestPaid)}</td>
                <td className="border p-2">{interestPercentage.toFixed(2)}%</td>
              </tr>
              <tr>
                <td className="border p-2">Total Amount</td>
                <td className="border p-2">{toCurrency(totalAmount)}</td>
                <td className="border p-2">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default PieAndTable;
