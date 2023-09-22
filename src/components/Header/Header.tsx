import Link from "next/link";
import React from "react";
import style from "./Header.module.css";
import { colors } from "@/style/colors";
import Image from "next/image";
import { crown } from "@/assets";

function Header() {
  return (
    <header className={style.header}>
      <Link href="/">
        분리수거왕{" "}
        <Image
          src={crown}
          alt="왕관"
          style={{ display: "inline-block", verticalAlign: "bottom" }}
        />
      </Link>
    </header>
  );
}

export default Header;
