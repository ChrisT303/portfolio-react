import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import Modal from "./Modal";


const Contact = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const contactHandler = (event) => {
    if (
      enteredName.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredMessage.trim().length === 0
    ) {
      event.preventDefault();
      setShowModal({
        title: "Invalid Input",
        message: "Please enter enter a valid name, email or message.",
      });
      return;
    }
    if (
      enteredName.trim().length > 0 ||
      enteredEmail.trim().length > 0 ||
      enteredMessage.trim().length > 0
    ) {
      setShowModal({
        title: "Thank You",
        message: "Your form as been submitted",
      });
      return;
    } else {
      this.setState(true);
    }
    props.Contact(enteredName, enteredEmail);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredMessage("");
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const modalHandler = () => {
    setShowModal(null);
  };

  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center p-4 bg-balloon bg-cover">
        <form
          onSubmit={contactHandler}
          method="POST"
          action="https://getform.io/f/182419e0-81f1-4e7f-a5f6-ed57b3b52dd9"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pt-[80px] pb-8">
            <p className="text-4xl font-bold inline border-b-4 bdr text-main">
              Contact
            </p>
            <span>
              <FaEnvelope className="inline-flex ml-4 text-4xl text-main" />
            </span>
            <p className="text-main py-4">
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
            value={enteredName}
            onChange={nameChangeHandler}
          />
          <input
            className="my-4 py-2 form-bg"
            type="email"
            placeholder="Email"
            name="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          <textarea
            className="form-bg p-2"
            name="message"
            rows="10"
            placeholder="Message"
            value={enteredMessage}
            onChange={messageChangeHandler}
          ></textarea>

          <button className="con-btn">Submit</button>
        </form>
      </div>
      
      {showModal && (
        <Modal
          title={showModal.title}
          message={showModal.message}
          onShowModal={modalHandler}
        />
      )}
    </div>
  );
};

export default Contact;
