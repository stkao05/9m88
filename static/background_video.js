/* eslint-disable */
;(function() {
  function setupYoutube() {
    // loads the IFrame Player API code asynchronously.
    var tag = document.createElement("script")
    tag.src = "https://www.youtube.com/player_api"

    var firstScriptTag = document.getElementsByTagName("script")[0]
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

    var playerElementId = "youtube_player"
    var player

    var videoWidth = 1000
    var videoHeight = 677

    function onYouTubePlayerAPIReady() {
      player = new YT.Player(playerElementId, {
        width: window.innerWidth,
        height: window.innerWidth / (videoWidth / videoHeight),
        videoId: "dimqEPg0NpE",
        playerVars: {
          autoplay: 0,
          autohide: 1,
          loop: 1,
          modestbranding: 1,
          rel: 0,
          showinfo: 0,
          controls: 0,
          disablekb: 1,
          enablejsapi: 1,
          playsinline: 1,
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
      if (event.data == YT.PlayerState.PLAYING) {
        document.querySelector(".video.parallex").classList.add("playing")
      }
    }

    window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady
  }

  function parallex() {
    var containers = document.querySelectorAll(".parallex")
    containers.forEach(_parallex)
  }

  function _parallex(container) {
    var background = container.querySelector(".parallex_background")

    document.onscroll = function() {
      var backgroundRect = background.getBoundingClientRect()
      var containerRect = container.getBoundingClientRect()

      var hiddenLength = backgroundRect.height - containerRect.height
      var totalScrollLength = window.innerHeight + containerRect.height

      // when not visible to the view yet
      if (containerRect.bottom < 0 || containerRect.top > window.innerHeight) {
        return
      }

      var scrollProgress =
        (containerRect.top + containerRect.height) / totalScrollLength

      var delta = (1 - scrollProgress) * hiddenLength
      background.style.top = -1 * delta + "px"
    }
  }

  setTimeout(() => {
    setupYoutube()
    parallex()
  }, 100)
})()
