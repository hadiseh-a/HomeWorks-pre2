import { useState } from "react";

function ToggleTheme({ handleClick }) {
  const [toggle, setToggle] = useState(false);
  function handleClick() {
    setToggle(!toggle);
    toggle
      ? (document.body.className = "light-theme")
      : (document.body.className = "dark-theme");
  }
  return <button onClick={handleClick}>Chage Themes</button>;
}
export default ToggleTheme;
