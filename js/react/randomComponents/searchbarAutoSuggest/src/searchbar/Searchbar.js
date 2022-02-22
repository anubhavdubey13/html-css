import React, { useState } from "react";

const Searchbar = ({ requiredData }) => {
  const [val, setVal] = useState("");

  const handleChange = ({ target }) => {
    setVal(target.value);
  };

  return (
    <>
      <h1>Search bar</h1>
      <input type="text" placeholder="Type..." onChange={handleChange} />
      {val
        ? requiredData.map((item) => {
            return item.country_name
              .toLowerCase()
              .includes(val.toLowerCase()) ? (
              <li style={{ listStyle: "none" }} key={item.id}>
                {item.country_name} {item.city_name}
              </li>
            ) : (
              ""
            );
          })
        : null}
    </>
  );
};

export default Searchbar;
