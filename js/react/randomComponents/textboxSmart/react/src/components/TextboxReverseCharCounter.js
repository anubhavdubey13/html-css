import React from "react";

class TextboxReverseCharCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, reverseCount: 240 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var totalChars = e.target.value;
    this.setState({
      count: totalChars.length,
      reverseCount: 240 - this.state.count
    });
  }

  render() {
    return (
      <div>
        <h2 className="textboxHeading">
          I count remaining number of characters
        </h2>
        <textarea onChange={this.handleChange}></textarea>
        <h3>Number of Characters Left: {this.state.reverseCount}</h3>
      </div>
    );
  }
}

export default TextboxReverseCharCounter;
