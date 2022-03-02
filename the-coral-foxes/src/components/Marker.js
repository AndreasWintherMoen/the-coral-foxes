import React from "react";

const Marker = ({ pos, bounds, hide, isAnswerMarker }) => {
  if (hide) return <div></div>;

  const actualPos = {
    x: Math.min(bounds.x2, Math.max(bounds.x1, pos.x)) - 25,
    y: Math.min(bounds.y2, Math.max(bounds.y1, pos.y)) - 50,
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
      }}
    />
  );
};

export default Marker;
