import React from "react";
import "./styles.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import Recommendation from "./Recommendations/Recommendation";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="MainSection">
          <Sidebar id="Sidebar" />
          <Recommendation id="Recommended" />
        </div>
      </div>
    );
  }
}

export default App;
