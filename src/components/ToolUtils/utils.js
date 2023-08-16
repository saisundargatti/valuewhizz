import { addMonths, subDays, format } from "date-fns";
import { PMT, IPMT, PPMT } from "@formulajs/formulajs"; // import entire package

export function calculateDynamicIntervals(startDate, endDate) {
  const intervals = [];
  let intervalStart = new Date(startDate);
  let startYear = intervalStart.getFullYear();
  let endYear = endDate.getFullYear();
  let diff = endYear - startYear + 1;

  for (let i = 0; i < diff; i++) {
    const intervalEnd = new Date(intervalStart);
    intervalEnd.setFullYear(intervalEnd.getFullYear() + 1);
    intervalEnd.setMonth(0);
    intervalEnd.setDate(1);
    intervalEnd.setDate(intervalEnd.getDate() - 1);

    if (intervalEnd > endDate) {
      intervalEnd.setFullYear(endDate.getFullYear());
      intervalEnd.setMonth(endDate.getMonth());
      intervalEnd.setDate(endDate.getDate());
    }

    intervals.push({
      start: format(intervalStart, "dd MMMM yyyy"),
      end:
        i === diff - 1
          ? format(endDate, "dd MMMM yyyy")
          : format(intervalEnd, "dd MMMM yyyy"),
    });

    intervalStart = new Date(intervalEnd);
    intervalStart.setDate(intervalEnd.getDate() + 1);
  }

  return intervals;
}

export function calculateEndDate(startDate, totalMonths) {
  const start = new Date(startDate);
  const end = subDays(addMonths(start, totalMonths), 1);
  return format(end, "MM/dd/yyyy");
}

export function getEMI(rateOfInterest, tenureInMonths, principal, timing) {
  const emi = -PMT(
    rateOfInterest / 100 / 12,
    tenureInMonths,
    principal,
    0,
    timing
  );
  return emi;
}

export function getMonthlySplit(rateOfInterest, tenureInMonths, principal) {
  const emiSplit = [];
  let balance = principal;

  for (let i = 1; i <= tenureInMonths; i++) {
    const ipmt = -IPMT(rateOfInterest / 100 / 12, i, tenureInMonths, principal);
    let ppmt = -PPMT(rateOfInterest / 100 / 12, i, tenureInMonths, principal);
    balance -= ppmt;

    emiSplit.push({
      monthlyInterest: ipmt,
      monthlypricipal: ppmt,
      balance,
    });

    return emiSplit;
  }
}

export function getYearlySplit1(emiSplit, principal) {
  let yearlyBreakup = [];

  for (let i = 0; i < emiSplit.length; i++) {
    const monthData = emiSplit[i];
    const yearlyIndex = Math.floor(i / 12);

    if (!yearlyBreakup[yearlyIndex]) {
      yearlyBreakup[yearlyIndex] = {
        year: yearlyIndex + 1,
        interestPaid: 0,
        principalPaid: 0,
        balance: principal,
      };
    }

    yearlyBreakup[yearlyIndex].interestPaid += monthData.monthlyInterest;
    yearlyBreakup[yearlyIndex].principalPaid += monthData.monthlypricipal;
    yearlyBreakup[yearlyIndex].balance -= monthData.monthlypricipal;
  }

  return yearlyBreakup;
}
export function getYearlySplit(emiSplit, principal) {
  let yearlyBreakup = [];

  for (let i = 0; i < emiSplit.length; i++) {
    const monthData = emiSplit[i];
    const yearlyIndex = Math.floor(i / 12);

    if (!yearlyBreakup[yearlyIndex]) {
      yearlyBreakup[yearlyIndex] = {
        year: yearlyIndex + 1,
        interestPaid: 0,
        principalPaid: 0,
        balance: principal,
      };
    }

    yearlyBreakup[yearlyIndex].interestPaid += monthData.monthlyInterest;
    yearlyBreakup[yearlyIndex].principalPaid += monthData.monthlypricipal;
    yearlyBreakup[yearlyIndex].balance -= monthData.monthlypricipal;
  }

  return yearlyBreakup;
}
export function calculateYearlyBreakup(monthlyArray) {
  // Calculate total number of years and extra months
  const totalMonths = monthlyArray.length;
  const totalYears = Math.floor(totalMonths / 12);
  const extraMonths = totalMonths % 12;

  // Create an empty array to store yearly interest values
  const yearlyBreakup = [];

  // Calculate yearly interest for complete years
  for (let year = 0; year < totalYears; year++) {
    const yearlyInterest = monthlyArray
      .slice(year * 12, (year + 1) * 12)
      .reduce((acc, val) => acc + val, 0);
    yearlyBreakup.push(yearlyInterest);
  }

  // Calculate interest for the odd year (extra months)
  if (extraMonths > 0) {
    const oddYearInterest = monthlyArray
      .slice(-extraMonths)
      .reduce((acc, val) => acc + val, 0);
    yearlyBreakup.push(oddYearInterest);
  }

  return yearlyBreakup;
}
