import React from "react"

const Bandcamp = () => {
  return (
    <iframe
      title="平庸之上 Beyond Mediocrity by 9m88"
      src="https://bandcamp.com/EmbeddedPlayer/album=2420414839/size=large/bgcol=ffffff/linkcol=de270f/minimal=true/transparent=true/"
      seamless
    >
      <a href="http://9m88baba.bandcamp.com/album/beyond-mediocrity">
        平庸之上 Beyond Mediocrity by 9m88
      </a>
    </iframe>
  )
}

const songs = [
  "01 Intro - She Is",
  "02 平庸之上 Beyond Mediocrity",
  "03 最高品質靜悄悄 Airplane Mode",
  "04 Aim High",
  "05 浪費時間 Waste Of Time",
  "06 廚餘戀人 Leftlovers",
  "07 愛情雨 Love Rain",
  "08 九頭身日奈 Nine Head Hinano",
  "09 Inner",
  "10 如果可以 If I Could",
]

export default function Album() {
  return (
    <section className="album invert_background section">
      <h1 className="mobile_show">
        Beyond Mediocrity
        <br />
        <small>平庸之上</small>
      </h1>

      <div className="album_cover">
        <Bandcamp />
      </div>

      <div className="album_info">
        <h1 className="mobile_hide">
          Beyond Mediocrity
          <br />
          <small>平庸之上</small>
        </h1>

        <ul>
          {songs.map(name => {
            return <li>{name}</li>
          })}
        </ul>

        <div className="btn_group">
          <a
            className="btn"
            href="https://geo.music.apple.com/us/album/beyond-mediocrity/1475830733?mt=1&app=music"
          >
            Apple Music →
          </a>
          <a
            className="btn"
            href="https://open.spotify.com/album/4Eo1RocFVm6yPQxRCFMuJO?si=2TpJD8zLQqyJgoNrsQy2Sw"
          >
            Spotify →
          </a>
        </div>
      </div>
    </section>
  )
}
