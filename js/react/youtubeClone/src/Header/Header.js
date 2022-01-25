import React from "react";
import "./Header.css";
// icons
// -- header left
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
// -- header center
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MicSharpIcon from "@mui/icons-material/MicSharp";
// -- header right
import VideoCallSharpIcon from "@mui/icons-material/VideoCallSharp";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";

class Header extends React.Component {
  render() {
    return (
      <header className="theTop">
        <div className="header__left">
          <MenuSharpIcon />
          <img src={require("./images/YouTubeLogo.png")} alt="Logo" />
        </div>
        <div className="header__center">
          <div className="searchBar">
            <input />
            <SearchSharpIcon id="searchIconSearchBar" />
          </div>
          <MicSharpIcon id="micIconSearchBar" />
        </div>
        <div className="header__right">
          <VideoCallSharpIcon />
          <AppsOutlinedIcon />
          <NotificationsNoneOutlinedIcon />
          <AccountCircleSharpIcon />
        </div>
      </header>
    );
  }
}

export default Header;
