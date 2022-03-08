import React, { useEffect, useState } from "react";

const Score = ({taskScore, totalScore}) => {
    const [ScoreDisplay, setScoreDisplay] = useState(0);

    return(
        
        <div style ={{
            backgroundColor: "#F55900",
            color: "white",
            fontSize: "25px",
            color: "#6B0000",
        }}
        >
            Score = {totalScore}
        </div>
    );
};

export default Score;