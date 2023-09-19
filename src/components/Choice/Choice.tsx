import React, { useEffect, useState } from "react";
import Button from "@/modules/Button/Button";
import style from "./Choice.module.css";
import { Quiz } from "@/assets/quiz";
import Image from "next/image";
import { arrowRight } from "@/assets";

interface Props {
  quiz: Quiz;
  moveNext: () => void;
  addUserAnswer: (key: string) => void;
}

function Choice({ quiz, moveNext, addUserAnswer }: Props) {
  const [select, setSelect] = useState<string>("");

  const { choice } = quiz;

  const toggleSelect = (key: string) => {
    if (select === key) {
      setSelect("");
    } else {
      setSelect(key);
    }
  };

  useEffect(() => {
    setSelect("");
  }, [quiz]);
  return (
    <div className={style.choice}>
      {Object.entries(choice).map(([key, value]) => (
        <button
          key={key}
          id={key}
          onClick={() => toggleSelect(key)}
          className={`${style.btn} ${select === key ? style.active : ""}`}
        >
          <span>{key}.</span>
          <span>{value}</span>
        </button>
      ))}
      <Button
        className={`${style.next} ${select === "" ? "" : style.activeBtn}`}
        disabled={select === ""}
        onClick={() => {
          moveNext();
          addUserAnswer(select);
        }}
      >
        다음
        {select !== "" && (
          <Image src={arrowRight} alt="디음" className={style.arrowRight} />
        )}
      </Button>
    </div>
  );
}

export default Choice;
