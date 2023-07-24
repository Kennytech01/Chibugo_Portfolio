import React, { useState } from "react"
import { Sidenav } from "./Components/Sidenav"
import { Home } from "./Components/Home"
import { About } from "./Components/About"
import { Experience } from "./Components/Experience"
import { Services } from "./Components/Services"
import { IntroVideo } from "./Components/IntroVideo"
import { Contact } from "./Components/Contact"
import { Footer } from "./Components/Footer"
import { Modal } from "./Components/Modal"

export const App = () => {
  return (
    <div className="">
      <Sidenav/>
      <Home/>
      <About/>
      <Experience/>
      <Services/>
      <IntroVideo/>
      <Contact/>
      <Footer/>
    </div>
  )
}
