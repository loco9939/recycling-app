"use client";
import React, { useEffect, useState } from "react";
import style from "./ScrollAnimation.module.css";

// const TAGS = [
//   "분리수거",
//   "ESG",
//   "재활용",
//   "Recycling",
//   "지구살리기",
//   "환경캠페인",
//   "EcoFriendly",
//   "친환경",
//   "Environment",
// ];
const DURATION = 15000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr: string[]) => [...arr].sort(() => 0.5 - Math.random());

function ScrollAnimation() {
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    setTags([
      "분리수거",
      "ESG",
      "재활용",
      "Recycling",
      "지구살리기",
      "환경캠페인",
      "EcoFriendly",
      "친환경",
      "Environment",
    ]);
  }, []);
  return (
    <div className={style["scroll-animation"]}>
      <div className={style["tag-list"]}>
        {[...new Array(ROWS)].map((_, i) => (
          <InfiniteLoopSlider
            key={i}
            duration={random(DURATION - 5000, DURATION + 5000)}
            reverse={i % 2}
          >
            {shuffle(tags)
              // .slice(0, TAGS_PER_ROW)
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

interface CustomStyleProperties {
  "--duration": string;
  "--direction": string;
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
        ...({
          "--duration": `${duration}ms`,
          "--direction": reverse ? "reverse" : "normal",
        } as CustomStyleProperties),
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
