function Pokecard({ poke }) {
  return (
    <div style={{display:"flex",flexDirection:"column",justifyContent:"space-around", backgroundColor: "gray",borderRadius:10,padding:50 ,fontSize:"larger"}}>
      <h2 style={{ color: "blue" }}>{poke.name}</h2>
      <img src={poke.image} alt=""/>
      <span style={{color:"black"}}>Type: {poke.type}</span>
    </div>
  );
}
export default Pokecard;
