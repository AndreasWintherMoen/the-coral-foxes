import gameModes from "./gameModes";

const tasks = [
  {
    gameMode: gameModes.funFact,
    title: "Dommedagsquizen",
    fact: "Denne quizen er laget i formål om å informere om faremomenter rundt om kring i verden " +
          "og hvordan man kan bruke satelitter til informasjon og prevensjon av de. " +
          "Det er ikke tidspress på quizen så gjerne ta deg tiden til å lese over og tenke på spørsmålene før du svarer.",
  },
  {
    gameMode: gameModes.funFact,
    pic: "/bleaching.jpeg",
    title: "Bleking av korallrev",
    fact: "29% av Great Barrier Reef er tapt pga klimaendringer. Enkelte rev over 90% tapt.",
  },
  {
    gameMode: gameModes.slider,
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
    fact: "Ved bruk av bildeprosessering kan man gjøre det lettere å oppdage forskjellene mellom bildene. " + 
          "Deretter kan man trene opp en maskinlærings algoritme til å oppdage blekning av korallene.",
  },
  {
    gameMode: gameModes.funFact,
    pic: "/Vulcano_RGB.jpg",
    title: "Deteksjon av vulkanutbrudd",
    fact: "På dette bildet gjemmer det seg et vulkanutbrudd. " +
          "Dette er vulkanutbruddet i 2021 på Fagradalsfjall på Island rett utenfor Reykjavik, " +
          "og regnes som et liteutbrudd med en sprekk på 500-1000m.",
  },
  {
    gameMode: gameModes.placeMarker,
    pic: "/Vulcano_RGB.jpg",
    question: "Klarer du finne vulkanen? (trykk på bildet der du tror vulkanen er)",
    answer: { x: 361, y: 269 },
  },
  {
    gameMode: gameModes.funFact,
    pic: "/Vulcano_SWIR.jpg",
    fact:
      "Som vist på dette nye bildet er det mye lettere å oppdage posisjonen til vulkanen, som er det røde området, når man bruker " +
      "lyslengder utenfor det det vi kaller synlig lys. Dette nye bildet har tatt verdier fra fargekanaler utenfor " +
      "synlig lys og har flyttet de til de røde, grønne og blå fargekanalene slik at mennesker kan se de.",
  },
  {
    gameMode: gameModes.kahoot,
    pic: "/Vulcano_SWIR.jpg",
    question: "Hvilken fargekanal er bildet laget av?",
    alt1: "Ultra Blue (UB)",
    alt2: "Visible Light (RGB)",
    alt3: "Short Wave Infrared (SWIR)",
    alt4: "False colors",
    answer: "Short Wave Infrared (SWIR)",
  },
  {
    gameMode: gameModes.funFact,
    pic: "/Vulcano_SWIR.jpg",
    fact: "Short Wave Infrared (SWIR) brukes mye til å estimere fuktighet på jorda og planter ettersom vann absorberer infrarød stråling.",
  },
  {
    gameMode: gameModes.funFact,
    pic: "/Fire-Timelaps2.gif",
    title: "Overvåking av skogbrann",
    fact: "Dette er en del av av den australske skogbrannen som startet i 2019. " + 
          "Totalt brant omtrent 300 000 km2 skog ned. Det er ca 878 Trondheimer!",
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
    fact: "Siden SWIR er effektiv til å finne vanninnhold i planter er den godt egnet til å oppdage skogbranner. " +
          "Når brannen har tappet vannet ut av plantene vil de slutte å sende ut lyset som mappes til den grønne fargen, " +
          "i tillegg til at flammene vil sende ut Infrarødt lys, som brukes i varmekamera, og mappes til rød.",
  },
  {
    gameMode: gameModes.funFact,
    pic: "/Fire-Timelaps2.gif",
    fact: "For denne timelapse er det brukt sentinel 2, som er en gruppe satelitter. De besøker samme sted ca hver 5. dag " +
          "og kan da brukes til å se utvikling av områder og katastrofer.",
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
      "Forskjellen på disse bildene er 2 år, fra 2019-2021. Demningen startet å fylles opp i july 2020, " +
      "og er planlagt å bli fylt opp i 4-7 år. Den ble brukt til vannkraft for første gang 20. feb 2022. " +
      "Overvåking av elver kan være et kraftig verktøy i kriger om vann, f.eks i afrika.",
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
    fact: "Satellitter kan også brukes til å se utfall av katastrofer uten å måtte nære seg risiko området.",
  },
];

export default tasks;
