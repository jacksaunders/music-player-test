This project was bootstrapped with
[Create React App](https://github.com/facebookincubator/create-react-app).

## Music Player Test

[View on GitHub Pages](https://jacksaunders.github.io/music-player-test/).

### Key Points

* As task was mainly based around UX, React was chosen as it allows for tight
  control and coupling of UX elements with their styles and functionality.
* [create react app](https://github.com/facebookincubator/create-react-app) was
  chosen to bootstrap the project as allows for rapid setting up of react
  applications which is ideal for prototyping
* BEM sytax was used as works well with the react components organisationtional
  structure.
* Split JSX into components (reusable modules) and Scenes (pages) as makes
  refactoring and adding new React Components much easier for other devs
* All State is manages by React. For speed i have put all functionality into
  `App.js` on the source folder. If i had more time i would likely make a HOC
  which handled the logic to be a bit more obvious.
* Song data comes from hardcoded data set in `/src/data/songs.json` which i got
  from [here](https://gist.github.com/jasonbaldridge/2668632)
* Curently only tested in chrome

### Things i would change if i had more time.

* Ability to actually play song
* Spent most of the time on the JS, if i had more time i would make the SASS
  more extendable and utalise variables and mixins more for future development.
* Would make it responsive, currently just a desktop player but would benefit
  from working on mobiles too for not too much effort.
* Currently play time is only calculated with Minutes and seconds. I would add
  the option for hours in case of longer songs as well as control Play / Pause
  via milliseconds to make it more accurate.
* Browser testing
