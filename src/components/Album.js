import React from "react"

const Bandcamp = () => {
  return (
    <iframe
      title="平庸之上 Beyond Mediocrity by 9m88"
      style={{ border: 0, width: "40vw", height: "40vw" }}
      src="https://bandcamp.com/EmbeddedPlayer/album=2420414839/size=large/bgcol=ffffff/linkcol=de270f/minimal=true/transparent=true/"
      seamless
    >
      <a href="http://9m88baba.bandcamp.com/album/beyond-mediocrity">
        平庸之上 Beyond Mediocrity by 9m88
      </a>
    </iframe>
  )
}

export default function Album() {
  return (
    <section className="album">
      <Bandcamp />

      <div className="album_info">
        <h1>Beyond Mediocrity</h1>
        <h2>平庸之上</h2>
      </div>
    </section>
  )
}
