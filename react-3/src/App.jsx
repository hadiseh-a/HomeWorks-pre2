import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter from "../1-counter/Counter";
import ToggleTheme from "../2-toggle-theme/ToggleTheme";
import "../2-toggle-theme/app.css";
import LikeAndDeslikeButtons from "../3-likeAndDeslike/LikeAndDeslikeButtons";
function App() {

  return (
    <>
      {/* exercise1 */}
      {/* <Counter/> */}
      {/* exercise2 */}
      {/* <ToggleTheme /> */}
      {/* exercise3 */}
      <LikeAndDeslikeButtons/>
    </>
  );
}

export default App;
