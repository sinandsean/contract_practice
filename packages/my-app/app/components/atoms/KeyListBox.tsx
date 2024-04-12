import keyListTitleImage from "@/app/ui/assets/img_key_list_title_bg.png";
import keyListBgImage from "@/app/ui/assets/img_key_list_asset_bg.png";
import clsx from "clsx";
import Image from "next/image";
import BaseText from "@/app/components/atoms/BaseText";
import { colors } from "@/app/ui/theme/colors";

function KeyListBox({
  className,
  label,
}: {
  className?: string;
  label: string;
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
      <Image src={keyListBgImage} alt="keyListBg" />
    </div>
  );
}

export default KeyListBox;
