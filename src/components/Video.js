import React from "react"
import { Youtube } from "./VideoSources"

export default function Video() {
  return (
    <div className="video parallex">
      <div className="blocking_overlay" />
      <div className="parallex_background">
        <Youtube />
      </div>
    </div>
  )
}
