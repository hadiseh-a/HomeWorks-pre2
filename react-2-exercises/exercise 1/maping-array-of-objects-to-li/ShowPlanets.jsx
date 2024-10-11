function ShowPlanets({ array }) {
  return (
    <ul className="list-group m-5">
      {array.map((planet, index) => (
        <li key={index}>{planet}</li>
      ))}
    </ul>
  );
}
export default ShowPlanets;
