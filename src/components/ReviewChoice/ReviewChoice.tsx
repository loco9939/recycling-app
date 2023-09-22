import Image from "next/image";
import style from "./Review.module.css";
import { arrowRight } from "@/assets";
import Button from "@/modules/Button/Button";

interface Props {
  choice: { [key: string]: string };
  answer: string;
  userAnswer: string;
  solution: string;
  currentIndex: number;
  moveNext: () => void;
  movePrev: () => void;
}

function ReviewChoice({
  choice,
  answer,
  userAnswer,
  solution,
  currentIndex,
  moveNext,
  movePrev,
}: Props) {
  return (
    <div className={style.choice}>
      {Object.entries(choice).map(([key, value]) => (
        <button
          key={key}
          id={key}
          className={`${style.btn} ${
            answer === key
              ? style.correct
              : userAnswer === key
              ? style.wrong
              : ""
          } `}
        >
          <span>{key}.</span>
          <span className={style["btn-text"]}>{value}</span>
        </button>
      ))}

      <div className={style["review-box"]}>
        <p className={style.review}>오답노트</p>
        <p className={style.answer}>정답: {answer}</p>
        <p
          className={style.solution}
          dangerouslySetInnerHTML={{ __html: solution }}
        ></p>
      </div>

      <div
        style={{
          fontSize: "18px",
          fontWeight: "400",
          display: "flex",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        <Button
          className={`${style.prev}`}
          onClick={() => movePrev()}
          disabled={currentIndex === 0}
        >
          이전
          {<Image src={arrowRight} alt="이전" className={style.arrowLeft} />}
        </Button>
        <Button
          className={`${style.next}`}
          onClick={() => moveNext()}
          disabled={currentIndex === 9}
        >
          다음
          {<Image src={arrowRight} alt="디음" className={style.arrowRight} />}
        </Button>
      </div>
    </div>
  );
}

export default ReviewChoice;
