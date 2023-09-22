"use client";

import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";
import CardGroup from "@/components/CardGroup/CardGroup";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";
import Image from "next/image";
import { crown } from "@/assets";

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles["main-layout"]}>
        <main style={{ textAlign: "center" }}>
          <section className={styles.desc}>
            <h1 className={styles["desc-title"]}>
              <Image
                src={crown}
                alt="왕관"
                style={{ marginInline: "auto" }}
                width={40}
                height={40}
              />
              분리수거왕
            </h1>
            <p className={styles["desc-content"]} style={{ margin: "38px" }}>
              까다로운 분리수거 방법 때문에 늘 고민이 많으셨죠?
            </p>
            <p className={styles["desc-content"]}>
              재밌게 즐길 수 있는 간단한 퀴즈로 <br />
              나의 분리수거 Level을 체크해보세요
            </p>
          </section>

          <ScrollAnimation />

          <CardGroup />

          <Link href="/quiz" className={styles.link}>
            시작하기
          </Link>
        </main>
      </div>
      <Footer />
    </>
  );
}
