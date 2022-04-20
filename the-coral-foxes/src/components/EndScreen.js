import React from "react";
import Button from "@mui/material/Button";

const EndScreen = ({ onEndGame, score, scoreList }) => {
  console.log(score);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url(/background_empty_space.jpg)",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          color: "#ff9400",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2em",
        }}
      >
        {
          <img
            src="logo_korall_rev.png"
            style={{
              display: "flex",
              height: "100px",
            }}
          />
        }
        <h2
          style={{
            marginTop: "0",
          }}
        >
          {"HURRA!"}
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#F55900",
            justifyContent: "start",
            width: "40vw",
            // height: "15vh",
            border: "10px solid #6B0000",
            marginBottom: "10px",
          }}
        >
          {scoreList &&
            scoreList.map((s, i) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  gap: "10px",
                  width: "100%",
                  margin: "0px",
                  padding: "0px",
                  backgroundColor: i === 3 ? "#D54300" : "#F55900",
                }}
              >
                <p
                  style={{
                    paddingLeft: "10px",
                    margin: "0px",
                    fontSize: "0.6em",
                  }}
                >
                  {i + 1}: {s.name}
                </p>
                <p
                  style={{
                    paddingRight: "10px",
                    margin: "0px",
                    fontSize: "0.6em",
                  }}
                >
                  {s.score}
                </p>
              </div>
            ))}
        </div>
        <Button
          variant="contained"
          onClick={onEndGame}
          style={{
            backgroundColor: "#EC839E",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "0.5em",
            color: "#882F3E",
          }}
        >
          Prøv igjen?
        </Button>
      </div>
    </div>
  );
};

export default EndScreen;

{
  /* <h2 style={{ fontSize: "3em" }}>Takk for oss!</h2>
      <h2 style={{ fontSize: "2.5em", marginTop: "2em" }}>Score: {score}</h2>
      <div>
        <Button variant="contained" onClick={onEndGame}>
          Front Page
        </Button>
      </div> */
}
