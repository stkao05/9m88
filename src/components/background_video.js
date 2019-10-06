/* eslint-disable */

setTimeout(() => {
  // loads the IFrame Player API code asynchronously.
  var tag = document.createElement("script")
  tag.src = "https://www.youtube.com/player_api"

  var firstScriptTag = document.getElementsByTagName("script")[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)

  const playerElementId = "player"
  let player

  function onYouTubePlayerAPIReady() {
    player = new YT.Player(playerElementId, {
      height: "1690",
      videoId: "dimqEPg0NpE",
      playerVars: {
        autoplay: 0,
        autohide: 1,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        controls: 0,
        disablekb: 1,
        enablejsapi: 1,
        iv_load_policy: 3,
      },
      events: {
        onReady: onPlayerReady,
      },
    })
  }

  function onPlayerReady(event) {
    event.target.playVideo()
    event.target.mute()
  }

  window.onYouTubePlayerAPIReady = onYouTubePlayerAPIReady
  console.log("YT.Player run")

  // debounce
  function throttle(callback, wait, immediate = false) {
    let timeout = null
    let initialCall = true

    return function() {
      const callNow = immediate && initialCall
      const next = () => {
        callback.apply(this, arguments)
        timeout = null
      }

      if (callNow) {
        initialCall = false
        next()
      }

      if (!timeout) {
        timeout = setTimeout(next, wait)
      }
    }
  }

  var anchor = document.getElementById("anchor")
  var shifter = document.getElementById("shifter")

  const videoFullWidth = window.innerWidth
  const videoFullHeight = 0.6625 * window.innerWidth
  const aspectRadio = videoFullWidth / videoFullHeight

  const containerHeight = 0.6 * window.innerHeight
  const hiddenHeight = videoFullHeight - containerHeight

  // parallex scrolling
  document.onscroll = throttle(function() {
    const rect = anchor.getBoundingClientRect()

    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      return
    }

    const progress = rect.top + containerHeight
    const total = window.innerHeight + containerHeight

    const delta = progress / total
    shifter.style.top = -1 * hiddenHeight * delta + "px"
  }, 100)


}, 500)
