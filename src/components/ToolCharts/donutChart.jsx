import { Doughnut } from "react-chartjs-2";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// eslint-disable-next-line react/prop-types
function DonutAndTable({ investedAmount, accured, toCurrency, maturityValue }) {
  // Chart Data and Options for EMI Breakup
  ChartJS.register(ArcElement, Tooltip, Legend);
  const SipBreakupData = {
    labels: ["Invested Amount", "Accured"],
    datasets: [
      {
        data: [investedAmount, accured],
        backgroundColor: ["#36A2EB", "#00008B"],
      },
    ],
  };

  const SipBreakupOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };

  const principalPercentage = (investedAmount / maturityValue) * 100;
  const interestPercentage = (accured / maturityValue) * 100;

  return (
    <div className="flex justify-center mt-6">
      <div className="w-full md:w-1/2">
        <h2 className="text-lg font-semibold mb-2">SIP Final Breakup</h2>
        <div className="w-full h-64 md:h-auto">
          <Doughnut data={SipBreakupData} options={SipBreakupOptions} />
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
                <td className="border p-2">Invested Amount</td>
                <td className="border p-2">{toCurrency(investedAmount)}</td>
                <td className="border p-2">
                  {principalPercentage.toFixed(2)}%
                </td>
              </tr>
              <tr>
                <td className="border p-2">Accured Amount</td>
                <td className="border p-2">{toCurrency(accured)}</td>
                <td className="border p-2">{interestPercentage.toFixed(2)}%</td>
              </tr>
              <tr>
                <td className="border p-2">Total Amount</td>
                <td className="border p-2">{toCurrency(maturityValue)}</td>
                <td className="border p-2">100%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DonutAndTable;
