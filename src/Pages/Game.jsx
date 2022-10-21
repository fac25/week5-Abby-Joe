import { useState, useEffect } from "react";
import "./game.css";

import cover from "../assets/cover_pic.jpg";
import pic_1 from "../assets/pic_1.jpg";
import pic_2 from "../assets/pic_2.jpg";
import pic_3 from "../assets/pic_3.jpg";
import pic_4 from "../assets/pic_4.jpg";
import pic_5 from "../assets/pic_5.jpg";
import pic_6 from "../assets/pic_6.jpg";

const cardImages = [
  { src: { pic_1 }.pic_1 },
  { src: { pic_2 }.pic_2 },
  { src: { pic_3 }.pic_3 },
  { src: { pic_4 }.pic_4 },
  { src: { pic_5 }.pic_5 },
  { src: { pic_6 }.pic_6 },
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
      .map((card) => ({ ...card, id: Math.random(), matched: false, clicked: false }));
    // gives unique id to card
    setCards(allCards);
    setTurns(0);
  };


  //Links the src image and id
  const handleChoice = (card) => {
    firstChoice ? setSecondChoice(card) : setFirstChoice(card)

  };


  useEffect(() => {
    if (firstChoice && secondChoice) {

      if (firstChoice.src === secondChoice.src) {
        // updates status to true
        setCards(prevCards => {
           prevCards.map(card => {
            if (card.src === firstChoice.src) {
              return { ...card, matched: true }
            } else {
              return card
            }

          })
        })
        reset();
      } else {
        setTimeout(() => reset(), 1000);
      }
    }
  }, [firstChoice, secondChoice]);


  const reset = () => {
    setFirstChoice(null);
    setSecondChoice(null);
    console.log("been reset");
  };

  return (
    <div className="game-page">
      <h1>Flip Flip</h1>
      <p>Welcome NameGoesHere... </p>
      <p>Click the button to begin </p>
      <button className="button" onClick={shuffledArray}>
        Play!
      </button>
      <a href="/">Home</a>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <div className={card.clicked = card === firstChoice || card === secondChoice || card.matched ? "flipped" : ""}>
              <img className="back" src={card.src}></img>
              <img
                className="cover"
                src={cover}
                onClick={() => handleChoice(card)}
              ></img>
            </div>
          </div>

        ))}
      </div>

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


// find way to mark card as flipped
// when matched both card stay flipped
// when not match both card unflipped
// when all matched show congratulation
