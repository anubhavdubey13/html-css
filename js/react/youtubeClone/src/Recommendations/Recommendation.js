import React from "react";
import VideoTile from "./VideoTile";
import "./Recommendation.css";

class Recommendation extends React.Component {
  render() {
    return (
      <div className="Recs">
        <VideoTile />
        <VideoTile />
        <VideoTile />
        <VideoTile />
        <VideoTile />
        <VideoTile />
      </div>
    );
  }
}

export default Recommendation;
