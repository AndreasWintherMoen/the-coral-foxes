import React, { useEffect, useState } from "react";

const Score = ({taskScore, totalScore}) => {


    return(
        <div style ={{
            backgroundColor: "black",
            color: "white",
            width: "10%",
        }}
        >
            Score = {totalScore}
        </div>
    );
};

export default Score;