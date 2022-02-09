import "./styles.css";
import Counter from "./components/Counter";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numChar: 0,
      ringStyle: {
        stroke: "",
        strokeDasharray: ""
      }
    };
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.styleRing = this.styleRing.bind(this);
  }

  styleRing() {
    var r = 15;
    var circleLength = 2 * Math.PI * r;
    var twitterBlue = "rgb(29,161,242)";

    var colored = (circleLength * this.state.numChar) / 280;
    var gray = circleLength - colored;

    this.setState((state) => ({
      ringStyle: {
        stroke:
          280 - state.numChar <= 0
            ? "red"
            : 280 - state.numChar <= 20
            ? "orange"
            : twitterBlue,
        strokeDasharray: `${colored} ${gray}`
      }
    }));
  }

  inputChangeHandler(e) {
    this.setState({
      numChar: e.target.value.length
    });
    this.styleRing();
  }

  render() {
    return (
      <div className="App">
        <h1>Twitter Text Ring</h1>
        <textarea id="textInput" onChange={this.inputChangeHandler} />
        <Counter
          numChar={this.state.numChar}
          ringStyle={this.state.ringStyle}
        />
      </div>
    );
  }
}

export default App;
