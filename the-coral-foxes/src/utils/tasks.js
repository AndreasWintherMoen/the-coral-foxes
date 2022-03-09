import gameModes from "./gameModes";

const tasks = [
  {
    gameMode: gameModes.funFact,
    pic: "/bleaching.jpeg",
    title: "Bleking av korallrev",
    fact: "29% av Great Barrier Reef er tapt pga klimaendringer. Enkelte rev over 90% tapt.",
  },
  {
    gameMode: gameModes.slider,
    // pic1: "/Lizard_Island_2021-11-22.jpg",
    // pic2: "/Lizard_Island_2022-01-01.jpg",
    pic1: "/Coral-4.8.2021.jpg",
    pic2: "/Coral-17.12.2021.jpg",
    question: "Hvor mange dager er det mellom disse bildene?",
    answer: 135,
    min: 0,
    max: 1000,
  },
  {
    gameMode: gameModes.funFact,
    pic: "/Coral-17.12.2021.jpg",
    // dette stemmer ikke
    fact: "Dette bildet er fra nordsiden av Great Barrier Reef. I løpet av 2016 døde 30% av korallene i dette området! ",
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
    fact:
      "Dette er vulkanutbruddet i 2021 på Fagradalsfjall på Island rett utenfor Reykjavik. " +
      "Dette regnes som et liteutbrudd med en sprekk på 500-1000m. " +
      "På bildet over har vi forandret fargekanalen slik at det er lettere å detektere vulkanen.",
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
    fact: "SWIR brukes mye til å estimere fuktighet på jorda ettersom vann absorberer IR stråling.",
  },
  {
    gameMode: gameModes.kahoot,
    pic: "/Fire-Timelaps2.gif",
    question: "Hvor lang tid tok det brannen å spre seg i bildet?",
    alt1: "20 dager",
    alt2: "50 dager",
    alt3: "100 dager",
    alt4: "200 dager",
    answer: "50 dager",
  },
  {
    gameMode: gameModes.funFact,
    pic: "/Fire-Timelaps2.gif",
    fact: "Totalt brant omtrent 300 000 km2 skog ned. Det er ca 878 Trondheimer!",
  },
  {
    gameMode: gameModes.sliderkahoot,
    pic1: "/Dam_pre.jpg",
    pic2: "/Dam_post.jpg",
    question: "Hva er det disse bildene viser?",
    alt1: "Oversvømmelse",
    alt2: "Ulike lysbølge lengder",
    alt3: "Avskoging",
    alt4: "Oppdemming",
    answer: "Oppdemming",
  },
  {
    gameMode: gameModes.funFact,
    pic: "/Dam_post.jpg",
    fact:
      "Forskjellen på disse bildene er 2 år, fra 2019-2021. Demningen startet å fylles opp i july 2020," +
      " og er planlagt å bli fylt opp i 4-7 år. Den ble brukt til vannkraft for første gang 20. feb 2022.",
  },
  {
    gameMode: gameModes.sliderkahoot,
    pic1: "/Tsunami_pre.jpg",
    pic2: "/Tsunami_post.jpg",
    question: "Hva er det disse bildene viser?",
    alt1: "Tsunami",
    alt2: "Avskoging",
    alt3: "Skogbrann",
    alt4: "Jordskred",
    answer: "Tsunami",
  },
  {
    gameMode: gameModes.funFact,
    pic: "/Tsunami_pre.jpg",
    fact: "Veien videre: Multiplayer? Highscore. Fikse scaling issues på nettsiden. Lage flere oppgaver.",
  },
];

export default tasks;
