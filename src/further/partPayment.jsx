import { useState } from "react";

// eslint-disable-next-line react/prop-types
const PartPaymentEntry = ({ onAddPartPayment }) => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleAdd = () => {
    // Validate input
    if (!amount || !date) {
      return;
    }

    // Convert amount to a number
    const amountValue = parseFloat(amount);

    // Call the onAddPartPayment function from the parent component
    onAddPartPayment({ amount: amountValue, date });

    // Clear the input fields
    setAmount("");
    setDate("");
  };

  return (
    <div className="mt-4">
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-1 mr-2"
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-1 mr-2"
      />
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-2 py-1 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default PartPaymentEntry;
