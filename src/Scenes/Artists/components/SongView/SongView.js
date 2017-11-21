import React, { Component } from "react";
import "./SongView.css";

class SongView extends Component {
  render() {
    return (
      <table className="SongView">
        <tr>
          <th>Title</th>
          <th className="SongView__length-title">Duration</th>
        </tr>
        {this.props.songs.map(song => {
          return (
            <tr
              className="SongView__song"
              onClick={() =>
                this.props.handleActiveSong(song, this.props.artist.name)
              }
            >
              <td className="SongView__title">{song.title}</td>
              <td className="SongView__length">{song.length}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}

export default SongView;
