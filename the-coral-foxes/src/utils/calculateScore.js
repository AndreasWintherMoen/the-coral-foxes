import gameModes from "./gameModes";
import clamp from "./clamp";

const calculateScore = (task, answer) => {
  switch (task.gameMode) {
    case gameModes.kahoot:
      return task.answer === answer ? 1000 : 0;
    case gameModes.placeMarker:
      const dist = Math.hypot(
        answer.x - task.answer.x,
        answer.y - task.answer.y
      );
      const score = 1000 - clamp(dist, 0, 1000) * 2;
      return clamp(score, 0, 1000);
    default:
      console.log("could not find game mode in calculateScore");
      return 0;
  }
};

export default calculateScore;
