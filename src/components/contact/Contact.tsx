import React, { useState } from "react";

const ContactComponent: React.FC = () => {
  const [subject, setSubject] = useState("");

  return (
    <div
      className="h-screen flex items-center justify-center bg-gray-50 p-8"
      id="contact"
    >
      <div className="bg-white shadow-xl p-12 w-full max-w-7xl rounded-2xl border border-gray-200 relative overflow-hidden">
        <div className="absolute"></div>
        <h1 className="text-4xl font-extrabold mb-8 text-orange-500 z-10 relative">
          Get in Touch
        </h1>

        <form className="z-10 relative space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition duration-300 shadow-md"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition duration-300 shadow-md"
              placeholder="johndoe@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Subject
            </label>
            <select
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition duration-300 shadow-md"
            >
              <option value="">Select a subject...</option>
              <option value="feedback">Feedback</option>
              <option value="inquiry">Inquiry</option>
              <option value="support">Support</option>
              <option value="bug">Bug</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-transparent transition duration-300 shadow-md"
              placeholder="Your message..."
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-8 rounded-lg shadow-lg transition-colors duration-300"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactComponent;
``;
