import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles['main-layout']}>
      <header>분리수거 App</header>
      <main>
        <section>
          <h1>분리수거 App</h1>
          <p>까다로운 분리수거 방법 때문에 늘 고민이 많으셨죠?</p>
          <p>
            재밌게 즐길 수 있는 간단한 퀴즈로 나의 분리수거 Level을 체크해보세요
          </p>
        </section>

        <section>scroll Animations</section>

        <section>
          <div>
            <img src="" alt="" />
            <h2>새싹 1단계</h2>
            <p>분리수거에 관심을 이제 막 가지기 시작한 새싹 단계</p>
            <div>
              <span>#새싹</span>
              <span>#분린이</span>
            </div>
          </div>
        </section>

        <button>시작하기</button>
      </main>
      <footer className="border">푸터</footer>
    </div>
  );
}
