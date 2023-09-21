"use client";

import Choice from "@/components/Choice/Choice";
import Problem from "@/components/Problem/Problem";
import { quiz } from "@/assets/quiz";
import { useMemo, useState } from "react";
import Spinner from "@/modules/Spinner/Spinner";
import { useRouter } from "next/navigation";

function Quiz() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);

  // result는 userAnswer의 답안 배열을 확인하여 맞춘 갯수를 카운팅한다.
  const userLevel = useMemo(() => {
    const answerCount = quiz.filter(
      (question, index) => question.answer === userAnswers[index]
    ).length;

    if (answerCount < 4) {
      return 1;
    } else if (answerCount >= 4 && answerCount < 8) {
      return 2;
    } else {
      return 3;
    }
  }, [currentIndex]);

  const moveNext = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex === 9) {
      setTimeout(() => {
        router.push(`/result?level=${userLevel}`, {});
      }, 1000);
    }
  };

  const addUserAnswer = (key: string) => {
    setUserAnswers([...userAnswers, key]);
  };

  if (currentIndex === 10) return <Spinner />;

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
