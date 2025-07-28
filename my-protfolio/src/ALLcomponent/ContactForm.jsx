import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">Contact Me</h2>
        <p className="mt-4 text-gray-600">Have a project or a question? Let's talk!</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg p-10">
        {/* Left Info Cards */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {/* Info Box 1 */}
            <div className="bg-white border border-yellow-400 rounded-lg p-6 hover:shadow-md transition">
              <div className="text-yellow-500 text-3xl mb-2">📍</div>
              <p className="font-semibold text-gray-800">Dhaka</p>
              <p className="text-sm text-gray-500">Location</p>
            </div>
            {/* Info Box 2 */}
            <div className="bg-white border border-yellow-400 rounded-lg p-6 hover:shadow-md transition">
              <div className="text-yellow-500 text-3xl mb-2">📞</div>
              <p className="font-semibold text-gray-800">+01404260731</p>
              <p className="text-sm text-gray-500">Phone</p>
            </div>
            
           
            {/* Info Box 4 */}
            <div className="bg-white border border-yellow-400 rounded-lg p-6 hover:shadow-md transition">
              <div className="text-yellow-500 text-3xl mb-2">🕒</div>
              <p className="font-semibold text-gray-800">24/7</p>
              <p className="text-sm text-gray-500">Support</p>
            </div>
          </div>
        </div>

        {/* Right Contact Form */}
        <div className="space-y-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-4 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-4 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="p-4 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="text"
                placeholder="Location"
                className="p-4 border border-gray-300 rounded-md w-full focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Supports / Message"
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-yellow-500 hover:bg-yellow-400 text-white font-semibold rounded-md transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
