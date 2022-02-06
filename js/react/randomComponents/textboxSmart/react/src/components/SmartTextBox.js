import React from "react";

class SmartTextBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, reverseCount: 240, text: "", submit: false };
    this.handleChange = this.handleChange.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.textboxClickHandler = this.textboxClickHandler.bind(this);
  }

  handleChange(e) {
    var totalChars = e.target.value;
    this.setState({
      count: totalChars.length,
      reverseCount: 240 - this.state.count,
      text: totalChars
    });
  }

  buttonClickHandler() {
    if (this.state.reverseCount > 0) {
      this.setState({
        submit: true
      });
    }
  }

  textboxClickHandler() {
    this.setState({
      submit: false,
      text: "",
      reverseCount: 240
    });
  }

  render() {
    return (
      <div>
        <h2 className="textboxHeading">I am a Smart Textbox</h2>
        <textarea
          value={this.state.text}
          onChange={this.handleChange}
          onClick={this.textboxClickHandler}
        />
        <br />
        <button
          disabled={
            this.state.reverseCount === 240 || this.state.reverseCount < 0
          }
          onClick={this.buttonClickHandler}
        >
          Submit
        </button>
        <h3>Number of Characters Left: {this.state.reverseCount}</h3>
        <textarea disabled value={this.state.submit ? this.state.text : null} />
      </div>
    );
  }
}

export default SmartTextBox;

/* issues: 
1. clear the input box after submit click
2. no submit at 0 char
3. no submit after 20 char
4. proper refreshing of char limit
*/
