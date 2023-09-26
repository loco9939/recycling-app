import React from "react";
import style from "./Problem.module.css";
import { Quiz } from "@/assets/quiz";
import Image from "next/image";

interface Props {
  quiz: Quiz;
  index: number;
}
function Problem({ quiz, index }: Props) {
  const { title, quizImg } = quiz;
  return (
    <div className={style.problem}>
      <h1 className={style.count}>문제 {index + 1}/10</h1>
      <p
        className={style.content}
        dangerouslySetInnerHTML={{ __html: title }}
      ></p>

      {quizImg && (
        <Image
          src={quizImg}
          alt="quizImg"
          width={200}
          height={200}
          style={{ maxWidth: "100%", marginInline: "auto", marginTop: "18px" }}
        />
      )}
    </div>
  );
}

export default Problem;
