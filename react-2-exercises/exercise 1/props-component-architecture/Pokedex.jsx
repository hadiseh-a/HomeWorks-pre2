import Pokecard from "./Pokecard";
function Pokedex(props) {
  return (
    <>
      {props.pokemon.map((prop) => <Pokecard poke={prop}/>)}
    </>
  );
}
export default Pokedex