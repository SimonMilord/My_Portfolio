import React from "react";
import "./bitItem.scss";

function BitItem(props) {
  const { bit, handleClick } = props;

  return (
    <div className="projectcard">
      <div className="projectcard__top">
        <h3 className="projectcard__name" onClick={() => handleClick(bit)}>
          {bit.getName()}
        </h3>
        <span className="projectcard__year">{bit.getYear()}</span>
      </div>
      <img
        className="projectcard__img"
        src={bit.getImg()}
        alt="Project Screenshot"
        onClick={() => handleClick(bit)}
      />
      <div className="projectcard__bottom">
        <a
          className="projectcard__link projectcard__link--demo"
          href={bit.getDemo()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
        <a
          className="projectcard__link"
          href={bit.getCode()}
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      </div>
    </div>
  );
}

export default BitItem;
