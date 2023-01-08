import React, { useEffect } from "react";
import "./projectModal.scss";

function ProjectModal(props) {
  const { project, vis, closeModal } = props;

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
            src={project.getImg()}
            className="modal__img"
            alt="project screenshot"
          />
        </div>
        <div className="modal__content">
          <h1 className="modal__title">{project.getName()}</h1>
          <p className="modal__desc">{project.getDesc()}</p>
          <div className="modal__links">
            <a
              href={project.getDemo()}
              className="modal__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check it live!
            </a>
            <a
              href={project.getCode()}
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

export default ProjectModal;
