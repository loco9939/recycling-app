"use client";

import React, { useState } from "react";
import style from "./ReviewPopup.module.css";
import Problem from "../Problem/Problem";
import { quiz } from "@/assets/quiz";
import ReviewChoice from "../ReviewChoice/ReviewChoice";
import Image from "next/image";
import { Big_O, Big_X } from "@/assets";

function ReviewPopup() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const LocalUserAnswer = JSON.parse(
    localStorage.getItem("userAnswer") as string
  );

  const answerCount = quiz.filter(
    (question, index) => question.answer === LocalUserAnswer[index]
  ).length;

  const moveNext = () => {
    setCurrentIndex(currentIndex + 1);
    const container = document.getElementById("modal");
    if (container) {
      container.scrollTop = 0; // 컴포넌트 내 스크롤을 상단으로 이동
    }
  };

  const movePrev = () => {
    setCurrentIndex(currentIndex - 1);
    const container = document.getElementById("modal");
    if (container) {
      container.scrollTop = 0; // 컴포넌트 내 스크롤을 상단으로 이동
    }
  };

  const userAnswer = LocalUserAnswer[currentIndex];
  const { choice, answer, solution,choiceImg } = quiz[currentIndex];
  return (
    <div className={style.container}>
      <p>맞춘 갯수: {answerCount} 문제</p>
      <div className={style.img}>
        {userAnswer === answer ? (
          <Image src={Big_O} alt="정답" width={50} height={50} />
        ) : (
          <Image src={Big_X} alt="오답" width={50} height={50} />
        )}
      </div>

      <Problem quiz={quiz[currentIndex]} index={currentIndex} />

      <ReviewChoice
        choice={choice}
        answer={answer}
        choiceImg={choiceImg}
        userAnswer={userAnswer}
        solution={solution}
        currentIndex={currentIndex}
        moveNext={moveNext}
        movePrev={movePrev}
      />
    </div>
  );
}

export default ReviewPopup;
