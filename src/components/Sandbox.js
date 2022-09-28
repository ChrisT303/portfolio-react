

import React from "react";

const Modal = (props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded">
        <h2 className="p-1">{props.title}</h2>
      </div>
      <div>
        <p>{props.message}</p>
      </div>
      <div>
        <button className="hero-btn">Home</button>
      </div>
    </div>
  );
};

export default Modal;

.overShadow {
display:none;
  position:fixed;
  width:100%;
  height:100vh;
  background:black;
  opacity: .7;
}
.modalDiv {
display:none;
position:absolute;
left:35%;
top:50%;
  height: 200px;
  background:white;
  width:400px;
  padding:20px;
  border: 4px solid black;
  border-radius:8px;
  opacity: 1;
}

onClick={() => setShowModal(!showModal)}
