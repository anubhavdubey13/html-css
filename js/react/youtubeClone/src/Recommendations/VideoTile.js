import { Avatar } from "@mui/material";
import React from "react";
import "./Recommendation.css";

class VideoTile extends React.Component {
  render() {

    return (
      <div className="videoTile">
        <img
          id="thumbnail"
          src="https://i.ytimg.com/vi/GDa8kZLNhJ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDajzwq7NMjyUDoUgG7l_KhT2LixQ"
          alt="Thumbnail"
        />
        <div className="description">
          <Avatar src="https://i.ytimg.com/vi/GDa8kZLNhJ4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDajzwq7NMjyUDoUgG7l_KhT2LixQ" />
          <div className="title">
            <h4>The video title comes here</h4>
            <p>Video by</p>
            <p> Total Views | Uploaded on </p>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoTile;
