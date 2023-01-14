import React from "react";
import Dog from "../assets/One.jpg";
import Video from "../assets/coffee.mp4";

const Test = () => {
    console.log(Video, "video")
  return (
    <div>
      <img src={Dog} alt="Dog"></img>
      <p>smiling dog</p>
      <button>on clilk</button>
      <video width="320" height="240" controls>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Test;
