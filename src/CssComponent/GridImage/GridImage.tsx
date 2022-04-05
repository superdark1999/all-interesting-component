import React from "react";
import "./styled.css";

export default function GridImage() {
  return (
    <div className="container">
      {Array(9)
        .fill(0)
        .map((_, index) => (
          <img
            src={`https://source.unsplash.com/collection/190727/800x600?${index}`}
          />
        ))}
    </div>
  );
}
