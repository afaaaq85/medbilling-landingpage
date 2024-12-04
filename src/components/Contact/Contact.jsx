import { MapPin, Mail, Phone } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div id="contact" className="container mx-auto px-4 py-12">
      <div className="flex flex-col items-center mb-8">
        <h2 className="text-4xl font-bold text-center text-[#2C4964] mb-4">Contact</h2>
        <div className="flex items-center">
          <div className="bg-[#DDDDDD] h-[2px] w-8"></div>
          <div className="bg-[#1977CC] h-[3px] w-11"></div>
          <div className="bg-[#DDDDDD] h-[2px] w-8"></div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="w-full h-[400px] mb-12 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.583740857543!2d73.07206992653387!3d33.667946087923184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df95459918a25f%3A0x46495cfc8ce0a1a3!2sI-8%20Markaz%20I%208%20Markaz%20I-8%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731069520863!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-8">
          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Location:</h3>
              <p className="text-gray-600">10228 E NORTHWEST HWY STE 10154 DALLAS, TX 75238</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Email:</h3>
              <a href="mailto:umarqadeer@gmail.com" className="text-gray-600 hover:text-blue-500">
                umarqadeer@gmail.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Call:</h3>
              <a href="tel:+12702614342" className="text-gray-600 hover:text-blue-500">
                +1 (202)-200-3085
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="md:col-span-2 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Message"
            rows="6"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
