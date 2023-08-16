import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Header from "./components/SiteSections/header";
import LoanTenureCalculator from "./components/Tools/LoanTenureCalc";
import EMICalculator from "./components/Tools/emicalculator";
import Footer from "./components/SiteSections/footer";
import AboutUs from "./components/SitePolicies/AboutUs";
import ContactUs from "./components/SitePolicies/ContactUs";
import PrivacyPolicy from "./components/SitePolicies/privacypolicy";
import Disclaimer from "./components/SitePolicies/Disclaimer";
import TermsAndConditions from "./components/SitePolicies/TermsAndConditions";
import SIPCalculator from "./components/Tools/SipCalculator";
import AscendingContinuationTriangle from "./components/BullishPatterns/AscendingContinuationTriangle";

const toolArray = [
  { name: "EMI Calculator", path: "/emi-calculator" },
  {
    name: "Loan Tenure Calculator",
    path: "/loan-tenure-calculator",
  },
  {
    name: "SIP Calculator",
    path: "/sip-calculator",
  },
];

function UserSelect() {
  const [indexValue, setIndexValue] = useState(0);
  // eslint-disable-next-line react/prop-types

  return (
    <div className="mb-4 flex items-center">
      {toolArray.map((each, index) => (
        <Link to={each.path} key={index}>
          <button
            className={`px-4 py-2  ${
              indexValue === index
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => setIndexValue(index)}
          >
            {each.name}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-gray-100">
          <Header />
          <div className="flex justify-center items-center mt-28">
            <UserSelect />
          </div>
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<EMICalculator />}></Route>
              <Route path="/emi-calculator" element={<EMICalculator />}></Route>
              <Route
                path="/loan-tenure-calculator"
                element={<LoanTenureCalculator />}
              ></Route>
              <Route path="/sip-calculator" element={<SIPCalculator />}></Route>
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route
                path="/ascending-continuation-triangle"
                element={<AscendingContinuationTriangle />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
}
