import React, { useState } from "react";
import { IoStarSharp } from "react-icons/io5";

import "./StarRate.scss"

const StarRate = () => {
  const [rating, setRating] = useState(null);
  const [hoverFill, setHoverFill] = useState(null);

  return (
    <div className="star">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;

        return (
          <button
            key={index}
            onMouseEnter={() => setHoverFill(ratingValue)}
            onMouseLeave={() => setHoverFill(null)}
            onClick={() => setRating(ratingValue)}
          >
            <IoStarSharp
              className="FaStar"
              size={23}
              style={{
                color:
                  ratingValue <= (hoverFill || rating) ? "#1C62CD" : "#C4C4C4",
              }}
              onChange={() => setRating(ratingValue)}
              value={ratingValue}
            />
          </button>
        );
      })}
    </div>
  );
};

export default StarRate;
