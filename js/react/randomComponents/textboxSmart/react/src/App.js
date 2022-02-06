import React from "react";
import TextboxCharCounter from "./components/TextboxCharCounter";
import TextboxReverseCharCounter from "./components/TextboxReverseCharCounter";
import SmartTextBox from "./components/SmartTextBox";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, Peter</h1>
        {
          //<TextboxCharCounter className="tcc" />
          //<TextboxReverseCharCounter className="trcc" />
        }
        <SmartTextBox className="st" />
      </div>
    );
  }
}

export default App;
