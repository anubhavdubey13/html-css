import React from "react";
import "./Sidebar.css";

class SidebarRows extends React.Component {
  render() {
    return (
      <div className="Sidebar__Rows">
        <span id="Sidebar__Icons">{this.props.icons}</span>
        <span id="Sidebar__Text">{this.props.text}</span>
      </div>
    );
  }
}

export default SidebarRows;
