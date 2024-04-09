import React from "react";
import { FaPhone, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white p-8 ">
      <div className="max-w-6xl mx-auto flex mb-10 mt-20">
        {/* Security-Boost-Up Section */}
        <div className="mb-6">
          <h2 className="text-4xl font-bold mb-2">OpenX</h2>
          <p className=" lg:w-2/3 lg:pr-8 ">
            Stay Secure with Us: Your trusted cybersecurity partner. Explore our
            services, get in touch, or request a consultation to fortify your
            digital defenses. Your security is our mission.
          </p>

          <div className="flex justify-left mt-10 ">
            <FaPhone className="text-white text-xl mr-4 backdrop:line-through" />
            <FaLinkedin className="text-white text-xl mr-4" />
            <FaWhatsapp className="text-white text-xl" />
          </div>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul className="w-40">
              <li>Threat Hunter</li>
              <li>Incident Responder</li>
              <li>Secure Managed IT</li>
              <li>Compliance</li>
              <li>Cyber Security</li>
              <li>Disaster Planning</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul>
              <li>Contact Us</li>
              <li>Knowledge Base</li>
              <li>About Us</li>
              <li>FAQ</li>
              <li>Partnerships</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Get in Touch</h3>
            <ul className="w-60">
              <li>Email: security@brandboostup.in</li>
              <li>Phone: +91-9258602423</li>
              <li>Address: New Delhi Saket, 110017, India</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p className="text-center mt-6">
        ©2024 Brand Boost Up All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
