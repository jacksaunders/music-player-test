import React, { Component } from "react";
import SongView from "../SongView/SongView";
import "./AlbumView.css";

class AlbumView extends Component {
  render() {
    return (
      <div className="AlbumView">
        <h4 className="AlbumView__title">{this.props.album.title}</h4>
        <div className="AlbumView__songs">
          <SongView songs={this.props.album.songs} {...this.props} />
        </div>
      </div>
    );
  }
}

export default AlbumView;
