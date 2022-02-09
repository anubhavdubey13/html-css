import React from "react";
import "./Counter.css";

class Counter extends React.Component {
  render() {
    return (
      <div>
        <h2>Number of Characters: {this.props.numChar}</h2>
        <svg>
          <circle id="gray" cx="50%" cy="14%" r="15"></circle>
          <circle
            id="colored"
            cx="50%"
            cy="14%"
            r="15"
            style={this.props.ringStyle}
          ></circle>
        </svg>
      </div>
    );
  }
}

export default Counter;
