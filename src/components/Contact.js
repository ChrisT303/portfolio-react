import React, { useState, useRef } from "react";
import { FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Modal from "./Modal";

const Contact = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredMessage, setEnteredMessage] = useState("");

  const contactHandler = (e) => {
    e.preventDefault();

    const sendEmail = () => {
      emailjs
        .sendForm(
          "service_wdafmka",
          "template_hw180ir",
          form.current,
          "5GDPu2_CkMH075_Zo"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };

    if (
      enteredName.trim().length === 0 ||
      enteredEmail.trim().length === 0 ||
      enteredMessage.trim().length === 0
    ) {
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
      sendEmail();
      setEnteredName("");
      setEnteredEmail("");
      setEnteredMessage("");
      return;
    } else {
      this.setState(true);
    }
    props.Contact(enteredName, enteredEmail);
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

  const form = useRef();

  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center p-4 bg-eyes bg-cover bg-center">
        <form
          ref={form}
          onSubmit={contactHandler}
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pt-[80px] pb-8">
            <p className="text-4xl font-bold inline border-b-4 bdr text-white custom-outline">
              Contact
            </p>
            <span>
              <FaEnvelope className="inline-flex ml-4 text-4xl text-white custom-outline" />
            </span>
            <p className=" py-4 text-white custom-outline text-2xl" >
              Please enter your info below and I will be back with you within 24
              hours. You can also email me directly at:
              <a
                href="mailto:chris.t.williams417@gmail.com"
                className="ml-2 font-bold hover:text-[#c28691]"
              >
                chriswillthedev@gmail.com
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

          <button className="con-btn text-white custom-outline">Submit</button>
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
