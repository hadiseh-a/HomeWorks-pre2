import Pokecard from "./Pokecard";
function Pokedex({pokemon}) {
  return (
    <div>
      <h1 style={{color:"GrayText"}}>Pokedex</h1>
      <div style={{display:"flex",gap:"6rem",flexWrap:"wrap",justifyContent:"center"}}>
      {pokemon.map((prop) => <Pokecard poke={prop}/>)}
    </div>
    </div>
  );
}
export default Pokedex