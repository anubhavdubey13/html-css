import React from "react";
import "./styles.css";

const black = "#000000";
const white = "#FFFFFF";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { bgColor: white, txtColor: black };
    this.darkMode = this.darkMode.bind(this);
  }

  darkMode() {
    const bgChange = this.state.bgColor === white ? black : white;
    const colorChange = this.state.txtColor === black ? white : black;
    this.setState({ bgColor: bgChange, txtColor: colorChange });
  }

  render() {
    return (
      <div
        className="App"
        style={{ background: this.state.bgColor, color: this.state.txtColor }}
      >
        <h1>Dark Mode Component</h1>
        <button
          id="btnDarkMode"
          onClick={this.darkMode}
          style={{
            background: this.state.bgColor,
            color: this.state.txtColor,
            borderColor: this.state.txtColor
          }}
        >
          Mode
        </button>
      </div>
    );
  }
}

export default App;
