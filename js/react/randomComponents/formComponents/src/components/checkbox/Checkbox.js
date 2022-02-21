import React from "react";
import PropTypes from "prop-types";
//import cx from "classnames";
import "./Checkbox.css";

class Checkbox extends React.Component {
  render() {
    const { value, label, disabled, checked, name } = this.props;

    return (
      <div>
        <input
          className="checkbox"
          type="checkbox"
          label={label}
          value={value}
          name={name}
          disabled={disabled}
          defaultChecked={checked}
        />
        {label}
      </div>
    );
  }
}

Checkbox.propTypes = {
  value: PropTypes.any,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  name: PropTypes.string.isRequired
};

export default Checkbox;
