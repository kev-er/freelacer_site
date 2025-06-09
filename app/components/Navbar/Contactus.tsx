import React from "react";

interface ContactusProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Contactus: React.FC<ContactusProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-700 hover:text-gray-900 text-2xl font-bold"
          aria-label="Close modal"
        >
          &times;
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form
          action="https://formsubmit.co/info@kevbuilds.co.uk"
          method="POST"
          className="space-y-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://kevbuilds.co.uk/thank-you" />
          <input type="text" name="_honey" style={{ display: "none" }} />

          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Your email"
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <textarea
            name="message"
            placeholder="Your message"
            rows={4}
            required
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contactus;

