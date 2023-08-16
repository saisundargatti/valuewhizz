import { useState, useEffect } from "react";
import PieAndTable from "../ToolCharts/pieAndTable";
import MonthlyLoanBreakup from "../ToolCharts/yearlyBreakup";
import { PMT } from "@formulajs/formulajs";
import EmiCalculatorBlog from "../ToolBlogs/EmiCalcBlog";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [rateOfInterest, setRateOfInterest] = useState("");
  const [emi, setEMI] = useState("");
  const [tenure, setTenure] = useState("");
  const [type, setType] = useState(1);

  const [isEditing, setIsEditing] = useState(false);

  const [isTenure, setIsTenure] = useState(false);

  const [isRoi, setIsRoi] = useState(false);

  function toggleArr() {
    setIsRoi(!isRoi);
  }

  function toggleEditing() {
    setIsEditing(!isEditing);
  }

  function toggleIsTenure() {
    setIsTenure(!isTenure);
  }

  const toPercentage = (arr) => {
    const formattedArr = arr > 0 ? `${arr}%` : "";

    return formattedArr;
  };

  /*function calEMI() {
    const monthlyInterestRate = rateOfInterest / 12 / 100;
    const totalPayments = tenure;

    // Calculate monthly payment (EMI) using the formula
    // EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
    const emiValue =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalPayments)) /
      (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    return emiValue;
  }*/

  const pmt = PMT(rateOfInterest / 100 / 12, tenure, -loanAmount, 0, type);

  useEffect(() => {
    if (tenure > 0 && rateOfInterest > 0) {
      setEMI(pmt);
    }
  }, [rateOfInterest, tenure, loanAmount, type]);

  const handleLoanAmountChange = (event) => {
    const value = event.target.value.replace(/,/g, ""); // Remove commas from the input
    setLoanAmount(value);
  };

  const toCurrency = (number) => {
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });

    return formatter.format(number);
  };

  const toYears = (months) => {
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    const formattedYears =
      years > 0 ? `${years} ${years === 1 ? "Year" : "Years"}` : "";
    const formattedMonths =
      remainingMonths.toFixed(0) > 0
        ? `${remainingMonths.toFixed(0)} ${
            remainingMonths.toFixed(0) === 1 ? "Month" : "Months"
          }`
        : "";

    return (
      formattedYears +
      (formattedYears && formattedMonths ? " " : "") +
      formattedMonths
    );
  };

  const principalPaid = parseFloat(loanAmount);
  const totalAmount = emi * tenure;
  const interestPaid = parseFloat(totalAmount) - principalPaid;

  //const emii = PMT(rateOfInterest / 100 / 12, tenure, -loanAmount);
  //console.log(emii * tenure - loanAmount);

  return (
    <div className="container mx-auto p-4 max-w-screen-md">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="input1"
            className="block text-gray-700 font-semibold mb-2"
          >
            Loan Amount
          </label>
          {isEditing && (
            <input
              type="number"
              id="input1"
              name="loanAmount"
              placeholder="Enter Loan Amount"
              value={loanAmount}
              onChange={handleLoanAmountChange}
              onBlur={toggleEditing}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          )}

          {!isEditing && (
            <input
              type="text"
              id="input1"
              name="loanAmount"
              placeholder="Enter Loan Amount"
              value={toCurrency(loanAmount)}
              onFocus={toggleEditing}
              readOnly
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="input2"
            className="block text-gray-700 font-semibold mb-2"
          >
            Rate of Interest
          </label>
          {isRoi && (
            <input
              type="number"
              id="input2"
              name="rateOfInterest"
              placeholder="Enter Rate of Interest"
              value={rateOfInterest}
              onChange={(event) => {
                setRateOfInterest(event.target.value);
              }}
              onBlur={toggleArr}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          )}
          {!isRoi && (
            <input
              type="text" // Changed the input type to text for better control of input value
              id="input2"
              name="rateOfInterest"
              placeholder="Enter Rate of Interest"
              value={toPercentage(rateOfInterest)}
              onFocus={toggleArr}
              readOnly
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="tenure"
            className="block text-gray-700 font-semibold mb-2"
          >
            Tenure
          </label>
          {isTenure && (
            <input
              type="number"
              id="tenure"
              name="tenure"
              value={tenure}
              onChange={(event) => {
                setTenure(event.target.value);
              }}
              onBlur={toggleIsTenure}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          )}
          {!isTenure && (
            <input
              type="text"
              id="input3"
              name="tenure"
              placeholder="Enter Tenure in Months"
              value={toYears(tenure)}
              onFocus={toggleIsTenure}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              readOnly
            />
          )}
        </div>
        <div className="mb-4">
          <label
            htmlFor="paymentTiming"
            className="block text-gray-700 font-semibold mb-2"
          >
            Payment Timing
          </label>
          <select
            id="paymentTiming"
            name="paymentTiming"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            onChange={(event) => setType(event.target.value)}
          >
            <option value={1}>At the beginning of the month</option>
            <option value={0}>At the end of the month</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            htmlFor="input4"
            className="block text-gray-700 font-semibold mb-2"
          >
            EMI
          </label>
          <input
            type="text"
            id="input4"
            name="tenure"
            value={toCurrency(emi)}
            readOnly
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <PieAndTable
          principalPaid={principalPaid}
          interestPaid={interestPaid}
          totalAmount={totalAmount}
          toCurrency={toCurrency}
        />
        <MonthlyLoanBreakup
          loanAmount={loanAmount}
          rateOfInterest={rateOfInterest}
          tenure={tenure}
          toCurrency={toCurrency}
          type={type}
        />
        <EmiCalculatorBlog />
      </div>
    </div>
  );
};

export default EMICalculator;
