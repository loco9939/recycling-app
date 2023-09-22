import { colors } from "@/style/colors";
import Link from "next/link";
import React from "react";

function Error() {
  return (
    <main style={{ padding: "43px 20px 0 20px", textAlign: "center" }}>
      <p style={{ marginBottom: "40px" }}>잘못된 접근입니다.</p>
      <Link
        href="/"
        style={{
          backgroundColor: colors.Primary,
          color: colors.Black,
          padding: "12px",
          borderRadius: "12px",
        }}
      >
        메인 화면으로 돌아가기
      </Link>
    </main>
  );
}

export default Error;
