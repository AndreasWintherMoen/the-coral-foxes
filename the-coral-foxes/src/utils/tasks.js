import gameModes from "./gameModes";

const tasks = [
  {
    gameMode: gameModes.funFact,
    pic: "/bleaching.jpeg",
    title: "Bleking av korallrev",
    fact: "Skriv inn interessante ting her",
  },
  {
    gameMode: gameModes.slider,
    // pic1: "/Lizard_Island_2021-11-22.jpg",
    // pic2: "/Lizard_Island_2022-01-01.jpg",
    pic1: "/Coral2018.jpg",
    pic2: "/Coral2021.jpg",
    question: "Hvor mange dager er det mellom disse bildene?",
    answer: 968,
    min: 0,
    max: 2000,
  },
  {
    gameMode: gameModes.funFact,
    pic: "/old2.png",
    // dette stemmer ikke
    fact: "Dette bildet er fra nordsiden av Great Barrier Reef. I løpet av 2016 døde 40% av korallene i dette området! ",
  },
  {
    gameMode: gameModes.placeMarker,
    pic: "/Vulcano_RGB.jpg",
    question: "Hvor er vulkanen?",
    answer: { x: 361, y: 269 },
  },
  {
    gameMode: gameModes.funFact,
    pic: "/Vulcano_SWIR.jpg",
    fact: "vulkan fun fact",
  },
  {
    gameMode: gameModes.kahoot,
    pic: "/Vulcano_SWIR.jpg",
    question: "Hvilken fargekanal?",
    alt1: "Ultra Blue (UB)",
    alt2: "Visible Light (RGB)",
    alt3: "Short Wave Infrared (SWIR)",
    alt4: "False colors",
    answer: "Short Wave Infrared (SWIR)",
  },
  {
    gameMode: gameModes.funFact,
    pic: "/Vulcano_SWIR.jpg",
    fact: "IR brukes mye til å estimere fuktighet på jorda ettersom vann absorberer IR stråling.",
  },
  {
    gameMode: gameModes.kahoot,
    pic: "/Fire_Timelapse.gif",
    question: "Hvor lang tid tok det brannen å spre seg i bildet?",
    alt1: "10 dager",
    alt2: "50 dager",
    alt3: "200 dager",
    alt4: "1000 dager",
    answer: "50 dager",
  },
  {
    gameMode: gameModes.kahoot,
    pic: "/Dam_Combined.png",
    question: "Hva er det disse bildene viser?",
    alt1: "Oversvømmelse",
    alt2: "Ulike lysbølge lengder",
    alt3: "Nedskoging",
    alt4: "Oppdemming",
    answer: "Oppdemming",
  },
];

export default tasks;
