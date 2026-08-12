import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import Main from "./Main.jsx";
import Header from './Header.jsx'

function App(){
  const result = React.useState("Hello")
  console.log(result[0])

  return(
    <>
      <Header />
      <Main />
    </>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<App />)