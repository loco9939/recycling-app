"use client";

import Choice from "@/components/Choice/Choice";
import Problem from "@/components/Problem/Problem";
import style from "./page.module.css";
import { quiz } from "@/assets/quiz";
import { useState } from "react";

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  const moveNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const addUserAnswer = (key: string) => {
    setUserAnswers([...userAnswers, key]);
  };
  return (
    <main style={{ padding: "20px", textAlign: "center" }}>
      <Problem quiz={quiz[currentIndex]} index={currentIndex} />

      <Choice
        quiz={quiz[currentIndex]}
        moveNext={moveNext}
        addUserAnswer={addUserAnswer}
      />
    </main>
  );
}

export default Quiz;
