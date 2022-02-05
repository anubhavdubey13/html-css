import React from "react";
import "./styles.css";
import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="MainSection">
          <Sidebar id="Sidebar" />
          <h2 id="Recommended">Here goes the recommended section</h2>
        </div>
        {/* Header */}
        {/* Sidebar */}
        {/* Main */}
      </div>
    );
  }
}

export default App;
