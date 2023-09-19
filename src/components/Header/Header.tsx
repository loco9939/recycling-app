import Link from "next/link";
import React from "react";
import style from "./Header.module.css";
import { colors } from "@/style/colors";

function Header() {
  return (
    <header className={style.header}>
      <Link href="/">분리수거 App</Link>
    </header>
  );
}

export default Header;
