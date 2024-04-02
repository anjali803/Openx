import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Security-Boost-Up Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Security-Boost-Up</h2>
          <p>
            Stay Secure with Us: Your trusted cybersecurity partner. Explore our
            services, get in touch, or request a consultation to fortify your
            digital defenses. Your security is our mission.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-2">Services</h3>
            <ul>
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
            <ul>
              <li>Email: security@brandboostup.in</li>
              <li>Phone: +91-9258602423</li>
              <li>Address: New Delhi Saket, 110017, India</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
