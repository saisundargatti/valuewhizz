/* eslint-disable react/prop-types */
import { IPMT, PPMT, SUM } from "@formulajs/formulajs";
import StackedColumnChart from "./stackedChart";
import { calculateYearlyBreakup } from "../ToolUtils/utils";

const YearlyLoanBreakup = ({
  loanAmount,
  rateOfInterest,
  tenure,
  toCurrency,
  type,
}) => {
  if (type === undefined) {
    type = 0;
  }

  // intialiize
  const emiSplit = [];
  let balance = loanAmount;

  const range = [];
  const balanceList = [];
  const ipmtList = [];
  const ppmtlist = [];

  for (let i = 1; i <= tenure; i++) {
    const ipmt = -IPMT(
      rateOfInterest / 100 / 12,
      i,
      tenure,
      loanAmount,
      0,
      type
    );
    let ppmt = -PPMT(rateOfInterest / 100 / 12, i, tenure, loanAmount, 0, type);
    balance -= ppmt;

    // list values for chart represenation
    range.push(i);
    balanceList.push(balance);
    ipmtList.push(ipmt);
    ppmtlist.push(ppmt);

    emiSplit.push({
      monthlyInterest: ipmt,
      monthlypricipal: ppmt,
      balance,
    });
  }

  /// Yearly Breakup
  const yearsRange = [];
  const yearlyBalanceList = [];
  let yearlyBalance = loanAmount; // Make sure 'loanAmount' is defined elsewhere
  const yearlyInterestList = calculateYearlyBreakup(ipmtList);
  const yearlyPrincipalList = calculateYearlyBreakup(ppmtlist);

  for (let i = 0; i < yearlyPrincipalList.length; i++) {
    yearlyBalance -= yearlyPrincipalList[i];
    console.log(yearlyPrincipalList[i]);
    yearlyBalanceList.push(yearlyBalance);
    yearsRange.push(i + 1); // To start counting years from 1
  }

  let yearlySplit = [];

  for (let i = 0; i < yearsRange.length; i++) {
    yearlySplit.push({
      yearlyInterest: yearlyInterestList[i],
      yearlyPrincipal: yearlyPrincipalList[i],
      yearlyBalance: yearlyBalanceList[i],
    });
  }

  return (
    <div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Yearly Breakup</h2>
        <table className="mt-2 w-full border">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border">Year</th>
              <th className="py-2 px-4 border">Interest Paid</th>
              <th className="py-2 px-4 border">Principal Paid</th>
              <th className="py-2 px-4 border">Balance</th>
            </tr>
          </thead>
          <tbody>
            {yearlySplit.map((yearData, index) => (
              <tr key={index} className="border">
                <td className="py-2 px-4 border text-center">{index + 1}</td>
                <td className="py-2 px-4 text-center border">
                  {toCurrency(yearData.yearlyInterest.toFixed(2))}
                </td>
                <td className="py-2 px-4 text-center border">
                  {toCurrency(yearData.yearlyPrincipal.toFixed(2))}
                </td>
                <td className="py-2 px-4 text-center border">
                  {toCurrency(yearData.yearlyBalance.toFixed(2))}
                </td>
              </tr>
            ))}
            <tr className="text-center">
              <td>Total</td>
              <td>{toCurrency(SUM(yearlyInterestList))}</td>
              <td>{toCurrency(SUM(yearlyPrincipalList))}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="w-full">
        <StackedColumnChart
          labels={yearsRange}
          ipmtList={yearlyInterestList}
          ppmtlist={yearlyPrincipalList}
          balanceList={yearlyBalanceList}
        />
      </div>
    </div>
  );
};

export default YearlyLoanBreakup;
