import React, { useState, useRef } from "react";
import Marker from "../Marker";

const wrapperStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  justifyItems: "center",
  placeItems: "center",
  alignContent: "center",
  justifySelf: "center",
  alignSelf: "center",
  textAlign: "center",
  backgroundImage: "url(/background_empty_space.jpg)",
  height: "100vh",
  width: "100vw",
};

const defaultMousePos = {
  x: 0,
  y: 0,
};

const defaultBounds = {
  x1: 0,
  x2: 0,
  y1: 0,
  y2: 0,
};

const PlaceMarkerGameMode = ({ task, onSubmitAnswer }) => {
  const [bounds, setBounds] = useState(defaultBounds);
  const [mousePos, setMousePos] = useState(defaultMousePos);
  const imgRef = useRef(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [actualAnswer, setActualAnswer] = useState();

  const onHover = (ev) => {
    if (showAnswer) return;

    setBounds({
      x1: imgRef.current.offsetLeft,
      y1: imgRef.current.offsetTop,
      x2: imgRef.current.offsetLeft + imgRef.current.offsetWidth,
      y2: imgRef.current.offsetTop + imgRef.current.offsetHeight,
    });
    setMousePos({
      x: ev.pageX,
      y: ev.pageY,
    });
    setActualAnswer({
      x: task.answer.x + imgRef.current.offsetLeft,
      y: task.answer.y + imgRef.current.offsetTop,
    });
  };

  const placeMarker = () => {
    setShowAnswer(true);
    onSubmitAnswer({
      x: mousePos.x - imgRef.current.offsetLeft,
      y: mousePos.y - imgRef.current.offsetTop,
    });
  };

  return (
    <div style={wrapperStyle} onMouseMove={onHover}>
      <h2 style={{ color: "#ff9400" }}>{task.question}</h2>
      <img
        src={task.pic}
        alt=""
        ref={imgRef}
        style={{ width: "1200px", justifySelf: "center" }}
        onClick={placeMarker}
        style={{
          maxWidth: "50%",
          maxHeight: "50%",
        }}
      />
      <Marker pos={mousePos} bounds={bounds} />
      <Marker
        pos={actualAnswer}
        bounds={bounds}
        hide={!showAnswer}
        isAnswerMarker
      />
    </div>
  );
};

export default PlaceMarkerGameMode;
