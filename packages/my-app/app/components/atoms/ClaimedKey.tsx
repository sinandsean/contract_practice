import BaseText from "@/app/components/atoms/BaseText";
import type { ClaimedKeyResponse } from "@/app/contract/contractHooks";
import chevRight from "@/app/ui/assets/ic_chev_right_small_steelblue_dark_10_18.png";
import keyA1 from "@/app/ui/assets/img_key_a_1.png";
import keyG1 from "@/app/ui/assets/img_key_g_1.png";
import keyG2 from "@/app/ui/assets/img_key_g_2.png";
import keyG3 from "@/app/ui/assets/img_key_g_3.png";
import keyH1 from "@/app/ui/assets/img_key_h_1.png";
import keyBgImage from "@/app/ui/assets/img_key_list_claimed_info_bg.png";
import { colors } from "@/app/ui/theme/colors";
import Image, { StaticImageData } from "next/image";
import { useCallback } from "react";

const MONTHS = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JUL",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

const IMAGE_BY_URI: Record<string, StaticImageData> = {
  img_key_g_3: keyG3,
  img_key_g_2: keyG2,
  img_key_g_1: keyG1,
  img_key_a_1: keyA1,
  img_key_h_1: keyH1,
};

function ClaimedKey({ tokenURI, claimedAt }: ClaimedKeyResponse) {
  const handleFormatDate = useCallback(() => {
    const date = new Date(claimedAt);
    const day = date.getDate().toString().padStart(2, "0");
    const month = MONTHS[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${month} ${year}`;
  }, [claimedAt]);

  return (
    <div className="flex-col space-y-4">
      <Image src={IMAGE_BY_URI[tokenURI]} alt="key_image" />
      <div className="relative flex">
        <Image src={keyBgImage} alt="key_bg" />
        <div className="absolute w-full h-full flex justify-center items-center">
          <BaseText
            label={`claimed | ${handleFormatDate()}`}
            type="caption2"
            color={colors["steeblue-dark"][10]}
          />
          <Image
            src={chevRight}
            alt="chevRight"
            color={colors["steeblue-dark"][10]}
          />
        </div>
      </div>
    </div>
  );
}

export default ClaimedKey;
