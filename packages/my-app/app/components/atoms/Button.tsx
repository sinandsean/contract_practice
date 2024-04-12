import normalLeft from "@/app/ui/assets/btn_outline_primary_medium_normal_left.png";
import normalMiddle from "@/app/ui/assets/btn_outline_primary_medium_normal_middle.png";
import normalRight from "@/app/ui/assets/btn_outline_primary_medium_normal_right.png";
import horverLeft from "@/app/ui/assets/btn_outline_primary_medium_hover_left.png";
import horverMiddle from "@/app/ui/assets/btn_outline_primary_medium_hover_middle.png";
import horverRight from "@/app/ui/assets/btn_outline_primary_medium_hover_right.png";
import activeLeft from "@/app/ui/assets/btn_outline_primary_medium_active_left.png";
import activeMiddle from "@/app/ui/assets/btn_outline_primary_medium_active_middle.png";
import activeRight from "@/app/ui/assets/btn_outline_primary_medium_active_right.png";
import { times } from "lodash";
import Image from "next/image";
import { useMemo, useState } from "react";

const BUTTON_WIDTH_UNIT = 8;

type ButtonProps = Pick<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onClick" | "className" | "children"
> & {
  width: number;
};

function Button({ onClick, children, width }: ButtonProps) {
  const [isHovered, setHovered] = useState(false);
  const [isPointerDown, setPointerDown] = useState(false);

  const { leftImage, middleImage, rightImage } = useMemo(() => {
    const left = isPointerDown
      ? activeLeft
      : isHovered
      ? horverLeft
      : normalLeft;
    const middle = isPointerDown
      ? activeMiddle
      : isHovered
      ? horverMiddle
      : normalMiddle;
    const right = isPointerDown
      ? activeRight
      : isHovered
      ? horverRight
      : normalRight;

    return { leftImage: left, middleImage: middle, rightImage: right };
  }, [isHovered, isPointerDown]);

  const middleImages = useMemo(() => {
    const count = Math.floor(
      (width - 2 * BUTTON_WIDTH_UNIT) / BUTTON_WIDTH_UNIT
    );
    return times(count, (index) => (
      <Image key={index} src={middleImage} alt="middle" />
    ));
  }, [middleImage, width]);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setPointerDown(false);
      }}
      onPointerDown={() => setPointerDown(true)}
      onPointerUp={() => setPointerDown(false)}
      type="button"
      className="flex"
    >
      <div className="flex justify-center items-center">
        <Image src={leftImage} alt="left" />
        {middleImages}
        <Image src={rightImage} alt="right" />
        <div className="absolute">{children}</div>
      </div>
    </button>
  );
}

export default Button;
