import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API or email service)
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto px-6 lg:px-16">
        <h2 className="text-5xl font-extrabold text-center text-blue-900 mb-8">Get in Touch</h2>
        <p className="text-center text-lg text-gray-700 mb-12">
          Let's collaborate and create something amazing. We're here to help and answer any questions you might have.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          {/* Contact Information */}
          <div className="bg-white p-10 shadow-2xl rounded-2xl flex flex-col">
            <h3 className="text-3xl font-semibold text-blue-900 mb-8">Contact Information</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team is dedicated to providing you with the best possible support. Feel free to reach out through any of the methods below, and we will respond as quickly as possible. Whether you have questions, need assistance, or want to collaborate, we're here for you.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Office Hours: Monday to Friday, 9 AM - 6 PM (EST)
            </p>
            <ul className="space-y-6 flex-grow">
              <li className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/726/726443.png" alt="Phone Icon" className="h-6 w-6" />
                </div>
                <span className="text-lg text-gray-800">+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email Icon" className="h-6 w-6" />
                </div>
                <span className="text-lg text-gray-800">contact@industrial.com</span>
              </li>
              <li className="flex items-center">
                <div className="p-3 bg-blue-100 rounded-full mr-4">
                  <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location Icon" className="h-6 w-6" />
                </div>
                <span className="text-lg text-gray-800">123 Industrial Blvd, Suite 100, Tech City</span>
              </li>
            </ul>
          </div>
          {/* Contact Form */}
          <form className="bg-white p-10 shadow-2xl rounded-2xl flex flex-col" onSubmit={handleSubmit}>
            <h3 className="text-3xl font-semibold text-blue-900 mb-8">Send Us a Message</h3>
            {/* Name */}
            <div className="mb-8 flex-grow">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-3">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>
            {/* Email */}
            <div className="mb-8 flex-grow">
              <label htmlFor="email" className="block text-gray-700 font-medium mb-3">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>
            {/* Message */}
            <div className="mb-8 flex-grow">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-3">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <div className="text-right">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-700 to-blue-900 text-white px-8 py-4 rounded-xl shadow-lg"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
