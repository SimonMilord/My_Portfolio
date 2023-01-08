import React, { useState } from "react";
import {Link} from "react-router-dom";
import "./bitsList.scss";
import BitItem from "../BitItem/bitItem";
import bits from "../bits";
import BitModal from "../BitModal/bitModal";
let uniqid = require("uniqid");

function BitsList(props) {
  const [bit, setBit] = useState(bits[0]);
  const [vis, setVis] = useState(false);

  const handleClick = (item) => {
    setBit(item);
    setVis((vis) => !vis);
  };

  const closeModal = () => {
    setVis((vis) => !vis);
  };

  return (
    <div className="bits-box">
      <div className="bits">
        <div className="bits-top">
          <h2 className="bits-title">Bits 🤪</h2>
          <h3>Here's some random stuff I've created for fun</h3>
        </div>
        <ul className="bits-list">
          {bits.map((item) => {
            return (
              <li className="bit" key={uniqid()}>
                <BitItem bit={item} handleClick={handleClick} />
              </li>
            );
          })}
        </ul>
      </div>
      <BitModal bit={bit} vis={vis} closeModal={closeModal} />
      <div className="bits-bottom">
        <Link to="/">
          <button className="bits-homebtn">Take me home, country roads!</button>
        </Link>
      </div>
    </div>
  );
}

export default BitsList;
