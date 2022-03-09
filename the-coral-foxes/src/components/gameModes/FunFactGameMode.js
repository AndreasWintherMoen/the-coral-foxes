import { Button } from "@mui/material";
import React from "react";

const FunFact = ({ funFact, onNextTask }) => (
  <div
    style={{
      display: "flex",
      backgroundImage: "url(/background_empty_space.jpg)",
      height: "98vh",
      width: "100vw",
      color: "#ff9400",
    }}
  >
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        justifySelf: "center",
        justifyContent: "center",
        alignContent: "center",
        maxWidth: "1000px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2em", marginTop: 0 }}>
        {funFact.title || "Informasjon"}
      </h2>
      <img src={funFact.pic} alt="funfact" />

      <div
        style={{
          display: "flex",
          backgroundColor: "#F55900",
          flexDirection: "column",
          border: "10px solid #6B0000",
          color: "#6B0000",
          height: "15vh",
          marginTop: "15px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "1.5em" }}>{funFact.fact}</p>
        <Button
          variant="contained"
          onClick={onNextTask}
          style={{
            backgroundColor: "#EC839E",
            width: "20vw",
            height: "6vh",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2em",
            color: "#882F3E",
            display: "flex",
          }}
        >
          Neste
        </Button>
      </div>
    </div>
  </div>
);

export default FunFact;
