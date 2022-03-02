import React, { useEffect, useState } from "react";
import HighScoreList from "../components/HighScoreList";
import Button from "@mui/material/Button";

const Frontpage = ({ onStartGame }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundImage: "url(/background_empty_space.jpg)",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
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
        { <img src= "logo_korall_rev.png"
        style = {{
            display: "flex",
            height: "300px",
            
        }}
        /> }
        <h2 style={{
          marginTop: "0",
        }}>{"Korallrevene"}</h2>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F55900",
          alignItems: "center",
          justifyContent: "center",
          width: "40vw",
          height: "15vh",
          border: "10px solid #6B0000",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: "5vh",
            width: "30vw",
          }}
        >
          <Button
            variant="contained"
            onClick={onStartGame}
            style={{
              backgroundColor: "#EC839E",
              width: "20vw",
              height: "8vh",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2em",
              color: "#882F3E"
            }}
          >
            Start
          </Button>
        </div>
        {/* <div
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
        </div> */}
      </div>
    </div>
  );
};

export default Frontpage;
