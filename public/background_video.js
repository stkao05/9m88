const playerElementId = "player"
let player

function onYouTubeIframeAPIReady() {
  player = new YT.Player(playerElementId, {
    height: "390",
    width: "640",
    videoId: "dimqEPg0NpE",
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange,
    },
  })
}

function onPlayerReady(event) {
  event.target.playVideo()
}

function onPlayerStateChange(event) {
  //if (event.data == YT.PlayerState.PLAYING && !done) {
  //setTimeout(stopVideo, 6000)
  //done = true
  //}
}

window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady

console.log("VALUE")
alert("hi")
