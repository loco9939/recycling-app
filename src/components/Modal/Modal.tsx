import Image from "next/image";
import style from "./Modal.module.css";
import { close } from "@/assets";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  closeFn: () => void;
}

function Modal({ closeFn, children }: Props) {
  return (
    <div className={style.container}>
      <Image
        src={close}
        alt="닫기"
        width={16}
        height={16}
        className={style.img}
        onClick={closeFn}
      />
      {children}
    </div>
  );
}

export default Modal;
