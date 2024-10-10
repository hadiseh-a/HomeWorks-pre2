function Pokecard(obj){
    return(
        <div>
            <h2>
                {obj.Poke.name}
            </h2>
            <img src={obj.Poke.image} alt="" />
            <span>Type:{obj.Poke.type}</span>
        </div>
    )
}
export default Pokecard