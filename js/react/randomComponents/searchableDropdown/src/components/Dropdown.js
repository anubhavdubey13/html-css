import React from "react";

class Dropdown extends React.Component {
  render() {
    const { options, multiple } = this.props;
    return (
      <>
        <select multiple={multiple} size="1">
          {options.map((option) => {
            return <option value={option.value} label={option.label} />;
          })}
        </select>
      </>
    );
  }
}

export default Dropdown;
