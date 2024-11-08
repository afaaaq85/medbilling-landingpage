import { useState } from "react";

export default function Component() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is medical billing ?",
      answer:
        "Medical billing is the process of submitting and following up on claims with health insurance companies to receive payment for services rendered by a healthcare provider. It's a vital part of the healthcare revenue cycle that translates a healthcare service into a billing claim.",
    },
    {
      question: "Why should I outsource medical billing services ?",
      answer:
        "Outsourcing medical billing services can reduce operational costs, improve accuracy, ensure compliance, and allow healthcare providers to focus on patient care rather than administrative tasks.",
    },
    {
      question: "How does medical billing software work ?",
      answer:
        "Medical billing software automates the process of creating, submitting, and tracking insurance claims. It manages patient demographics, insurance information, and payment processing while ensuring compliance with healthcare regulations.",
    },
    {
      question:
        "How can medical billing services help improve my practice's financial performance ?",
      answer:
        "Medical billing services can improve financial performance by reducing claim denials, accelerating payments, optimizing revenue cycles, and ensuring accurate coding and documentation.",
    },
    {
      question: "Is medical billing software secure and compliant with privacy regulations ?",
      answer:
        "Yes, modern medical billing software is designed with robust security measures and complies with HIPAA and other privacy regulations to protect sensitive patient information.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-4xl font-bold text-center text-[#2C4964] mb-4">
          Frequently Asked Questions
        </h2>
          <div className="flex items-center">
            <div className="bg-[#DDDDDD] h-[2px] w-8"></div>
            <div className="bg-[#1977CC] h-[3px] w-11"></div>
            <div className="bg-[#DDDDDD] h-[2px] w-8"></div>
          </div>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm border border-gray-100 transition-all duration-200"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center text-gray-500">
                  ?
                </span>
                <span className="text-gray-800 font-medium">{faq.question}</span>
              </div>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              id={`faq-${index}`}
              role="region"
              className={`px-6 overflow-hidden transition-all duration-200 ${
                openIndex === index ? "max-h-48 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
