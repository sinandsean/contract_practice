import BaseText from "@/app/components/atoms/BaseText";
import keyListBgImage from "@/app/ui/assets/img_key_list_asset_bg.png";
import keyListTitleImage from "@/app/ui/assets/img_key_list_title_bg.png";
import { colors } from "@/app/ui/theme/colors";
import clsx from "clsx";
import Image from "next/image";

function KeyListBox({
  className,
  label,
  children,
}: {
  className?: string;
  label: string;
  children: JSX.Element;
}) {
  return (
    <div className={clsx(className)}>
      <div className="relative flex justify-center">
        <BaseText
          label={label}
          type="h5-bold"
          color={colors["primary-light"][30]}
          className="absolute top-[15%]"
        />
        <Image src={keyListTitleImage} alt="keyList" />
      </div>
      <div className="relative flex">
        <Image src={keyListBgImage} alt="keyListBg" />
        <div className="absolute w-full h-full flex flex-col space-y-4 justify-start items-center">
          {children}
        </div>
      </div>
    </div>
  );
}

export default KeyListBox;
