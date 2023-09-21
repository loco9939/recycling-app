import { level1 } from "@/assets";
import Image from "next/image";
import React from "react";
import style from "./Card.module.css";
import { Card } from "@/assets/cards";

function Card({ level, imgUrl, title, content, tags }: Card) {
  return (
    <div className={style.card}>
      <Image
        src={imgUrl}
        alt={title}
        width={40}
        height={40}
        className={style.img}
      />
      <h2 className={style.title}>{title}</h2>
      <p className={style.content}>{content}</p>
      <div className={style["tag-box"]}>
        {tags.map((tag) => (
          <span key={tag} className={style.tag}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Card;
