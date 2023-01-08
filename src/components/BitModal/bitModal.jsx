import React, { useEffect } from "react";
import "./bitModal.scss";

function BitModal(props) {
  const { bit, vis, closeModal } = props;

  useEffect(() => {
    const modal = document.querySelector(".modal-container");
    const body = document.querySelector("body");
    modal.style.display = vis === true ? "block" : "none";
    body.style.overflowY = vis === true ? "hidden" : "scroll";
  });

  return (
    <div className="modal-container" onClick={closeModal}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <div className="modal__btn-box">
          <button id="modal__closeBtn" onClick={closeModal}>
            X
          </button>
        </div>
        <div className="modal__imgBox">
          <img
            src={bit.getImg()}
            className="modal__img"
            alt="bit screenshot"
          />
        </div>
        <div className="modal__content">
          <h1 className="modal__title">{bit.getName()}</h1>
          <p className="modal__desc">{bit.getDesc()}</p>
          <div className="modal__links">
            <a
              href={bit.getDemo()}
              className="modal__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check it live!
            </a>
            <a
              href={bit.getCode()}
              className="modal__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BitModal;
