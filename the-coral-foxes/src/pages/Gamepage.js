import React, { useEffect, useState } from "react";
import FunFactGameMode from "../components/gameModes/FunFactGameMode";
import gameModes from "../utils/gameModes";
import tasks from "../utils/tasks";
import SliderGameMode from "../components/gameModes/SliderGameMode";
import EndScreen from "../components/EndScreen";
import KahootGameMode from "../components/gameModes/KahootGameMode";
import PlaceMarkerGameMode from "../components/gameModes/PlaceMarkerGameMode";
import calculateScore from "../utils/calculateScore";

const Gamepage = ({ onEndGame }) => {
  const [index, setIndex] = useState(0);
  const [task, setTask] = useState(tasks[index]);
  const [score, setScore] = useState(0);

  useEffect(() => setTask(tasks[index]), [index]);

  const onSubmitAnswer = async (answer) => {
    const taskScore = Math.round(calculateScore(task, answer));
    console.log(`Task score: ${taskScore}`);
    setScore(score + taskScore);
    setTimeout(nextTask, 2000);
  };

  const nextTask = () => setIndex(index + 1);

  if (!task) return <EndScreen />;

  switch (task.gameMode) {
    case gameModes.funFact:
      return <FunFactGameMode funFact={task} onNextTask={nextTask} />;
    case gameModes.slider:
      return <SliderGameMode task={task} onSubmitAnswer={onSubmitAnswer} />;
    case gameModes.kahoot:
      return <KahootGameMode task={task} onSubmitAnswer={onSubmitAnswer} />;
    case gameModes.placeMarker:
      return (
        <PlaceMarkerGameMode task={task} onSubmitAnswer={onSubmitAnswer} />
      );
    default:
      console.log(`could not find game mode ${task.gameMode}`);
      return <EndScreen />;
  }
};

export default Gamepage;
