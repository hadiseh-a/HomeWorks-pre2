import React from "react";
import ShowPlanets from "./ShowPlanets";
const planets = ["Mars", "Venus", "Jupiter", "Earth", "Saturn", "Neptune"];

/**
 * 1) Create the mapping function and use it to generate a new array of
 * planets in html called planetsInHTML
 */

const planetsInHTML=<><ShowPlanets array={planets}/></>

// 2) Add the array planetsInHTML inside the innerHTML of this <ul>
const Content = (<ul className="list-group m-5">{planetsInHTML}</ul>);
export default Content 