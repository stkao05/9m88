import React from "react"
import "./background_video.js"

export default function Video() {
  return (
    <div className="video">
      <div id="player" />
    </div>
  )
}

const Iframe = () => {
  return (
    <iframe
      id="player"
      frameborder="0"
      allowfullscreen="1"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      title="YouTube video player"
      src="https://youtube.com/embed/dimqEPg0NpE?autoplay=1&controls=0&showinfo=0&autohide=1&autoplay=1&loop=1"
      class="background-video ready"
    />
  )
}
