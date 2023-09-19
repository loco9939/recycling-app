import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/modules/Button/Button";
import Header from "@/components/Header/Header";
import { level1 } from "@/assets";
import ScrollAnimation from "@/components/ScrollAnimation/ScrollAnimation";
import CardGroup from "@/components/CardGroup/CardGroup";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles["main-layout"]}>
      <Header />
      <main style={{ textAlign: "center" }}>
        <section className={styles.desc}>
          <h1 className={styles["desc-title"]}>분리수거 App</h1>
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

        <Button className={styles.start}>시작하기</Button>
      </main>
      <Footer />
    </div>
  );
}
