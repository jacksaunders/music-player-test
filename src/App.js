import React, { Component } from "react";
import "./App.css";
import AppHeader from "./Components/AppHeader/AppHeader";

import PlayBar from "./Components/PlayBar/PlayBar";
import Artists from "./Scenes/Artists/Artists";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songTitle: "",
      songLength: "",
      songTimeElapsed: 0
    };
  }

  /**
   * Sets state of new active song.
   * @param  {objec} song - song object must have title and length properties
   * @param  {string} artist - Name of artist - required
   */
  handleActiveSong = (song, artist) => {
    this.setState(
      {
        songTitle: song.title,
        songLength: song.length,
        songTimeElapsed: 0,
        songPlaying: true,
        songArtist: artist
      },
      () => {
        this.setState({
          songTimeElapsedMMSS: "00:00"
        });
        this.playSong();
      }
    );
  };

  /**
   * Plays Current Song in active state. works for seleting new song and also resuming paused song.
   * @return {[type]} [description]
   */
  playSong = () => {
    var timer;
    clearTimeout(this.timer);
    let timeElapsed = this.state.songTimeElapsed,
      songLength = this.songDurationToSeconds(this.state.songLength);
    this.setState({
      songPlaying: true
    });
    if (timeElapsed < songLength) {
      this.timer = setTimeout(() => {
        timeElapsed++;

        this.setState({
          songTimeElapsed: timeElapsed,
          songTimeElapsedMMSS: this.secondsToSongDuration(timeElapsed)
        });
        this.playSong();
      }, 1000);
    }
  };

  /**
   * Pauses Curent song by stopping setTimeout set in playSong
   * @return {[type]} [description]
   */
  pauseSong = () => {
    clearTimeout(this.timer);
    this.setState({
      songPlaying: false
    });
  };

  /**
   * Converts MM:SS songduration into seconds integer
   * @param  {string} duration MM:SS string of song duration
   * @return {int} Returns Integar in seconds of song duration
   * TODO: Possibly make this handle hours if there are super long songs
   */
  songDurationToSeconds(duration) {
    const times = duration.split(":"),
      timeInSecs = parseInt(times[0] * 60) + parseInt(times[1]);
    return timeInSecs;
  }

  /**
   * Converts number of seconds to song suration string
   * @param  {Integar} seconds seconds as integer eg 3600 being one hour
   * @return {string} Returns String of MM:SS song duration
   * TODO: Possibly make this handle hours if there are super long songs
   */
  secondsToSongDuration(seconds) {
    var minutes = Math.floor(seconds / 60),
      seconds = seconds % 50;

    return ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
  }

  render() {
    return (
      <div className="App">
        <AppHeader />

        {/* App Scenes Go here, where routing would be normally  - Fopr test just has Artists View*/}
        <Artists handleActiveSong={this.handleActiveSong} />

        <PlayBar
          activeSong={this.state.songTitle}
          songLength={this.state.songLength}
          currentTimeElapsed={this.state.songTimeElapsedMMSS}
          songPlaying={this.state.songPlaying}
          playSong={this.playSong}
          pauseSong={this.pauseSong}
          artist={this.state.songArtist}
        />
      </div>
    );
  }
}

export default App;
