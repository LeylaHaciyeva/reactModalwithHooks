import React from "react";

const Modal = ({ setOpen, open }) => {
  return (
    <div className="modal-div">
      <div className="modal-item">
        <div className="close-modal">
          <button className="close-btn" onClick={() => setOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="details">
          <p>Add zoom details</p>
          <form>
            <label htmlFor="">Name of live</label>
            <input type="text" placeholder="Hansi dizayn terzini secmeliyik?"/>
            <label htmlFor="">Link</label>
            <input type="text" placeholder="www.zoom.us/348574387"/>
            <label htmlFor="">Password</label>
            <input type="password"/>
            <div className="d-flex justify-content-center ">
            <button className="btn btn-primary done-btn ">Done</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
