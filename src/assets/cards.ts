import { level1, level2, level3 } from "@/assets";

export interface Card {
  level: string;
  imgUrl: string;
  title: string;
  content: string;
  tags: string[];
}

export const cards: Card[] = [
  {
    level: "1",
    imgUrl: level1,
    title: "새싹 1단계",
    content: "분리수거에 관심을 이제 막 가지기 시작한 새싹 단계",
    tags: ["새싹", "분린이"],
  },
  {
    level: "2",
    imgUrl: level2,
    title: "가지 2단계",
    content: "분리수거에 어느정도 일가견이 있으신 가지 단계",
    tags: ["가지", "분자감"],
  },
  {
    level: "3",
    imgUrl: level3,
    title: "나무 3단계",
    content: "주변 사람에게 분리수거 방법을 알려주는 나무 단계",
    tags: ["나무", "분리왕"],
  },
];
