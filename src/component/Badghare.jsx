import React from 'react'
import Dog from "../assets/One.jpg";
import Video from '../assets/coffee.mp4';

export const Badghare = () => {
  return (
    <div>
        <img src={Dog} alt="Dog"></img>
        <p>smiling dog</p>
        <button> on click</button>
        <video width="320" height="240"controls src={Video}> 
        </video>
    </div>
  )
}

