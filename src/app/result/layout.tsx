import Header from "@/components/Header/Header";
import style from "./layout.module.css";
import Footer from "@/components/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={style["main-layout"]}>{children}</div>
      <Footer />
    </>
  );
}
