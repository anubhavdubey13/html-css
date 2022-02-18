import React from "react";

class Dropdown extends React.Component {
  render() {
    const { options } = this.props;
    return (
      <>
        <select>
          {options.map((option) => {
            return <option value={option.value} label={option.label} />;
          })}
        </select>
      </>
    );
  }
}

export default Dropdown;
