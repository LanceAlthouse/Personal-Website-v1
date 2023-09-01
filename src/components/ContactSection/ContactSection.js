import React, { useState } from "react";
import axios from "axios";
import PersonIcon from "../../assets/images/person_icon.avif";
import EmailIcon from "../../assets/images/email_icon.avif";
import MessageIcon from "../../assets/images/message_icon.avif";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [formSubmission, setFormSubmission] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/send-email", {
        subject: `Contact Form Submission from ${email}`,
        text: `${message}`,
      });

      setFormSubmission(
        `Thank you for your submission ${name}, I will get back to you as soon as possible.`
      );
      console.log("Form submitted:", { name, email, message });

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="font-mono font-medium Consolas pt-16">
      <h1 className="text-3xl font-bold text-green-600 text-center underline">
        Contact Me
      </h1>
      <form
        className="pt-4 space-y-4 max-w-xl mx-auto text-white"
        onSubmit={handleSubmit}
      >
        <div className="pt-4 flex h-16">
          <span className="bg-gray-800 rounded-l-lg w-14 flex justify-center items-center border border-l-gray-500 border-r-0 border-t-gray-500 border-b-gray-500">
            <img src={PersonIcon} alt="user icon" className="w-6 h-6"></img>
          </span>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 rounded-r-lg border border-l-0 border-r-gray-500 border-t-gray-500 border-b-gray-500 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-lg shadow-black"
            value={name}
            autoComplete="name"
            placeholder="Name"
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="pt-4 flex h-16">
          <span className="bg-gray-800 rounded-l-lg w-14 flex justify-center items-center border border-l-gray-500 border-r-0 border-t-gray-500 border-b-gray-500">
            <img src={EmailIcon} alt="email icon" className="w-6 h-6"></img>
          </span>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 rounded-r-lg border border-l-0 border-r-gray-500 border-t-gray-500 border-b-gray-500 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-lg shadow-black"
            value={email}
            autoComplete="email"
            placeholder="Email"
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="pt-4 flex h-32">
          <span className="bg-gray-800 rounded-l-lg w-14 flex justify-center items-center border border-l-gray-500 border-r-0 border-t-gray-500 border-b-gray-500">
            <img src={MessageIcon} alt="message icon" className="w-6 h-6"></img>
          </span>
          <textarea
            id="message"
            className="w-full px-4 py-2 rounded-r-lg border border-l-0 border-r-gray-500 border-t-gray-500 border-b-gray-500 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600 shadow-lg shadow-black"
            value={message}
            autoComplete="off"
            placeholder="Write your message here..."
            onChange={handleMessageChange}
            rows={6}
            style={{ resize: "none" }}
            required
          />
        </div>
        <div className="flex items-center justify-center pr-4">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-gray-600 rounded-lg hover:bg-green-600 hover:opacity-100 shadow-lg shadow-black"
          >
            Submit
          </button>
        </div>
        <div className="text-center text-2xl pt-4 text-green-600">
          {formSubmission}
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
