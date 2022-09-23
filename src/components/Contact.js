import React from "react";
import { FaEnvelope } from "react-icons/fa";


const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#2D283E] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/8e30048c-6662-40d9-bd8b-da62595ce998"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#66b2b2] text-[#D1d7E0]">
            Contact
          </p>
            <span>
              <FaEnvelope className="inline-flex ml-4 text-4xl text-[#D1d7E0]"/>
            </span>
          <p className="text-[#f7F9fB] py-4">
            Enter you info below and I will be back with you
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 py-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-[#66b2b2] hover:border-[#3e7a7a] hover:font-bold px-4 py-3 my-8 mx-auto flex items-center">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
