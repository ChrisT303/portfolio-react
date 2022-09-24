import React from "react";
import { FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen main flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/8e30048c-6662-40d9-bd8b-da62595ce998"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 bdr text-main">
            Contact
          </p>
          <span>
            <FaEnvelope className="inline-flex ml-4 text-4xl text-main" />
          </span>
          <p className="text-main py-2">
            Please enter your info below and I will be back with you within 24
            hours. You can also email me directly at:
            <a
              href="mailto:chris.t.williams417@gmail.com"
              className="ml-2 font-bold hover:text-[#FFE5b4]"
            >
              chris.t.williams417@gmail.com
            </a>
          </p>
        </div>
        <input
          className="form-bg p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 py-2 form-bg"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="form-bg p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="con-btn">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
