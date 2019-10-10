const React = require("react")

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <script type="text/javascript" src="./background_video.js" />,
  ])
}
