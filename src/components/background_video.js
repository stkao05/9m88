/* eslint-disable */

// loads the IFrame Player API code asynchronously.
var tag = document.createElement("script")
tag.src = "https://www.youtube.com/player_api"

var firstScriptTag = document.getElementsByTagName("script")[0]
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

const playerElementId = "player"
let player

function onYouTubePlayerAPIReady() {




  player = new YT.Player(playerElementId, {
    height: "390",
    width: "800",
    videoId: "dimqEPg0NpE",
    playerVars: {
      autoplay: 0,
      autohide: 1,
      modestbranding: 0,
      rel: 0,
      showinfo: 0,
      controls: 0,
      disablekb: 1,
      enablejsapi: 0,
      iv_load_policy: 3,
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  })
}

function onPlayerReady(event) {
  event.target.playVideo()
  event.target.mute()
}

function onPlayerStateChange(event) {
  //if (event.data == YT.PlayerState.PLAYING && !done) {
  //setTimeout(stopVideo, 6000)
  //done = true
  //}
}

window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady
console.log("YT.Player run")
