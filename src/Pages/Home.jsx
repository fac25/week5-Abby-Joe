import { Link } from "react-router-dom";

function Home({ setName }) {
  function getName(e) {     
    setName(e.target.value);
    }  
  

  return (
    <div className="home-container">
      <h1>Card Flip Game</h1>
      <label>Please enter your name!</label>
      <input onChange={getName} type="text" name="username" placeholder="name..."/>
      <Link to="/game">Let's Play</Link>
    </div>
  );
}
export default Home;
