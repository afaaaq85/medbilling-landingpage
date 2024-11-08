import { Accessibility, Dna, HeartPulse, Hospital, Pill } from "lucide-react";
import { useState } from "react";

const Services = () => {
  const services = [
    {
      Icon: HeartPulse,
      title: "Medical Billing Services",
      description:
        "Optimize your revenue cycle with our comprehensive medical billing services, tailored for seamless financial management in your healthcare practice.",
    },
    {
      Icon: Pill,
      title: "Medical Coding Services",
      description:
        "Ensure accurate and compliant medical coding for optimized revenue cycle management in your healthcare practice with our professional services.",
    },
    {
      Icon: Hospital,
      title: "Medical Credentialing Services",
      description:
        "Simplify the medical credentialing process and expand your practice's network participation with our professional services.",
    },
    {
      Icon: Dna,
      title: "Medical Transcription Services",
      description:
        "Efficient and accurate medical transcription services for streamlined documentation and enhanced clinical workflows in your practice.",
    },
    {
      Icon: Accessibility,
      title: "Account Receivable Services",
      description:
        "Streamline your revenue cycle and improve financial performance with our comprehensive accounts receivable services, including efficient management of outstanding invoices, claim resolution, and cash flow acceleration.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div id="services" className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#2C4964]">Services</h2>
        <div className="flex items-center">
          <div className="bg-[#DDDDDD] h-[2px] w-8"></div>
          <div className="bg-[#1977CC] h-[3px] w-11"></div>
          <div className="bg-[#DDDDDD] h-[2px] w-8"></div>
        </div>
        <p className="text-center max-w-[90%] text-lg text-gray-600 mt-4">
          Introducing professional medical billing services to streamline your revenue cycle and
          enhance financial performance. With our expertise, we handle coding, claim submission,
          payment posting, and follow-up, ensuring accurate reimbursement and maximizing
          profitability for your healthcare practice.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`border p-12 flex flex-col items-center text-center transition-all duration-300 ease-in-out cursor-pointer
              ${hoveredIndex === index ? "bg-[#1977CC]" : "bg-white"}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative w-16 h-16 mb-4">
              <div
                className={`absolute top-0 left-0 w-16 h-16 ${
                  hoveredIndex === index ? "bg-[#3291E6]" : "#BADAF7"
                } rounded-lg`}
                style={{ transform: "translate(-8px, -8px)" }}
              ></div>
              <div
                className={`relative w-16 h-16 ${
                  hoveredIndex === index ? "bg-white" : "bg-[#1977CC]"
                }  rounded-lg p-3 flex justify-center items-center`}
              >
                <service.Icon size={35} color={hoveredIndex === index ? "#1977CC" : "white"} />
              </div>
            </div>
            <h3
              className={`text-2xl font-bold mb-4 transition-colors duration-300
              ${hoveredIndex === index ? "text-white" : "text-[#404964]"}`}
            >
              {service.title}
            </h3>
            <p
              className={`transition-colors duration-300
              ${hoveredIndex === index ? "text-white" : "text-gray-600"}`}
            >
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
