import React from "react"
import Logo from "./Logo"

export default function Front() {
  return (
    <div className="front">
      <div className="cover">
        <span className="title en">Beyond Mediocrity</span>
        <span className="title zh">平庸之上</span>

        <img src="./images/cover.png" alt="" />
      </div>

      <img
        className="background"
        src="./images/background.jpg"
        alt="background"
      />
    </div>
  )
}
