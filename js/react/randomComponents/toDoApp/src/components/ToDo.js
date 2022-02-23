import React, { useState } from "react";

const ToDo = () => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState([]);

  const onChangeHandler = ({ target }) => {
    setValue(target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    setShow((prev) => {
      return value ? [...prev, value] : [...prev];
    });
    setValue("");
  };

  const deleteHandler = (taskIdToRemove) => {
    const updatedShow = show.filter((task, index) => {
      //console.log(task, index, taskIdToRemove);
      return index !== taskIdToRemove;
    });

    setShow(updatedShow);
  };
  return (
    <>
      <h2>Let's do it</h2>
      <form onSubmit={onClickHandler}>
        <input type="text" onChange={onChangeHandler} value={value} />
        <br />
        <input
          type="submit"
          style={{ width: "70px", height: "20px" }}
          label="submit"
          onClick={onClickHandler}
        />
      </form>
      <ul style={{ listStyle: "none" }}>
        {show.map((item, id) => {
          return (
            <li key={id}>
              {/*console.log(id)*/}
              {item}
              <button onClick={() => deleteHandler(id)}>X</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDo;
