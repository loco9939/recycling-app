import { Noto_Sans_KR } from "next/font/google";
import "../style/global.css";
import "../style/color.css";

const NotoSanKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "Recycling-App",
  description: "분리수거 퀴즈 App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={NotoSanKR.className}>
      <body>{children}</body>
    </html>
  );
}
