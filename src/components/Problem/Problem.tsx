import React from "react";
import style from "./Problem.module.css";
import { Quiz } from "@/assets/quiz";

interface Props {
  quiz: Quiz;
  index: number;
}
function Problem({ quiz, index }: Props) {
  return (
    <div className={style.problem}>
      <h1 className={style.count}>문제 {index + 1}/10</h1>
      <p
        className={style.content}
        dangerouslySetInnerHTML={{ __html: quiz.title }}
      ></p>
    </div>
  );
}

export default Problem;
