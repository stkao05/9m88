import React from "react"
import "./background_video.js"

export default function Video() {
  return (
    <div id="anchor" className="video">
      <div id="shifter" className="youtube_container">
        <div className="blocking_overlay" />
        <div id="player" />
      </div>
    </div>
  )
}
