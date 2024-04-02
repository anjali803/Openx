import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className=" bg-gradient-to-r from-green-500 to-black vh-100"
    >
      <h1 className="text-3xl text-center font-bold font-sans text-white">
        Why Choose Us
      </h1>
      <p className="text-md text-center m-auto w-5/12 mt-4 text-white">
        At OpenX, we understand that the digital landscape is fraught with
        threats and vulnerabilities. That's why we're dedicated to being your
        trusted cybersecurity partner.
      </p>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6  mt-10 m-auto  w-4/5 ">
        <div className=" p-10 w-96  bg-slate-950 rounded-lg ">
          <div className=" w-20 h-20 bg-gray-300  rounded-md">
            <img
              className="p-2 ml-2"
              src="https://security-bbu.netlify.app/images/about-round-icon1.png"
              alt=""
            ></img>
          </div>
          <h2 className="mt-8 font-semibold text-lg text-gray-400">
            Security Services
          </h2>
          <p className="mt-6 text-md mb-6 text-gray-400 ">
            We offers comprehensive security services designed to protect your
            digital world. From network security to rapid incident response, we
            keep your business safe from evolving cyber threats. Your security
            is our priority.
          </p>
          <button className=" text-white w-40 font-bold rounded-md">
            Learn More {">"}
          </button>
        </div>

        <div className=" p-10 w-96  bg-slate-950 rounded-lg ">
          <div className=" w-20 h-20 bg-gray-300  rounded-md">
            <img
              className="p-2 ml-2"
              src="https://security-bbu.netlify.app/images/about-round-icon2.png"
              alt=""
            ></img>
          </div>
          <h2 className="mt-8 font-semibold text-lg text-gray-400">
            Data Privacy
          </h2>
          <p className="mt-6 text-md mb-6 text-gray-400 ">
            Protecting what matters most. Our data protection solutions ensure
            the security and privacy of your valuable information, safeguarding
            your business from data breaches and unauthorized access.
          </p>
          <button className=" text-white w-40 font-bold rounded-md ">
            Learn More {">"}
          </button>
        </div>
        <div className=" p-10 w-96  bg-slate-950 rounded-lg ">
          <div className=" w-20 h-20 bg-gray-300  rounded-md">
            <img
              className="p-2 ml-2"
              src="https://security-bbu.netlify.app/images/about-round-icon3.png"
              alt=""
            ></img>
          </div>
          <h2 className="mt-8 font-semibold text-lg text-gray-400">
            Industry Certified
          </h2>
          <p className="mt-6 text-md mb-6 text-gray-400">
            Industry-certified excellence. Security Boost Up holds the highest
            standards in cybersecurity, with industry certifications such as ISO
            27001, CISSP, CISM, and PCI DSS. Trust in our expertise to fortify
            your digital defenses.
          </p>
          <button className=" text-white w-40 font-bold rounded-md ">
            Learn More {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
