import { useState, useEffect } from "react";
import pic_1 from "/public/pic_1.jpg";

const cardImages = [
  { src: { pic_1 }.pic_1 },
  { src: "public/pic_3.jpg" },
  { src: "public/pic_2.jpg" },
  { src: "public/pic_4.jpg" },
  { src: "public/pic_5.jpg" },
  { src: "public/pic_6.jpg" },
];

function Game() {
  // double from 6 to 12 cards
  //Why
  // const allCards = [...cardImages, ...cardImages];

  //create use state to update
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [firstChoice, setFirstChoice] = useState(null);
  const [secondChoice, setSecondChoice] = useState(null);

  // Function to shuffle array of cards
  const shuffledArray = () => {
    const allCards = [...cardImages, ...cardImages]
      .sort(() => 0.5 - Math.random())
      .map((card) => ({ ...card, id: Math.random(), flipped: false }));
    // gives unique id to card
    setCards(allCards);
    setTurns(0);
  };

  //Links the src image and id
  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card);
  };

  // find way to mark card as flipped
  // when matched both card stay flipped
  // when not match both card unflipped
  // when all matched show congratulation

  useEffect(() => {
    if (firstChoice && secondChoice) {
      console.log("two things clicked");

      reset();
      if (firstChoice === secondChoice) {
        console.log("it's a match");
      } else {
        console.log("wrong");
      }
    }
  }, [firstChoice, secondChoice]);

  const reset = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    console.log("been reset");
  };
  return (
    <div>
      <h1>Flip Flip</h1>
      <p>Welcome NameGoesHere... </p>
      <p>Click the button to begin </p>
      <button className="button" onClick={shuffledArray}>
        Play!
      </button>
      {cards.map((card) => (
        <div key={card.id}>
          <div>
            <img className="back" src={card.src}></img>
            <img
              className="cover_img"
              src="public/cover_pic.jpg"
              onClick={() => handleChoice(card.src)}
            ></img>
          </div>
        </div>
      ))}
      <a href="/">Home</a>
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
