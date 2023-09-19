import React from "react";
import style from "./ScrollAnimation.module.css";

const TAGS = [
  "분리수거",
  "ESG",
  "재활용",
  "Recycling",
  "지구살리기",
  "환경캠페인",
  "EcoFriendly",
  "친환경",
  "Environment",
];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr: string[]) => [...arr].sort(() => 0.5 - Math.random());

function ScrollAnimation() {
  return (
    <div className={style["scroll-animation"]}>
      <div className={style["tag-list"]}>
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION - 5000, DURATION + 5000)}
            reverse={i % 2}
          >
            {shuffle(TAGS)
              .slice(0, TAGS_PER_ROW)
              .map((tag) => (
                <Tag text={tag} key={tag} />
              ))}
          </InfiniteLoopSlider>
        ))}
      </div>
    </div>
  );
}

export default ScrollAnimation;

interface InfiniteLoopSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  duration: number;
  reverse: boolean | number;
}

function InfiniteLoopSlider({
  children,
  duration,
  reverse = false,
}: InfiniteLoopSliderProps) {
  return (
    <div
      className={style["loop-slider"]}
      style={{
        "--duration": `${duration}ms`,
        "--direction": reverse ? "reverse" : "normal",
      }}
    >
      <div className={style.inner}>
        {children}
        {children}
      </div>
    </div>
  );
}

interface TagProps {
  text: string;
}

function Tag({ text }: TagProps) {
  return (
    <div className={style.tag}>
      <span>#</span> {text}
    </div>
  );
}
