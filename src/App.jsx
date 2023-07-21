import React, { useState } from "react"
import { Sidenav } from "./Components/Sidenav"
import { Home } from "./Components/Home"

export const App = () => {
  return (
    <div className="">
      <Sidenav/>
      <Home/>
    </div>
  )
}
