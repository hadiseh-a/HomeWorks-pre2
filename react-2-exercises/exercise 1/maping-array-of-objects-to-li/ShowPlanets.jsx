function ShowPlanets({array}){
    return(array.map((planet,index)=><li key={index}>{planet}</li>))
}
export default ShowPlanets