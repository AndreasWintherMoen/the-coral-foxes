import gameModes from "./gameModes";

const calculateScore = (task, answer) => {
  switch (task.gameMode) {
    case gameModes.kahoot:
      return task.answer === answer ? 1000 : 0;
    default:
      console.log("could not find game mode in calculateScore");
      return 0;
  }
};

export default calculateScore;
