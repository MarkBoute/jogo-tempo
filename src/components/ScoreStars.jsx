import React from "react";
import { FaStar } from "react-icons/fa";

const ScoreStars = ({ score, targetScore }) => {
  return (
    <p className="scoreStars">
      <FaStar opacity={score >= targetScore * 0.7 ? 1 : 0.2} />
      <FaStar opacity={score >= targetScore * 0.8 ? 1 : 0.2} />
      <FaStar opacity={score >= targetScore * 0.9 ? 1 : 0.2} />
    </p>
  );
};

export default ScoreStars;
