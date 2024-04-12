import { colors } from "@/app/ui/theme/colors";
import clsx from "clsx";
import { useMemo } from "react";
import { match } from "ts-pattern";

type BaseTextProps = {
  className?: string;
  type: "button2" | "caption1" | "caption2" | "h5-bold";
  label: string;
  color?: string;
};

function BaseText({ label, className, type, color }: BaseTextProps) {
  const sizeClass = useMemo(
    () =>
      match(type)
        .with("h5-bold", () => "text-24p")
        .with("caption1", () => "text-14p")
        .with("caption2", () => "text-12p")
        .with("button2", () => "text-18p")
        .exhaustive(),
    [type]
  );

  return (
    <span
      className={clsx(sizeClass, className)}
      style={{ color: color || colors.black }}
    >
      {label}
    </span>
  );
}

export default BaseText;
