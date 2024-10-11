function CustomerInformation({ information }) {
  return (
    <div>
      <h1>My name is {information.first_name}</h1>
      <h2>My last name is {information.last_name}</h2>
    </div>
  );
}
export default CustomerInformation;
