import React from "react";

function ContactUs() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="container mx-auto">
        <h1 className="text-center font-semibold text-black text-3xl mb-4">
          Contact Us
        </h1>
        <h2 className="text-center font-semibold text-gray-700 text-xl mb-8">
          Wanna connect with us?
          <br />
          You can do so through the below mentioned links.
        </h2>
        <div className="flex justify-center">
          <div className="flex justify-center space-x-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4213/4213968.png"
                alt=""
                height="80"
                width="70"
              />
              <p className="font-sans text-gray-700 mt-2">
                saisundargatti365@gmail.com
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/0/191.png"
                alt=""
                height="80"
                width="70"
              />
              <p className="font-sans text-gray-700 mt-2">6302672994</p>
            </div>
          </div>
        </div>
        <h3 className="text-center font-semibold text-gray-700 text-lg mt-12">
          Find us on social media
        </h3>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://twitter.com/Value_Verse"
            className="text-indigo-600 hover:text-indigo-800"
          >
            <img
              width="48"
              height="48"
              src="https://img.icons8.com/color/48/twitter--v1.png"
              alt="twitter--v1"
            />
          </a>
          {/* Add other social media icons here */}
        </div>
        <div className="text-center mt-16">
          <h3 className="text-indigo-600 font-semibold text-lg">
            <b>Thank You!</b>
          </h3>
          <h3 className="text-indigo-600 font-semibold">
            We will get back to you soon...
          </h3>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
