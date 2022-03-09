
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const GameButton = ({Text, onStartGame}) => {

return(
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
            {Text}
    </Button>
);

};

export default GameButton;