import React from "react";

const Pricing = () => {
  return (
    <div id="pricing">
      <h1 className="text-3xl text-center font-bold font-sans">
        Your Pricing Plan
      </h1>
      <p className="text-md text-center m-auto w-5/12 mt-4 ">
        Transparent and Flexible Pricing: Our pricing plans are designed to fit
        your specific cybersecurity needs. We offer transparent options that
        scale with your business, ensuring affordability without compromising on
        security.
      </p>

      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6  mt-10 m-auto  w-4/5 ">
        <div className=" p-10 w-96  bg-slate-950 rounded-lg ">
          <div className=" w-28 h-24 bg-gray-300  rounded-md">
            <img
              className="p-2 ml-2"
              src="https://security-bbu.netlify.app/images/pricing-plan-icon1.png"
              alt=""
            ></img>
          </div>
          <h2 className="mt-8 font-semibold text-lg text-gray-400">Beginner</h2>
          <h2 className="text-red-700 font-bold text-2xl mt-2">
            Free trial <span className="text-white m-1 text-sm">/ 5Days</span>
          </h2>
          <p className="mt-6 text-md mb-6 text-gray-400 ">
            Limited access to essential cybersecurity tools and resources. Basic
            email support during the trial period. Access to educational
            materials on cybersecurity best practices.
          </p>
          <button className="border-2 p-2 text-white w-40 font-bold rounded-md  border-slate-600">
            Order Now
          </button>
        </div>

        <div className=" p-10 w-96  bg-slate-950 rounded-lg ">
          <div className=" w-28 h-24 bg-gray-300  rounded-md">
            <img
              className="p-2 ml-2"
              src="https://security-bbu.netlify.app/images/pricing-plan-icon2.png"
              alt=""
            ></img>
          </div>
          <h2 className="mt-8 font-semibold text-lg text-gray-400">Business</h2>
          <h2 className="text-red-700 font-bold text-2xl mt-2">
            199$ <span className="text-white m-1 text-sm">/ Month</span>
          </h2>
          <p className="mt-6 text-md mb-6 text-gray-400 ">
            Full access to a comprehensive suite of cybersecurity tools and
            resources. 24/7 email and chat support. Monthly security reports and
            vulnerability assessments. Regular software and threat updates.
            Access to exclusive webinars and workshops.
          </p>
          <button className="border-2 p-2 text-white w-40 font-bold rounded-md  border-slate-600">
            Order Now
          </button>
        </div>
        <div className=" p-10 w-96  bg-slate-950 rounded-lg ">
          <div className=" w-28 h-24 bg-gray-300  rounded-md">
            <img
              className="p-2 ml-2"
              src="https://security-bbu.netlify.app/images/pricing-plan-icon3.png"
              alt=""
            ></img>
          </div>
          <h2 className="mt-8 font-semibold text-lg text-gray-400">
            Exclusive
          </h2>
          <h2 className="text-red-700 font-bold text-2xl mt-2">
            249$ <span className="text-white m-1 text-sm">/ Month</span>
          </h2>
          <p className="mt-6 text-md mb-6 text-gray-400">
            Full access to a comprehensive suite of cybersecurity tools and
            resources. 24/7 email and chat support. Monthly security reports and
            vulnerability assessments. Regular software and threat updates.
            Access to exclusive webinars and workshops. Malware removal and
            cleanup service. Priority response and assistance during security
            incidents. Personalized training and consultation sessions.
            On-demand security assessments for your website.
          </p>
          <button className="border-2 p-2 text-white w-40 font-bold rounded-md  border-slate-600">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
