import React from "react";
import "./button.css";
import PropTypes from "prop-types";
import cz from "classnames";

class Button extends React.Component {
  render() {
    const { disabled, label, variant, size } = this.props;
    const clObj = cz("button", variant, size);
    return (
      <div>
        <button
          className={clObj}
          disabled={disabled}
          variant={variant}
          size={size}
        >
          {label}
        </button>
      </div>
    );
  }
}

Button.PropTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  variant: PropTypes.string,
  size: PropTypes.string
};

Button.defaultProps = {
  disabled: false,
  variant: "",
  size: ""
};

export default Button;
