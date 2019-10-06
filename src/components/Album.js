import React from "react"

export default function Album() {
  return (
    <section className="album">
      <div className="album_cover">
        <iframe
          style={{ border: 0, width: "40vw", height: "40vw" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2420414839/size=large/bgcol=ffffff/linkcol=de270f/minimal=true/transparent=true/"
          seamless
        >
          <a href="http://9m88baba.bandcamp.com/album/beyond-mediocrity">
            平庸之上 Beyond Mediocrity by 9m88
          </a>
        </iframe>
      </div>

      <div className="album_info">
        <h1>Beyond Mediocrity</h1>
        <h2>平庸之上</h2>
      </div>
    </section>
  )
}
