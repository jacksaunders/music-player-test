import React, { Component } from "react";
import PlayButton from "./components/PlayButton/PlayButton";

import "./PlayBar.css";

class PlayBar extends Component {
  render() {
    return (
      <div className="PlayBar">
        <div className="PlayBar__song-info">
          {this.props.activeSong.length > 0 ? (
            <div>
              <div className="PlayBar__song-title">
                {this.props.activeSong} -{" "}
                <span className="PlayBar__artist">{this.props.artist}</span>
              </div>
              <div className="songElapsed">
                {this.props.currentTimeElapsed} / {this.props.songLength}
              </div>
            </div>
          ) : null}
        </div>

        <div className="PlayBar__controls">
          <PlayButton {...this.props} />
        </div>
      </div>
    );
  }
}

export default PlayBar;
