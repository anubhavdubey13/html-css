import React from "react";
import "./Comps.css";

const Paginate = ({ totalPosts, postsPerPage, paginate }) => {
  const pageNums = [];
  for (var i = 0; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNums.push(i + 1);
  }
  return (
    <ul style={{ listStyle: "none" }} className="paginate">
      {pageNums.map((pN) => (
        <li key={pN} id="nums">
          <a href="!#" onClick={() => paginate(pN)}>
            {pN}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Paginate;
