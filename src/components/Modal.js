import React from "react";
import { NavLink } from "react-router-dom";


const Modal = (props) => {
  return (
    <div>
      <div
        className="backdrop"
        onClick={props.onShowModal}
      />
      <div className="modalPos">
        <div className="header">
          <h2>{props.title}</h2>
        </div>
        <div className="content">
          <p className="font-bold">{props.message}</p>
          <div className="actions"></div>
          <button onClick={props.onShowModal} className="modal-btn">
            Back
          </button>
          <button onClick={props.onShowModal} className="modal-btn">
            <NavLink to="/">Home</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
