import { useState, useEffect } from "react";
import PieAndTable from "../ToolCharts/pieAndTable";
import YearlyLoanBreakup from "../ToolCharts/yearlyBreakup";
import LoanTenureCalculatorBlog from "../ToolBlogs/LoanTenureCalcBlog";

const LoanTenureCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [rateOfInterest, setRateOfInterest] = useState("");
  const [emi, setEMI] = useState("");
  const [tenure, setTenure] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [isEmi, setIsEmi] = useState(false);
  const [isRoi, setIsRoi] = useState(false);

  function toggleArr() {
    setIsRoi(!isRoi);
  }

  function toggleEditing() {
    setIsEditing(!isEditing);
  }

  function toggleIsEmi() {
    setIsEmi(!isEmi);
  }

  function calTenure() {
    //n = log(EMI / (EMI - P * r)) / log(1 + r)
    const monthlyInterestRate = rateOfInterest / 12 / 100;
    const emiValue = parseFloat(emi);
    const principalValue = parseFloat(loanAmount);

    const loanTermMonths =
      Math.log(emiValue / (emiValue - principalValue * monthlyInterestRate)) /
      Math.log(1 + monthlyInterestRate);

    return Math.round(loanTermMonths);
  }

  useEffect(() => {
    if (emi > 0 && rateOfInterest > 0) {
      setTenure(calTenure);
      console.log(calTenure());
    }
  }, [rateOfInterest, emi, loanAmount]);

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

  const toPercentage = (arr) => {
    const formattedArr = arr > 0 ? `${arr}%` : "";

    return formattedArr;
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
  const totalAmount = loanAmount * (1 + rateOfInterest / 100) ** (tenure / 12);
  const interestPaid = parseFloat(totalAmount) - principalPaid;

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
            htmlFor="input3"
            className="block text-gray-700 font-semibold mb-2"
          >
            EMI
          </label>
          {isEmi && (
            <input
              type="number"
              id="input3"
              name="emi"
              placeholder="Enter EMI Amount"
              value={emi}
              onChange={(event) => {
                setEMI(event.target.value);
              }}
              onBlur={toggleIsEmi}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          )}
          {!isEmi && (
            <input
              type="text"
              id="input3"
              name="emi"
              placeholder="Enter EMI Amount"
              value={toCurrency(emi)}
              onFocus={toggleIsEmi}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              readOnly
            />
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="input4"
            className="block text-gray-700 font-semibold mb-2"
          >
            Tenure
          </label>
          <input
            type="text"
            id="input4"
            name="tenure"
            value={toYears(tenure)}
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
        <YearlyLoanBreakup
          loanAmount={loanAmount}
          rateOfInterest={rateOfInterest}
          tenure={tenure}
          toCurrency={toCurrency}
        />
        <LoanTenureCalculatorBlog></LoanTenureCalculatorBlog>
      </div>
    </div>
  );
};

export default LoanTenureCalculator;
