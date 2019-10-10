import React from "react"
import "./background_video.js"
import { Youtube } from "./VideoSources"

export default function Video() {
  return (
    <div className="video parallex">
      <div className="blocking_overlay" />

      <div className="parallex_background">
        <video className="direct_video" autoplay="1" loop muted playsinline>
          <source src="./aim_high.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
  //return (
  //<div className="video parallex">
  //<div className="blocking_overlay" />

  //<div className="parallex_background">
  //<Youtube />
  //</div>
  //</div>
  //)
}
