import React, { useState } from "react";
import Proptypes from "prop-types";

import "./Accordion.css";

const Accordion = ({ data, title, description }) => {
  const [showDesc, setShowDesc] = useState(null);

  const handleClick = (index) => {
    if (showDesc === index) {
      setShowDesc(null);
    } else {
      setShowDesc(index);
    }
  };

  return (
    <>
      {data.map((item, index) => (
        <div key={index}>
          <h3 onClick={() => handleClick(index)}>
            {item[title]} <span>{showDesc === index ? "-" : "+"}</span>
          </h3>
          <p className={showDesc === index ? "desc-show" : "desc"}>
            {item[description]}
          </p>
        </div>
      ))}
    </>
  );
};

Accordion.propTypes = {
  data: Proptypes.array.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired
};

export default Accordion;
