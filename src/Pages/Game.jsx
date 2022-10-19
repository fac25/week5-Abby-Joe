import { useState } from "react";

const cardImages = [
  { src: "/src/assets/pic_1.jpg" },
  { src: "/src/assets/pic_2.jpg" },
  { src: "/src/assets/pic_3.jpg" },
  { src: "/src/assets/pic_4.jpg" },
  { src: "/src/assets/pic_5.jpg" },
  { src: "/src/assets/pic_6.jpg" },
];

function Game() {
  // double from 6 to 12 cards
  const allCards = [...cardImages, ...cardImages];

  //create use state to update
  const [cards, setCards] = useState([]);

  // Function to shuffle array of cards
  const shuffledArray = () => {
    allCards.sort(() => 0.5 - Math.random());
    setCards(allCards);
  };

  return (
    <div>
      <p>Welcome Joe</p>
      <p>This is the games page</p>
      <p>This is where all the game info will be</p>
      {cards.map((card) => (
        <img src={card.src}></img>
      ))}
      <a href="/">back home</a>
      <button onClick={shuffledArray}>Shuffle</button>;
    </div>
  );
}

export default Game;

//Prepare picture to render * 6 (same size)--**stretch import from API
//need a cover picture

//create a array with [...pic, ...pic]

//we need to randomise the array (.sort(Math.random-0.5)) shuffle()
//loop through pic array display images on screen

// we need to add an onclick event Listener on each cover images and
// ClickOne and ClickTwo we compare both if CLickOne and ClickTwo is matched then leave them flipped.

//
