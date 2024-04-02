"use client";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const FAQ = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  const accordionItems = [
    {
      question:
        "What is cybersecurity, and why is it essential for my business?",
      answer:
        "Cybersecurity involves protecting your digital systems, networks, and data from cyber threats and attacks. It's crucial for your business to safeguard sensitive information, maintain customer trust, and prevent financial losses due to data breaches.",
    },
    {
      question:
        "What sets your cybersecurity services apart from others in the industry?",
      answer:
        "Our cybersecurity services stand out because of our expert team, industry certifications, tailored solutions, and continuous innovation. We prioritize your specific needs and stay ahead of evolving threats.",
    },
    {
      question:
        "How do I know which cybersecurity solutions are right for my business?",
      answer:
        "We offer customized security assessments to identify your unique requirements. After evaluating your current infrastructure and potential risks, we recommend solutions that align with your goals and budget.",
    },
    {
      question:
        "What should I do if I suspect a security breach in my organization?",
      answer:
        "Contact our incident response team immediately. They will assess the situation, contain the breach, and help you recover while minimizing damage. A swift response is crucial in such cases.",
    },
  ];

  return (
    <section id="faq" className=" overflow-hidden flex items-center m-40 ">
      <div className="mr-10">
        <img
          className="w-100"
          src="https://security-bbu.netlify.app/images/accordian-left-img.png"
          alt="image"
        ></img>
      </div>
      <div className="container  w-6/12">
        <h2 className="font-bold  text-4xl  mb-16">
          General Questions Frequently Asked Questions?
        </h2>
        {accordionItems.map((item, index) => (
          <div className="col-lg-6 col-md-6 col-sm-12" key={index}>
            <div className="cyber-content accordian-text" data-aos="fade-up">
              <div className="accordion-item   ">
                <button
                  className="accordion-btn rounded-md m-2 ml-16 text-gray-600 bg-slate-900 w-9/12 p-6 flex"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                  aria-controls={`collapse-${index}`}
                >
                  <h3>{` ${item.question}`}</h3>
                  <div className=" ml-4">
                    {" "}
                    {activeAccordion === index ? (
                      <FaAngleUp />
                    ) : (
                      <FaAngleDown />
                    )}
                  </div>
                </button>
                {activeAccordion === index && (
                  <div
                    id={`collapse-${index}`}
                    className="accordion-content  w-10/12 p-6 "
                    aria-labelledby={`heading-${index}`}
                  >
                    <p className="text-left accordian-text-color ml-20">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
