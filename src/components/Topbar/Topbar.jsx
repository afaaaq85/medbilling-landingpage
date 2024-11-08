import { Facebook, Instagram, Linkedin, Mail, Smartphone, Twitter } from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex md:px-8 sm:flex-row flex-col justify-evenly items-start sm:items-center w-full bg-[#F9FBFE] p-2 md:gap-[40%] gap-4">
      <div className="flex items-center gap-3 cursor-pointer sm:justify-normal justify-between w-full">
        <div className="flex items-center gap-1">
          <Mail className="w-4 h-4 text-[#72A4D6] mt-[1px]" />
          <p className="text-[15px] hover:text-[#72A4D6] transisiton duration-200 ">
            umarqadeer123@gmail.com
          </p>
        </div>
        <div className="flex items-center gap-1">
          <Smartphone className="w-4 h-4 text-[#72A4D6] mt-[1px]" />
          <p className="text-[15px]">+1 270-261-4342</p>
        </div>
      </div>
      <div className="flex gap-2 items-center w-full sm:w-auto justify-center sm:justify-center">
        <Twitter className="w-4 h-4 text-[#72A4D6] cursor-pointer"/>
        <Facebook className="w-4 h-4 text-[#72A4D6] cursor-pointer"/>
        <Instagram className="w-4 h-4 text-[#72A4D6] cursor-pointer"/>
        <Linkedin className="w-4 h-4 text-[#72A4D6] cursor-pointer"/>
      </div>
    </div>
  );
};

export default Topbar;
