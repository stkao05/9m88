import React from "react"

export const Youtube = props => {
  return <div id="youtube_player" class="video_player" />
}

export const Vimeo = props => {
  return (
    <iframe
      {...props}
      src="https://player.vimeo.com/video/193197038?background=1&autoplay=1&loop=1&byline=0&title=0"
      frameborder="0"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
    />
  )
}

const Iframe = () => {
  return (
    <iframe
      id="player"
      frameborder="0"
      allowfullscreen="1"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      title="YouTube video player"
      src="https://youtube.com/embed/dimqEPg0NpE?autoplay=1&controls=0&showinfo=0&autohide=1&autoplay=1&loop=1"
      class="background-video ready"
    />
  )
}

const DirectVideo = () => {
  return (
    <div class="video parallex">
      <div class="blocking_overlay" />
      <div class="parallex_background">
        <video class="direct_video" autoplay="1" loop muted playsinline="1">
          <source src="./aim_high.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}
