import React, { useState } from "react"
import { Sidenav } from "./Components/Sidenav"
import { Home } from "./Components/Home"
import { About } from "./Components/About"
import { Experience } from "./Components/Experience"
import { Services } from "./Components/Services"

export const App = () => {
  return (
    <div className="">
      <Sidenav/>
      <Home/>
      <About/>
      <Experience/>
      <Services/>
    </div>
  )
}
