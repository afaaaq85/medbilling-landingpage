import { useState } from "react";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    department: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div id="appointment" className="bg-[#F1F7FD] min-h-[300px] flex flex-col items-center  px-12 justify-center gap-[2rem] py-12 ">
      <div className="flex flex-col items-center mb-2">
        <h2 className="text-4xl font-bold text-center mb-4 text-[#2C4964]">Make an Appointment</h2>
        <div className="flex items-center">
          <div className="bg-[#DDDDDD] h-[2px] w-8"></div>
          <div className="bg-[#1977CC] h-[3px] w-11"></div>
          <div className="bg-[#DDDDDD] h-[2px] w-8"></div>
        </div>
        <p className="text-xl text-center my-4 font-light">Contact Us.</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-8 md:w-[70%] w-full space-y-6"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
            required
          />
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none bg-white"
            required
          >
            <option value="">Select Department</option>
            <option value="sales">Sales Department</option>
            <option value="support">Customer Support</option>
            <option value="technical">Technical Services</option>
          </select>
        </div>

        <textarea
          name="message"
          placeholder="Message (Optional)"
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors min-h-[150px] resize-y"
        />
        <div className="w-full flex justify-center">
          <button
            type="submit"
            className=" bg-[#1977CC] transition-all duration-300 w-fit text-white px-8 py-3 rounded-3xl hover:bg-[#3291E6]"
          >
            Make an Appointment
          </button>
        </div>
      </form>
    </div>
  );
};

export default Appointment;
