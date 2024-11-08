import HeaderCards from "./HeaderCards";

const Header = () => {
  return (
    <>
      <div id="home" className="header font-header bg-green-900 w-full h-[78vh] flex relative">
        <div className="flex flex-col gap-4 mt-[10%] ms-[10%]">
          <h3 className="uppercase  md:text-6xl text-4xl  font-semibold text-[#2C4964] tracking-wide">
            welcome to medbilling
          </h3>
          <p className=" md:text-2xl text-xl  text-[#2C4964] tracking-wide">
            We are a talented team Who Take Care Of Your Billing
          </p>
          <button className="bg-[#1977CC] transition-all duration-300 w-fit uppercase text-white px-8 py-3 rounded-3xl hover:bg-[#3291E6]">
            get started
          </button>
        </div>
      </div>
      <HeaderCards />
    </>
  );
};

export default Header;
