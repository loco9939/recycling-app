"use client";

import { Card, cards } from "@/assets/cards";
import style from "./page.module.css";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import Spinner from "@/modules/Spinner/Spinner";
import Button from "@/modules/Button/Button";
import { colors } from "@/style/colors";
import Error from "@/components/Error/Error";
import Modal from "@/components/Modal/Modal";
import ReviewPopup from "@/components/ReviewPopup/ReviewPopup";

enum LoadingState {
  Loading,
  Loaded,
  Error,
}

function Result() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [userLevel, setUserLevel] = useState<Card | null>(null);
  const [loadingState, setLoadingState] = useState<LoadingState>(
    LoadingState.Loading
  );

  const [reviewModal, setReviewModal] = useState(false);

  const share = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => alert("주소가 복사되었습니다."));
  };

  const retry = () => {
    router.push("/");
    localStorage.clear();
  };

  const showReview = () => setReviewModal(true);

  useEffect(() => {
    setLoadingState(LoadingState.Loading);
    const userCard = cards.find(
      (card) => card.level === searchParams.get("level")
    );

    if (userCard) {
      setUserLevel(userCard);
      setLoadingState(LoadingState.Loaded);
    } else {
      setLoadingState(LoadingState.Error);
    }
  }, [searchParams]);

  if (loadingState === LoadingState.Loading) return <Spinner />;

  if (loadingState === LoadingState.Error || !userLevel) return <Error />;

  const { imgUrl, title, content, tags } = userLevel;

  return (
    <>
      {reviewModal && (
        <Modal id="modal" closeFn={() => setReviewModal(false)}>
          <ReviewPopup />
        </Modal>
      )}

      <main className={style["main-layout"]} style={{}}>
        <h1 className={style.celebration}>축하합니다 !</h1>
        <section className={style.level}>
          <Image
            src={imgUrl}
            alt="유저 레벨"
            width={40}
            height={40}
            style={{ display: "inline-block" }}
          />
          <p style={{ fontWeight: "700", marginBlock: "38px" }}>{title}</p>
          <p style={{ fontWeight: "300" }}>{content}</p>
          <div className={style["tag-box"]}>
            {tags.map((tag) => (
              <span key={tag} className={style.tag}>
                #{tag}
              </span>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: "50px" }}>
          <Button
            style={{
              width: "100%",
              backgroundColor: colors.Yellow,
            }}
            onClick={share}
          >
            친구한테 공유하기
          </Button>
          <Button
            style={{
              width: "100%",
              backgroundColor: colors.Red,
              marginBlock: "38px",
            }}
            onClick={showReview}
          >
            오답노트 보기
          </Button>
          <Button
            style={{
              width: "100%",
              backgroundColor: colors.Primary,
            }}
            onClick={retry}
          >
            다시 도전하기
          </Button>
        </section>
      </main>
    </>
  );
}

export default Result;
