import { useState, useEffect } from "react";
import { FV } from "@formulajs/formulajs";
import DonutAndTable from "../ToolCharts/donutChart";
import SIPCalculatorBlog from "../ToolBlogs/sipCalcBlog";

const SIPCalculator = () => {
  const [monthlySIP, setMonthlySIP] = useState("");
  const [arr, setArr] = useState("");
  const [duration, setDuration] = useState("");
  const [maturityValue, setMaturityValue] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [isDuration, setIsDuration] = useState(false);
  const [isArr, setIsArr] = useState(false);

  function toggleArr() {
    setIsArr(!isArr);
  }

  function toggleEditing() {
    setIsEditing(!isEditing);
  }

  function toggleIsDuration() {
    setIsDuration(!isDuration);
  }

  const fv = FV(arr / 100 / 12, duration * 12, -monthlySIP, 0, 1);

  useEffect(() => {
    if (duration > 0 && arr > 0) {
      setMaturityValue(fv);
    }
  }, [arr, duration, monthlySIP]);

  const toCurrency = (number) => {
    const formatter = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    });

    return formatter.format(number);
  };

  const toYears = (years) => {
    const formattedYears =
      years > 0 ? `${years} ${years == 1 ? "Year" : "Years"}` : "";

    return formattedYears;
  };

  const toPercentage = (arr) => {
    const formattedArr = arr > 0 ? `${arr}%` : "";

    return formattedArr;
  };

  return (
    <div className="container mx-auto p-4 max-w-screen-md">
      <div className="bg-white p-6 shadow-md rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="input1"
            className="block text-gray-700 font-semibold mb-2"
          >
            Monthly SIP
          </label>
          {isEditing && (
            <input
              type="number"
              id="input1"
              name="loanAmount"
              placeholder="Enter Monthly Sip Amount"
              value={monthlySIP}
              onChange={(e) => setMonthlySIP(e.target.value)}
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
              value={toCurrency(monthlySIP)}
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
            Annual Rate of Return
          </label>
          {isArr && (
            <input
              type="number"
              id="input2"
              name="Annual Rate of Return"
              placeholder="Enter Annual Rate of Return"
              value={arr}
              onChange={(event) => {
                setArr(event.target.value);
              }}
              onBlur={toggleArr}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          )}
          {!isArr && (
            <input
              type="text" // Changed the input type to text for better control of input value
              id="input2"
              name="Annual Rate of Return"
              placeholder="Enter Annual Rate of Return"
              value={toPercentage(arr)}
              onFocus={toggleArr}
              readOnly
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="duration"
            className="block text-gray-700 font-semibold mb-2"
          >
            Duration
          </label>
          {isDuration && (
            <input
              type="number"
              id="duration"
              name="duration"
              value={duration}
              onChange={(event) => {
                setDuration(event.target.value);
              }}
              onBlur={toggleIsDuration}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
          )}
          {!isDuration && (
            <input
              type="text"
              id="input3"
              name="duration"
              placeholder="Enter Duration"
              value={toYears(duration)}
              onFocus={toggleIsDuration}
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
            Final Amount
          </label>
          <input
            type="text"
            id="input4"
            name="tenure"
            value={toCurrency(maturityValue)}
            readOnly
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <DonutAndTable
          maturityValue={maturityValue}
          investedAmount={monthlySIP * 12 * duration}
          accured={maturityValue - monthlySIP * 12 * duration}
          toCurrency={toCurrency}
        />
        <SIPCalculatorBlog />
      </div>
    </div>
  );
};

export default SIPCalculator;
