import { Twitter, Facebook, Instagram, BookOpen, Linkedin, } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white pt-16 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-3xl font-normal font-header">MedBilling</h2>
            <div className="space-y-2 text-gray-600">
              <p>10226 E NORTHWEST HWY STE 10154</p>
              <p>DALLAS, TX 75238</p>
              <p>United States</p>
              <div className="pt-2">
                <p><span className="font-medium">Phone:</span> +1 270-261-4342</p>
                <p><span className="font-medium">Email:</span> adriannaseerustic@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Home</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms of service</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy policy</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Medical Billing Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Medical Coding Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Medical Credentialing Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Medical Transcription Services</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Account Receivable Services</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Join Our Newsletter</h3>
            <p className="text-gray-600 mb-4">Stay connected and informed - join our newsletter today !</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-600 text-sm">
              © Copyright MedBilling. All Rights Reserved
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                <BookOpen size={18} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>

           
           
          </div>
        </div>
      </div>
    </footer>
  )
}