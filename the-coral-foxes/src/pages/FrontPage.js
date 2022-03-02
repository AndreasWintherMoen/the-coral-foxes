import React, { useEffect, useState } from "react";
import HighScoreList from "../components/HighScoreList";
import Button from "@mui/material/Button";

const Frontpage = ({ onStartGame }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url(/background_pic.jpg)",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          color: "#ff9400",
          alignItems: "center",
          justifyContent: "center",
          width: "40vw",
          height: "40vh",
        }}
      >
        { <img src= "logo_korall_rev.png"
        style = {{
            display: "flex",
            alignItems: "right",
            height: "20vh",
        }}
        /> }
        <h2>{"Korall Rev"}</h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#a44900",
          alignItems: "center",
          justifyContent: "center",
          width: "40vw",
          height: "40vh",
          border: "10px solid #3e1300",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "20vh",
            width: "30vw",
          }}
        >
          <Button
            variant="contained"
            onClick={onStartGame}
            style={{
              backgroundColor: "#ff9400",
              width: "20vw",
              height: "8vh",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            New Game
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            justifyContent: "center",
            width: "50vw",
            height: "80vh",
          }}
        >
          <HighScoreList />
        </div>
      </div>
    </div>
  );
};

export default Frontpage;
