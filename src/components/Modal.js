import React from "react";

const Modal = (props) => {
 
  return (
    <div>
      <div className="backdrop" onClick={props.onShowModal} />
      <div className="modalPos">
        <div className="header">
          <h2>{props.title}</h2>
        </div>
        <div className="content">
          <p>{props.message}</p>
        </div>
        <div className="actions">
          <button onClick={props.onShowModal} className="hero-btn">
            Exit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal