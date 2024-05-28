"use client";
import React from "react";
import styled from "styled-components";

interface StarRatingProps {
  rating: number; // Rating between 0 to 5
}

const StarWrapper = styled.div`
  display: flex;
`;

const Star = styled.div<{ filled: number }>`
  width: 15px;
  height: 15px;
  background: ${({ filled }) =>
    `linear-gradient(to right, black ${filled}%, lightgray ${filled}%)`};
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );

  margin-right: 2px;
`;

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const getFillPercentage = (index: number): number => {
    const starRating = rating - index;
    if (starRating >= 1) return 100;
    if (starRating <= 0) return 0;
    return starRating * 100;
  };

  return (
    <div className="grid h-4 place-items-center">
      <StarWrapper>
        {[0, 1, 2, 3, 4].map((index) => (
          <Star key={index} filled={getFillPercentage(index)} />
        ))}
      </StarWrapper>
    </div>
  );
};

export default StarRating;
