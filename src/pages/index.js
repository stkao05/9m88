import React from "react"
import Front from "../components/Front.js"
import Album from "../components/Album.js"
import About from "../components/About.js"
import Tour from "../components/Tour.js"
import Video from "../components/Video.js"
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"
import "./index.scss"


//export default () => {
	//return <Video />
//}


export default () => (
  <div>
    <Header />
    <Front />
    <Video />
    <Album />
    <Tour />
    <About />
    <Footer />
  </div>
)
