import React, { useEffect, useLayoutEffect, useState } from "react";
import Button from "@/modules/Button/Button";
import style from "./Choice.module.css";
import { Quiz } from "@/assets/quiz";
import Image from "next/image";
import { arrowRight } from "@/assets";

interface Props {
  quiz: Quiz;
  moveNext: (key: string) => void;
}

function Choice({ quiz, moveNext }: Props) {
  const [select, setSelect] = useState<string>("");

  const { id, choice, choiceImg } = quiz;

  const toggleSelect = (key: string) => {
    if (select === key) {
      setSelect("");
    } else {
      setSelect(key);
    }
  };

  useLayoutEffect(() => {
    setSelect("");
  }, [quiz]);
  return (
    <div className={style.choice}>
      {Object.entries(choice).map(([key, value], index) => (
        <button
          key={key}
          id={key}
          onClick={() => toggleSelect(key)}
          className={`${style.btn} ${select === key ? style.active : ""}`}
        >
          <span>{key}.</span>
          <div>
            <span className={style["btn-text"]}>{value}</span>
            {choiceImg && (
              <Image
                src={choiceImg[index]}
                alt="choiceImg"
                width={200}
                height={200}
                style={{
                  maxWidth: "100%",
                  marginInline: "auto",
                  marginTop: "18px",
                }}
              />
            )}
          </div>
        </button>
      ))}
      <Button
        className={`${style.next} ${select === "" ? "" : style.activeBtn}`}
        disabled={select === ""}
        onClick={() => moveNext(select)}
      >
        {id === 10 ? "제출하기" : "다음"}
        {select !== "" && id !== 10 && (
          <Image src={arrowRight} alt="디음" className={style.arrowRight} />
        )}
      </Button>
    </div>
  );
}

export default Choice;
