import { Link } from "react-router-dom";

function Home({ setName }) {
  function getName(e) {
    setName(e.target.value);
  }

  return (
    <div>
      <h1>Card Flip Game</h1>
      <p>your name?</p>
      <label>please enter your name</label>
      <input onChange={getName} type="text" name="username" id="" />
      <Link to="/game">Start </Link>
    </div>
  );
}

export default Home;
