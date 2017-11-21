import React, { Component } from "react";

import ArtistView from "./components/ArtistView/ArtistView";

import "./Artists.css";

import dummySongData from "data/songs.json";

class Playlist extends Component {
  render() {
    return (
      <div className="Artists">
        {dummySongData.map(artist => {
          return (
            <ArtistView key={artist.name} artist={artist} {...this.props} />
          );
        })}
      </div>
    );
  }
}

export default Playlist;
