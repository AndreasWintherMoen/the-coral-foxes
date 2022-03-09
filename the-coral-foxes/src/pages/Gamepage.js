import React, { useEffect, useState } from "react";
import FunFactGameMode from "../components/gameModes/FunFactGameMode";
import gameModes from "../utils/gameModes";
import tasks from "../utils/tasks";
import SliderGameMode from "../components/gameModes/SliderGameMode";
import EndScreen from "../components/EndScreen";
import KahootGameMode from "../components/gameModes/KahootGameMode";
import PlaceMarkerGameMode from "../components/gameModes/PlaceMarkerGameMode";
import calculateScore from "../utils/calculateScore";
import Score from "../components/Score";
import SliderKahootGameMode from "../components/gameModes/SliderKahootGameMode";

const Gamepage = ({ onEndGame }) => {
  const [index, setIndex] = useState(0);
  const [task, setTask] = useState(tasks[index]);
  const [totalScore, setScore] = useState(0);
  const [taskScore, setTaskScore] = useState(0);

  useEffect(() => setTask(tasks[index]), [index]);

  const onSubmitAnswer = async (answer) => {
    const newScore = Math.round(calculateScore(task, answer));
    setTaskScore(newScore);
    setScore(totalScore + newScore);
    setTimeout(nextTask, 2000);
  };

  const nextTask = () => setIndex(index + 1);

  if (!task) return <EndScreen score={totalScore} />;

  let gameMode = <div></div>;

  switch (task.gameMode) {
    case gameModes.funFact:
      gameMode = <FunFactGameMode funFact={task} onNextTask={nextTask} />;
      break;
    case gameModes.slider:
      gameMode = <SliderGameMode task={task} onSubmitAnswer={onSubmitAnswer} />;
      break;
    case gameModes.kahoot:
      gameMode = <KahootGameMode task={task} onSubmitAnswer={onSubmitAnswer} />;
      break;
    case gameModes.sliderkahoot:
      gameMode = (
        <SliderKahootGameMode task={task} onSubmitAnswer={onSubmitAnswer} />
      );
      break;
    case gameModes.placeMarker:
      gameMode = (
        <PlaceMarkerGameMode task={task} onSubmitAnswer={onSubmitAnswer} />
      );
      break;
    default:
      console.log(`could not find game mode ${task.gameMode}`);
      gameMode = <EndScreen score={totalScore} />;
      break;
  }

  return (
    <>
      <Score taskScore={taskScore} totalScore={totalScore} />
      {gameMode};
    </>
  );
};

export default Gamepage;
