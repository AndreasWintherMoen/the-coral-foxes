import gameModes from "./gameModes";

const tasks = [
  // {
  //   gameMode: gameModes.kahoot,
  //   pic: "/new.png",
  //   question: "Hvilket alternativ?",
  //   alt1: 10,
  //   alt2: 15,
  //   alt3: 20,
  //   alt4: 25,
  //   answer: 15,
  // },
  // {
  //   gameMode: gameModes.placeMarker,
  //   question: "Hvor er vulkanen",
  //   pic: "/new2.png",
  //   answer: { x: 100, y: 200 },
  // },
  {
    gameMode: gameModes.slider,
    pic1: "/old2.png",
    pic2: "/new2.png",
    question: "Hvor mange dager er det mellom disse bildene?",
    answer: 200,
    min: 0,
    max: 500,
  },
  {
    gameMode: gameModes.funFact,
    pic: "/old2.png",
    fact: "Dette bildet er fra nordsiden av Great Barrier Reef. I løpet av 2016 døde 40% av korallene i dette området! ",
  },
];

export default tasks;
