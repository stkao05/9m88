import React from "react"
import Logo from "./Logo"

export default function Header() {
  return (
    <div className="site_header invert_background">
      <nav>
        <Logo />

        <div className="left link_group">
          <a href="">Album</a>
          <a href="">Tour</a>
        </div>
        <div className="right link_group">
          <a href="">Shop</a>
          <a href="">About</a>
        </div>
      </nav>
    </div>
  )
}
