import React from "react"
import { Youtube } from "./VideoSources"

export default function Video() {
  return (
    <div className="video parallex">
      <script src="./background_video.js"></script>

      <div className="blocking_overlay" />
      <div className="parallex_background">
        <Youtube />
      </div>
    </div>
  )
}
