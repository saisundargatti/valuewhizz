/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

const EMISlicer = ({ emi }) => {
  const [newEMI, setNewEMI] = useState(emi);
  const [multiplier, setMultiplier] = useState(1); // Initial multiplier

  useEffect(() => {
    setNewEMI(newEMI > emi * 5 ? emi * 5 : newEMI * multiplier); // Set maximum EMI increase to 5 times the initial EMI
  }, [multiplier]);

  return (
    <div className="p-4 border rounded shadow-md">
      <h2 className="text-lg font-semibold mb-2">Incremental EMI </h2>

      <div className="mb-4">
        <input
          type="range"
          min="1"
          max="5"
          value={multiplier}
          onChange={(e) => setMultiplier(Number(e.target.value))}
          className="w-full"
        />
      </div>

      <p className="mb-2">Incremental EMI: {emi}</p>
      <p className="font-semibold"> {multiplier}X of EMI to pay every year </p>
    </div>
  );
};

export default EMISlicer;
