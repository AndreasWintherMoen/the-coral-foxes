import React, { useEffect, useState } from "react";

const Score = ({taskScore, totalScore}) => {
    const [ScoreDisplay, setScoreDisplay] = useState(0);

    return(
        
        <div style ={{
            backgroundColor: "black",
            color: "white",
            width: "20%",
            fontSize: "50px",
        }}
        >
            Score = {totalScore}
        </div>
    );
};

export default Score;