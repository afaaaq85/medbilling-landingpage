import { useState } from "react";
import aboutImg from "../../assets/about.jpg";

const About = () => {
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <div id="about" className="flex xl:flex-row flex-col mb-3 w-full min-h-[650px] h-fit lg:mt-[350px]">
      <div className="xl:w-[40%] bg-center overflow-hidden flex-shrink-0">
        <img src={aboutImg} alt="about" className="w-full h-full object-cover object-center" />
      </div>
      <div className="flex flex-col gap-4 items-start p-8">
        <h2 className="text-3xl font-semibold text-[#2C4964]">About Us</h2>
        <p className="text-lg">
          Our master group comprises experienced clinical billers who are integrated with the value
          chain of your hospital or clinic and professionally handle your entire billing operations
          to maximize your revenues, supported by our reliable Dubai VPS services.
        </p>
        <div className="w-full flex flex-col items-start gap-5">
          <div
            className="flex items-start gap-3"
            onMouseEnter={() => {
              setHovered(true);
              setIndex(1);
            }}
            onMouseLeave={() => {
              setHovered(false);
              setIndex(0);
            }}
          >
            <div
              className={`border transition-all duration-300 border-[#72A4D6] ${
                hovered && index === 1 ? "bg-[#1977D6]" : "bg-white"
              } ${
                hovered && index === 1 ? "text-white" : "text-[#1977D6]"
              } rounded-full p-3 w-[60px] h-[60px] flex items-center justify-center`}
            >
              <i
                className={`bi bi-fingerprint text-[33px] transition-all duration-300 ${
                  hovered && index === 1 ? "text-white" : "text-[#1977D6]"
                } `}
              ></i>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-[#2C4964] ">Team</h3>
              <p>
                Our capable clinical charging staff work on all out quality administration theory
                for running your charging activities to expand income quicker than expected. They
                are prepared for precise accommodation of protection claims, convenient development
                for your sake, refusal, and allure of cases, installment posting and constant
                detailing.
              </p>
            </div>
          </div>
          <div
            className="flex items-start gap-3 "
            onMouseEnter={() => {
              setHovered(true);
              setIndex(2);
            }}
            onMouseLeave={() => {
              setHovered(false);
              setIndex(0);
            }}
          >
            <div
              className={`border transition-all duration-300 border-[#72A4D6] ${
                hovered && index === 2 ? "bg-[#1977D6]" : "bg-white"
              } ${
                hovered && index === 2 ? "text-white" : "text-[#1977D6]"
              } rounded-full p-3 w-[60px] h-[60px] flex items-center justify-center`}
            >
              <i
                className={`bi bi-gift text-[33px] transition-all duration-300 ${
                  hovered && index === 2 ? "text-white" : "text-[#1977D6]"
                } `}
              ></i>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-[#2C4964] ">Administration</h3>
              <p>
                Our capable clinical charging staff work on all out quality administration theory
                for running your charging activities to expand income quicker than expected. They
                are prepared for precise accommodation of protection claims, convenient development
                for your sake, refusal, and allure of cases, installment posting and constant
                detailing.
              </p>
            </div>
          </div>
          <div
            className="flex items-start gap-3 "
            onMouseEnter={() => {
              setHovered(true);
              setIndex(3);
            }}
            onMouseLeave={() => {
              setHovered(false);
              setIndex(0);
            }}
          >
            <div
              className={`border transition-all duration-300 border-[#72A4D6] ${
                hovered && index === 3 ? "bg-[#1977D6]" : "bg-white"
              } ${
                hovered && index === 3 ? "text-white" : "text-[#1977D6]"
              } rounded-full p-3 w-[60px] h-[60px] flex items-center justify-center`}
            >
              <i
                className={`bi bi-robot text-[33px] transition-all duration-300 ${
                  hovered && index === 3 ? "text-white" : "text-[#1977D6]"
                } `}
              ></i>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-semibold text-[#2C4964] ">Service</h3>
              <p>
                Our capable clinical charging staff work on all out quality administration theory
                for running your charging activities to expand income quicker than expected. They
                are prepared for precise accommodation of protection claims, convenient development
                for your sake, refusal, and allure of cases, installment posting and constant
                detailing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
