import React from "react";

class TextboxCharCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    var totalChars = e.target.value;
    this.setState({
      count: totalChars.length
    });
  }

  render() {
    return (
      <div>
        <h2 className="textboxHeading">I count number of characters</h2>
        <textarea onChange={this.handleChange}></textarea>
        <h3>Number of Characters: {this.state.count}</h3>
      </div>
    );
  }
}

export default TextboxCharCounter;
