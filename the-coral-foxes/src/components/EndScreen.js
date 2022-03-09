import React from "react";
import Button from "@mui/material/Button";

const EndScreen = ({ onEndGame, score }) => {
  console.log(score);
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "200px",
      }}
    >
      <h2 style={{ fontSize: "3em" }}>Takk for oss!</h2>
      <h2 style={{ fontSize: "2.5em", marginTop: "2em" }}>Score: {score}</h2>
      {/* <div>
        <Button variant="contained" onClick={onEndGame}>
          Front Page
        </Button>
      </div> */}
    </div>
  );
};

export default EndScreen;
