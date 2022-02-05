import React from "react";
import "./Sidebar.css";
import SidebarRows from "./SidebarRows";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import SubscriptionsOutlinedIcon from "@mui/icons-material/SubscriptionsOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import HistoryOutlinedIcon from "@mui/icons-material/HistoryOutlined";

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <div className="Sidebar__Items">
          <SidebarRows icons={<HomeOutlinedIcon />} text="Home" />
          <SidebarRows icons={<ExploreOutlinedIcon />} text="Explore" />
          <SidebarRows
            icons={<SubscriptionsOutlinedIcon />}
            text="Subscriptions"
          />
          <hr />
          <SidebarRows icons={<VideoLibraryOutlinedIcon />} text="Library" />
          <SidebarRows icons={<HistoryOutlinedIcon />} text="History" />
          <hr />
        </div>
      </div>
    );
  }
}

export default Sidebar;
