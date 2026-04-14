import React from "react";

const Contact = () => {
  return (
    <div className="w-full px-6 md:px-16 lg:px-28 py-12 bg-gray-50">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-3xl md:text-4xl font-bold text-gray-800">
          CONTACT <span className="text-[#1C352D]">US</span>
        </p>
        <div className="w-20 h-1 bg-[#1C352D] mx-auto mt-3 rounded-full"></div>
      </div>

      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <form
          action="#"
          className="bg-white shadow-lg rounded-2xl p-8 flex flex-col gap-6"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1C352D]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1C352D]"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1C352D]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#1C352D] text-white rounded-xl shadow-md hover:bg-[#264d3f] transition duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Office Info */}
        <div className="bg-[#1C352D] text-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-semibold mb-4">Our Office</h1>
          <p className="mb-4">📍 123 Healthcare Street, Wellness City, India</p>
          <p className="mb-2">📞 +91 98765 43210</p>
          <p className="mb-6">✉️ contact@healthcare.com</p>

          {/* Map Embed (Optional) */}
          <iframe
            title="office-location"
            className="w-full h-48 rounded-xl border-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160986346!2d72.74109964999999!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6302a4a9e0f%3A0xdeb5a3f6c85f1c81!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1679495070848!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
