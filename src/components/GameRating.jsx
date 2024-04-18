import React, { useEffect, useState } from "react";
import "./gamerating.css";
function GameRating({ rating }) {
  const [stars, setstars] = useState([]);

  const generateStars = () => {
    let stars = [];
    if (rating > 5 || rating < 1) {
      return;
    }
    for (let i = 0; i < rating; i++) {
      stars.push(i);
    }
    return stars;
  };

  useEffect(() => {
    setstars(generateStars());
  }, []);

  return <div className="gamerating">
    {stars.map((star,index)=>(
        <i key={index} className="bi bi-star-fill"></i>
    ))}
  </div>;
}

export default GameRating;
