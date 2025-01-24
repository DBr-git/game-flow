import React, { useEffect, useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

export default function SmoothConfetti({ isActive }) {
  const { width, height } = useWindowSize();
  const [numberOfPieces, setNumberOfPieces] = useState(500);

  useEffect(() => {
    if (!isActive) {
      const interval = setInterval(() => {
        setNumberOfPieces((prev) => Math.max(prev - 10, 0));
      }, 100);

      return () => clearInterval(interval);
    } else {
      setNumberOfPieces(500);
    }
  }, [isActive]);

  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={numberOfPieces}
      recycle={false}
    />
  );
}
