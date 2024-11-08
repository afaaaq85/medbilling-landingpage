import { Award, FlaskConical, UserRound } from "lucide-react";

const Achievements = () => {
  return (
    <div className="bg-[#F1F7FD] min-h-[300px] flex flex-col items-center md:flex-row px-12 md:px-auto justify-center gap-[2rem] py-12 ">
      <div className="flex h-fit flex-col items-center justify-center gap-2 bg-white min-w-[200px] md:w-[200px] lg:w-[400px] relative">
        <UserRound className="bg-[#1977CC] rounded-full p-3 absolute left-1/2 translate-x-[-50%] -top-[30px]" size={60} color="white" />
        <h2 className="text-4xl font-semibold mt-12">10</h2>
        <p className="mb-10 text-[18px]">Current Clients</p>
      </div>
      <div className="flex h-fit flex-col items-center justify-center gap-2 bg-white min-w-[200px] md:w-[200px] lg:w-[400px] relative">
        <FlaskConical className="bg-[#1977CC] rounded-full p-3 absolute left-1/2 translate-x-[-50%] -top-[30px]" size={60} color="white" />
        <h2 className="text-4xl font-semibold mt-12">100000</h2>
        <p className="mb-10 text-[18px]">Invoices Claimed</p>
      </div>
      <div className="flex h-fit flex-col items-center justify-center gap-2 bg-white min-w-[200px] md:w-[200px] lg:w-[400px] relative">
        <Award className="bg-[#1977CC] rounded-full p-3 absolute left-1/2 translate-x-[-50%] -top-[30px]" size={60} color="white" />
        <h2 className="text-4xl font-semibold mt-12">150</h2>
        <p className="mb-10 text-[18px]">Awards</p>
      </div>
     
    </div>
  );
};

export default Achievements;
