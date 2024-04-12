"use client";
import BaseText from "@/app/components/atoms/BaseText";
import Button from "@/app/components/atoms/Button";
import backgroundImage from "@/app/ui/assets/img_key_list_bg_top.png";
import title from "@/app/ui/assets/img_key_list_title_01.png";
import protoshipImage from "@/app/ui/assets/img_protoship.png";
import { colors } from "@/app/ui/theme/colors";
import { useEthers } from "@usedapp/core";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

function MainView() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const { activateBrowserWallet, deactivate, account } = useEthers();

  const handleActivateWallet = useCallback(() => {
    if (account) {
      deactivate();
    } else {
      activateBrowserWallet();
    }
  }, [account, activateBrowserWallet, deactivate]);

  return (
    <div>
      <div className="absolute">
        <Image
          src={backgroundImage}
          alt="background"
          width={windowWidth}
          height={
            (backgroundImage.height * windowWidth) / backgroundImage.width
          }
        />
      </div>
      <div className="relative flex flex-col py-28 space-y-10 items-center">
        <Image src={title} alt="title" />
        <Image src={protoshipImage} alt="title" />
        <Button onClick={handleActivateWallet} width={260}>
          <BaseText
            label="connect wallet to enter"
            type="button2"
            color={colors["steeblue-dark"][10]}
          />
        </Button>
      </div>
    </div>
  );
}

export default MainView;
