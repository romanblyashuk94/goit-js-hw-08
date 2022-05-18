import Player from "@vimeo/player";
import throttle from "lodash.throttle";

const player = new Player("vimeo-player");

populizeVideoplayerCurrentTime();

player.on("timeupdate", throttle(onPlaying, 1000));

function populizeVideoplayerCurrentTime() {
  if (localStorage.getItem("videoplayer-current-time")) {
    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"));
  }
}

function onPlaying(e) {
  localStorage.setItem("videoplayer-current-time", e.seconds);
}
