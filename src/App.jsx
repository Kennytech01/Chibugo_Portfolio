import React, { useState } from "react"
import { Sidenav } from "./Components/Sidenav"
import { Home } from "./Components/Home"
import { About } from "./Components/About"

export const App = () => {
  return (
    <div className="">
      <Sidenav/>
      <Home/>
      <About/>
    </div>
  )
}
