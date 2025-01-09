export default function Search() {
  function handleChange(event) {
    console.log(event);

    console.log("Du skrev:", event.target.value);
  }

  return (
    <>
      <label htmlFor="search">Search: </label>
      <input id="search" onChange={handleChange} type="text" />
    </>
  );
}
