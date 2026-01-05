function Header() {
  const reactDescription = ["Fundamental", "Crucial", "Core"];

  function getRandomDescription() {
    const randomIndex = Math.floor(Math.random() * reactDescription.length);
    return reactDescription[randomIndex];
  }
  return (
    <header>
      <img src="src/assets/react.svg" alt="React logo" />
      <h1>React Essential - Components</h1>
      <p>
        {getRandomDescription()} React concepts you will need for almost any app
        you are going to build!
      </p>
    </header>
  );
}

export default Header;
