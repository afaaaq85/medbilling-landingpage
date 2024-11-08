const HeaderCards = () => {
  return (
    <div className="lg:px-auto px-8 relative lg:absolute lg:-bottom-[175px] bottom-[10rem] left-1/2 -translate-x-1/2 w-[95%] lg:w-[90%] xl:w-[80%]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Main Feature Card */}
        <div className="bg-[#1977CC] min-h-[350px] md:col-span-2 lg:col-span-1 flex flex-col gap-4 text-white p-8 rounded-md">
          <h2 className="text-2xl md:text-3xl font-header font-semibold">Why Choose MedBilling</h2>
          <p className="text-sm md:text-base">
            To offer best medical billing and coding to clients for quick case repayment with
            exactness and consistence by strong activities and IT arrangements to expand income cycle
            executives.
          </p>
          <button className="bg-[#4792D6] w-full md:w-[200px] mt-auto rounded-full p-2 hover:bg-white hover:text-[#4792D6] transition-all duration-300">
            Learn More &gt;
          </button>
        </div>

        {/* Service Cards */}
        {[
          {
            icon: "bi bi-file-earmark-spreadsheet",
            title: "Charge Entry",
          },
          {
            icon: "bi bi-box",
            title: "Payment Posting",
          },
          {
            icon: "bi bi-image-fill",
            title: "Follow up",
          }
        ].map((card, index) => (
          <div 
            key={index}
            className="bg-white min-h-[330px] shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] flex flex-col gap-4 text-black p-4 rounded-md text-center justify-center"
          >
            <i className={`${card.icon} text-3xl md:text-4xl text-[#1977D6]`}></i>
            <h3 className="text-xl md:text-2xl font-semibold font-header">{card.title}</h3>
            <p className="text-gray-500 text-sm md:text-base">
              To offer best medical billing and coding to clients for quick case repayment with
              exactness and consistence by strong activities and IT arrangements to expand income cycle
              executives.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderCards;
