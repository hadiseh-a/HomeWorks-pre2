import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "../1-counter/Counter";
import ToggleTheme from "../2-toggle-theme/ToggleTheme";
import "../2-toggle-theme/app.css"
function App() {
  const [isDarkTheme,setDarkTheme]=useState(".light-theme")
  function changeTheme(){
   
      setDarkTheme(!isDarkTheme)
  
  }

  return (
    <>
    <Counter/>
      {/* <ToggleTheme handleClick={changeTheme}/> */}
    </>
  );
}

export default App;
