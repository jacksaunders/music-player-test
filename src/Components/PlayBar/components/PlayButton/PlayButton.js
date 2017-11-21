import React, { Component } from "react";
import SVG from "react-inlinesvg";

import "./PlayButton.css";

class PlayButton extends Component {
  render() {
    return (
      <div
        className="PlayButton"
        onClick={
          this.props.songPlaying === true
            ? this.props.pauseSong
            : this.props.songPlaying === false ? this.props.playSong : null
        }
      >
        {this.props.songPlaying === true ? (
          <SVG src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNzYgNzYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDc2IDc2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZD0iTTI5LjMsNjAuNWMwLDIuOS0yLjMsNS4yLTUuMiw1LjJTMTksNjMuNCwxOSw2MC41di00NWMwLTIuOSwyLjMtNS4yLDUuMi01LjJzNS4yLDIuMyw1LjIsNS4yVjYwLjV6IE01Nyw2MC41YzAsMi45LTIuMyw1LjItNS4yLDUuMnMtNS4yLTIuMy01LjItNS4ydi00NWMwLTIuOSwyLjMtNS4yLDUuMi01LjJzNS4yLDIuMyw1LjIsNS4yVjYwLjV6Ii8+PC9nPjwvc3ZnPg==" />
        ) : (
          <SVG src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNzIgNzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDcyIDcyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PHBhdGggZD0iTTYyLjcsMzEuMUwxOS42LDYuNmMtMS42LTAuOS0zLjItMC45LTQuNiwwcy0yLjEsMi41LTIuMSw0djQ5LjJjMCwxLjYsMC45LDMuMiwyLjEsNGMwLjcsMC40LDEuNiwwLjcsMi41LDAuN3MxLjYtMC40LDIuMS0wLjdsNDMuMS0yNC41YzEuNi0wLjksMi41LTIuNSwyLjUtNEM2NS4xLDMzLjgsNjQuMiwzMi4yLDYyLjcsMzEuMXogTTIyLjIsNTEuOFYxOC41bDI5LjMsMTYuNkwyMi4yLDUxLjh6Ii8+PC9zdmc+" />
        )}
      </div>
    );
  }
}

export default PlayButton;
