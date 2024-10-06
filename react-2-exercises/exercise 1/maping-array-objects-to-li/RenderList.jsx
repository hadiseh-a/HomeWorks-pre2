function RenderList() {
  const animals = [
    { label: "Horse" },
    { label: "Turtle" },
    { label: "Elephant" },
    { label: "Monkey" },
  ];
  return (
    <ul>
      {animals.map((animal, index) => (
        <li key={index}>{animal.label}</li>
      ))}
    </ul>
  );
}
export default RenderList;
