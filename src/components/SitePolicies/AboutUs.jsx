const AboutUs = () => {
  return (
    <div className="container mx-auto py-8 max-w-screen-md">
      <h1 className="text-3xl font-bold mb-4 text-center">
        About Us - Value Whizz
      </h1>
      <p className="text-lg leading-relaxed mb-8">
        At Value Whizz, we're your go-to source for powerful web tools and
        insightful blogs in finance and investing. Our mission is to simplify
        finance, making it accessible and understandable for everyone.
      </p>

      <h2 className="text-xl font-semibold mb-4">What We Offer:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>
          <strong>Web Tools:</strong> Our user-friendly tools help you analyze
          data, calculate financial metrics, and gain insights into your
          investment strategies.
        </li>
        <li>
          <strong>Blogs:</strong> Our blog covers a range of topics, from
          fundamental analysis to market trends, providing expert insights to
          enhance your financial literacy.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4 ">Why Choose Us:</h2>
      <ul className="list-disc list-inside mb-8">
        <li>
          <strong>Expertise:</strong> Our team comprises financial experts and
          tech enthusiasts dedicated to delivering accurate information.
        </li>
        <li>
          <strong>User-Centric:</strong> Our tools and content are tailored to
          meet your needs and help you achieve your financial goals.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">Join Us:</h2>
      <p className="mb-4">
        Embark on your financial journey with Value Whizz. Explore our tools,
        read our blog, and empower yourself with the knowledge you need for
        financial success. Connect with us on social media to stay updated.
      </p>
      <p>
        <em>Empower Your Finances with Value Whizz.</em>
      </p>
    </div>
  );
};

export default AboutUs;
