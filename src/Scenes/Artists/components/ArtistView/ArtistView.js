import React, { Component } from "react";
import AlbumView from "../AlbumView/AlbumView";
import "./ArtistView.css";

class ArtistView extends Component {
  render() {
    return (
      <div className="ArtistView">
        <div className="ArtistView__header">
          <div className="ArtistView__image">
            <img src={this.props.artist.photo} alt="" />
          </div>
          <div className="ArtistView__details">
            <h2>{this.props.artist.name}</h2>
          </div>
        </div>
        <div className="ArtistView__Albums">
          <h3>Albums</h3>
          {this.props.artist.albums.map(album => {
            return (
              <div>
                <AlbumView album={album} {...this.props} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ArtistView;
