const LoanTenureCalculatorBlog = () => {
  return (
    <div className="container mx-auto p-8">
      <p>
        When you take out a loan, you agree to repay it over a certain period of
        time, known as the loan tenure. It is usually expressed in months or
        years. For example, a 10-year loan has a tenure of 120 months. The loan
        tenure is determined by the loan amount, interest rate, and monthly EMI.
      </p>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-2">
          The Importance of Loan Tenure
        </h2>
        <p>
          The loan tenure is an important factor to consider when taking out a
          loan. It affects the following:
        </p>
        <ul className="list-disc list-inside pl-4 mt-2">
          <li>
            Your monthly EMI: The longer the loan tenure, the lower your monthly
            EMI will be. However, you will end up paying more interest over the
            life of the loan.
          </li>
          <li>
            The total interest you pay: The longer the loan tenure, the more
            interest you will pay. This is because you will be paying interest
            for a longer period of time.
          </li>
          <li>
            Your financial flexibility: A shorter loan tenure gives you more
            financial flexibility. This is because you will have to make larger
            monthly payments, but you will be debt-free sooner.
          </li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-2">
          How to Calculate Loan Tenure ?
        </h2>
        <p>You can calculate loan tenure using the following formula:</p>
        <div className="overflow-x-auto">
          <pre className="bg-gray-200 p-4 rounded-lg my-2">
            Loan tenure (in months) = [Log (1 + (EMI * r) / P)] / Log (1 + r)
          </pre>
        </div>
        <p>where:</p>
        <ul className="list-disc list-inside pl-4 mt-2">
          <li>EMI is the monthly installment</li>
          <li>P is the principal amount</li>
          <li>r is the annual interest rate</li>
        </ul>
        <p className="mt-2 italic">
          Keep in mind that the provided interest rates are indicative, and loan
          tenures have been rounded off for ease of understanding
        </p>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-2">
          How to use a Loan Tenure Calculator ?
        </h2>
        <p>
          A loan tenure calculator is a tool that can help you calculate loan
          tenure quickly and easily. To use a loan tenure calculator, you simply
          enter the following information:
        </p>
        <ul className="list-disc list-inside pl-4 mt-2">
          <li>Loan amount</li>
          <li>Annual interest rate</li>
          <li>Monthly EMI</li>
        </ul>
        <p>The calculator will then calculate the loan tenure for you.</p>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-2">
          The Benefits of Using a Loan Tenure Calculator
        </h2>
        <p>
          There are many benefits to using a loan tenure calculator. Here are a
          few of them:
        </p>
        <ul className="list-disc list-inside pl-4 mt-2">
          <li>It can help you quickly and easily calculate loan tenure.</li>
          <li>It can help you choose the right loan tenure for your needs.</li>
          <li>It can help you save money on interest.</li>
          <li>
            It can help you make better financial decisions about your loans.
          </li>
        </ul>
      </div>

      <div className="my-8">
        <h2 className="text-xl font-semibold mb-2">
          Tips for Choosing the Right Loan Tenure
        </h2>
        <ul className="list-disc list-inside pl-4">
          <li>
            Start with a shorter loan tenure: This will give you the benefit of
            paying less interest over the life of the loan. However, you will
            have to make larger monthly payments.
          </li>
          <li>
            Consider your monthly budget: Make sure you can afford the monthly
            payments for the loan tenure you choose.
          </li>
          <li>
            Factor in your financial goals: When do you want to be debt-free?
            Choose a loan tenure that will help you achieve your financial
            goals.
          </li>
          <li>
            Be aware of the risks: A longer loan tenure means you will pay more
            interest over the life of the loan. Weigh the pros and cons before
            choosing a longer loan tenure.
          </li>
        </ul>
      </div>

      <p></p>
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
        Our Loan Tenure Calculator helps in knowing loan tenure, so hence you
        can make better financial decisions about your loans and save money on
        interest..
      </p>
    </div>
  );
};

export default LoanTenureCalculatorBlog;
