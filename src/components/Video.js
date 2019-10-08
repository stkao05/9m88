import React from "react"
import "./background_video.js"
import { Youtube } from "./VideoSources"

export default function Video() {
  //return (
  //<div className="video parallex">
  //<div className="blocking_overlay" />

  //<div className="parallex_background">
  //<img src="./video_bg.jpg" alt="" />
  //</div>
  //</div>
  //)
  return (
    <div className="video parallex">
      <div className="blocking_overlay" />

      <div className="parallex_background">
        <div id="myContainer" />
      </div>
    </div>
  )
}
