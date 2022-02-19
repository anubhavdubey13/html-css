import React from "react";
import PropTypes from "prop-types";
import "./InputNew.css";

class InputNew extends React.Component {
  render() {
    const {
      name,
      type,
      label,
      placeholder,
      helpertext,
      required,
      readOnly,
      maxLength
    } = this.props;
    return (
      <div className="inputComp">
        {label ? label : null}
        <br />
        <input
          name={name}
          type={type}
          label={label}
          placeholder={placeholder}
          helpertext={helpertext}
          required={required}
          readOnly={readOnly}
          maxLength={maxLength}
        />
        <br />
        {helpertext ? helpertext : null}
      </div>
    );
  }
}

InputNew.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "number", "email", "date"]).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  helpertext: PropTypes.string,
  required: PropTypes.bool,
  readOnly: PropTypes.bool,
  maxLength: PropTypes.number
};

InputNew.defaultProps = {
  label: null,
  helpertext: null,
  required: false,
  readOnly: false,
  maxLength: 200
};

export default InputNew;
