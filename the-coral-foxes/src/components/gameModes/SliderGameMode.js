import React from "react";
import ImageSlider from "../ImageSlider";
import DaysSlider from "../DaysSlider";

const Slider = ({ task, onSubmitAnswer }) => {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexDirection: "column",
        textAlign: "center",
        backgroundImage: "url(/background_empty_space.jpg)",
        height: "100vh",
        width: "100vw",
      }}
    >
      <ImageSlider
        oldPic={task.pic1}
        newPic={task.pic2}
        style={{
          marginTop: "400px",
        }}
      />
      <div
        style={{
          backgroundColor: "#F55900",
          border: "10px solid #6B0000",
          color: "#6B0000",
          height: "15vh",
          marginTop: "20%",
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "10%",
        }}
      >
        <h2 style={{ color: "#ff9400" }}>{task.question}</h2>
        <div style={{ marginTop: "1px" }}>
          <DaysSlider
            onSubmitAnswer={onSubmitAnswer}
            max={task.max}
            correctAnswer={task.answer}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
