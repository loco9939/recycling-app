import Card from "@/modules/Card/Card";
import React from "react";
import style from "./CardGroup.module.css";
import { cards } from "@/assets/cards";

function CardGroup() {
  return (
    <div className={style["card-group-container"]}>
      <div className={style["card-group"]}>
        {cards.map(({ level, imgUrl, title, content, tags }) => (
          <Card
            key={title}
            level={level}
            imgUrl={imgUrl}
            title={title}
            content={content}
            tags={tags}
          />
        ))}
      </div>
    </div>
  );
}

export default CardGroup;
