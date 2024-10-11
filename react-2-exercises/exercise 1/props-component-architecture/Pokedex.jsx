import Pokecard from "./Pokecard";
function Pokedex({pokemon}) {
  return (
    <div>
      <h1 style={{color:"GrayText"}}>Pokedex</h1>
      <div style={{display:"flex",gap:"1rem",flexWrap:"wrap"}}>
      {pokemon.map((prop) => <Pokecard poke={prop}/>)}
    </div>
    </div>
  );
}
export default Pokedex