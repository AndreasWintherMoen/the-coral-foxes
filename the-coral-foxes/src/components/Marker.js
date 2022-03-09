import React from "react";
import clamp from "../utils/clamp";

const Marker = ({ pos, bounds, hide, isAnswerMarker }) => {
  if (hide || isAnswerMarker) return <div></div>;

  const actualPos = {
    x: clamp(pos.x, bounds.x1, bounds.x2) - 25,
    y: clamp(pos.y, bounds.y1, bounds.y2) - 50,
  };

  return (
    <img
      src={isAnswerMarker ? "/markerAnswer.png" : "/marker.png"}
      alt="marker"
      style={{
        visibility: hide ? "hidden" : "visible",
        position: "absolute",
        width: "50px",
        left: actualPos.x,
        top: actualPos.y,
        maxWidth: "50%",
        maxHeight: "50%",
      }}
    />
  );
};

export default Marker;
