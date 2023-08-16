const SIPCalculatorBlog = () => {
  return (
    <div className="container mx-auto p-8">
      <p className="mb-4">
        A user-friendly SIP calculator that simplifies your investment planning
        process. It requires just a few inputs: your monthly SIP amount, the
        annual rate of return you're aiming for, and the duration of your
        investment.
      </p>

      <p className="mb-4">
        Once you enter these details, the calculator instantly computes and
        presents the Final Amount you could potentially accumulate over your
        investment period. It eliminates the need for complex calculations,
        providing you with quick and accurate results.
      </p>

      <p className="mb-4">
        But that's not all. Below the Final Amount calculation, there's a
        helpful doughnut chart. This chart visually breaks down your SIP
        investment's final outcome into two key components:
      </p>

      <p className="mb-4">
        <strong>Invested Amount:</strong> This segment represents the total sum
        you've contributed to your SIP during the investment period. It
        showcases your commitment to consistent saving and investment.
      </p>

      <p className="mb-4">
        <strong>Accrued Amount:</strong> As time progresses, your investment
        earns returns. The Accrued Amount segment of the doughnut chart
        demonstrates how your money grows over time through the power of
        compounding.
      </p>
    </div>
  );
};

export default SIPCalculatorBlog;
