import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Alert from "../exercise 1/alert-component/Alert";
import Card from "../exercise 1/building-a-layout/Card";
import "./App.css";
import RenderList from "../exercise 1/maping-array-objects-to-li/RenderList";
import Content from "../exercise 1/maping-array-of-objects-to-li/app";
import Pokedex from "../exercise 1/props-component-architecture/Pokedex";
import CustomerInformation from "../exercise 1/rendering-from-objects/CustomerInformation";
const pokemon= [
    {
      id: 1,
      name: "Charmander",
      type: "fire",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    },
    {
      id: 2,
      name: "Squirtle",
      type: "water",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    },
    {
      id: 3,
      name: "Butterfree",
      type: "flying",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    },
    {
      id: 4,
      name: "Rattata",
      type: "normal",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    },
    {
      id: 5,
      name: "Metapod",
      type: "bug",
      image:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    },
  ];
  const customer = {
    first_name: "Bob",
    last_name: "Dylan",
  };
function App() {
  return (
    <>
      {/* exercise1 */}
      {/* <Alert text="OMG! Something really bad has happened!" /> */}
      {/* exercise2 */}
      {/* <Card/> */}
      {/* exercise3 */}
      {/* <RenderList /> */}
      {/* exercise4 */}
      {/* <Content/> */}
      {/* exercise5 */}
      {/* <Pokedex pokemon={pokemon}/> */}
      {/* exercise6 */}
      <CustomerInformation information={customer}/>
    </>
  );
}

export default App;
