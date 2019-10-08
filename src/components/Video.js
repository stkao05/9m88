import React from "react"
import "./background_video.js"
import { Vimeo } from "./VideoOther"

export default function Video() {
  //return (
  //<div id="anchor" className="video">
  //<Vimeo />
  //<div id="shifter" className="youtube_container">
  //<div className="blocking_overlay" />
  //<div id="player" />
  //</div>
  //</div>
  //)
  return (
    <div className="video parallex">
      <div className="blocking_overlay" />

      <div className="parallex_background">
        <img src="./video_bg.jpg" alt="" />
      </div>
    </div>
  )
}
