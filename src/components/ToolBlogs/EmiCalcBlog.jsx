const EmiCalculatorBlog = () => {
  return (
    <div className="container mx-auto p-8">
      <p className="mb-4">
        If you've ever wondered how to effectively manage your loan payments,
        our EMI calculator is here to help. With this user-friendly tool, you
        can gain a comprehensive understanding of your Equated Monthly
        Installment (EMI) and make informed financial decisions. Let's take a
        closer look at what our EMI calculator has to offer.
      </p>

      <h2 className="text-xl font-semibold mb-4">Loan Details</h2>
      <p className="mb-4">
        Our EMI calculator starts by asking for a few essential loan details:
      </p>
      <ul className="list-disc list-inside mb-6">
        <li>
          <strong>Loan Amount:</strong> Input the total amount of money you're
          borrowing.
        </li>
        <li>
          <strong>Rate of Interest:</strong> Specify the annual interest rate
          for the loan.
        </li>
        <li>
          <strong>Tenure in Months:</strong> Choose the number of months over
          which you plan to repay the loan.
        </li>
        <li>
          <strong>Payment Timing:</strong> Select whether you want the payment
          to be deducted at the beginning or the end of the month.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">EMI Calculation</h2>
      <p className="mb-4">
        Once you provide these details, our EMI calculator uses a standard
        formula to calculate your monthly EMI:
      </p>
      <div className="overflow-x-auto">
        <pre className="bg-gray-200 p-4 rounded-lg mb-6 whitespace-nowrap">
          <code>EMI = [P * r * (1 + r)^n] / [(1 + r)^n - 1]</code>
        </pre>
      </div>
      <p>
        This formula considers the Loan Amount (<code>P</code>), the monthly
        interest rate (<code>r</code>), and the number of EMI payments (
        <code>n</code>). The calculated EMI includes both principal and interest
        components, ensuring a clear breakdown of each payment.
      </p>

      <h2 className="text-xl font-semibold mb-4 mt-4">
        Loan Breakup Pie Chart
      </h2>
      <p className="mb-4">
        Our visual representation takes your understanding a step further. A pie
        chart visually displays the proportion of Loan Amount and Interest Paid
        over the loan tenure. This graphical depiction provides an intuitive way
        to comprehend the distribution of your payments between principal and
        interest.
      </p>

      <h2 className="text-xl font-semibold mb-4">
        Yearly Breakup Table and Chart
      </h2>
      <p className="mb-4">
        For a detailed breakdown, our EMI calculator offers a Yearly Breakup
        Table and a corresponding Chart:
      </p>
      <p className="mb-4">
        <strong>Yearly Breakup Table:</strong> This table showcases a
        comprehensive annual breakdown of each EMI payment. It highlights both
        the principal and interest components, allowing you to track the
        reduction in the outstanding balance and the gradual decrease in
        interest payments as the loan term progresses.
      </p>
      <p className="mb-4">
        <strong>Yearly Breakup Chart:</strong> The accompanying chart visually
        represents the yearly allocation of Interest Paid and Principal Paid. By
        observing the stacked column chart, you can gain valuable insights into
        the changing distribution of payments over time.
      </p>

      <h2 className="text-xl font-semibold mb-4">
        Empowering Your Financial Decisions
      </h2>
      <p className="italic">
        Our EMI calculator equips you with the knowledge needed to make
        well-informed financial decisions. Whether you're considering a home
        loan, car loan, or personal loan, our tool empowers you to manage your
        finances effectively and confidently.
      </p>
    </div>
  );
};

export default EmiCalculatorBlog;
