"use client";
import BaseText from "@/app/components/atoms/BaseText";
import Button from "@/app/components/atoms/Button";
import AvailableKeysView from "@/app/components/views/AvailableKeysView";
import ClaimedKeysView from "@/app/components/views/ClaimedKeysView";
import walletImage from "@/app/ui/assets/ic_wallet_primary.png";
import backgroundImage from "@/app/ui/assets/img_key_list_bg_top.png";
import titleImage from "@/app/ui/assets/img_key_list_title_01.png";
import protoshipImage from "@/app/ui/assets/img_protoship.png";
import walletBgImage from "@/app/ui/assets/img_walletaddress_bg.png";
import { colors } from "@/app/ui/theme/colors";
import { useEthers } from "@usedapp/core";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const LINEAR_GRADIENT_BACKROUND = {
  backgroundImage:
    "linear-gradient(90deg, #D7DAF3 0%, #D1DDF5 16.81%, #D4E1F8 26.36%, #D6E1F6 31.05%, #DFE3F4 34.93%, #F3E5EE 45.75%, #F6E4EB 49.78%, #F1E9F1 56.68%, #EBE9F5 61.89%, #E6EEFA 68.31%, #E3F0FA 75.49%, #E4F1FC 81%, #E0F2FA 100%)",
};

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
    <div className="relative">
      <div className="absolute w-full h-full flex flex-col">
        <Image
          src={backgroundImage}
          alt="background"
          width={windowWidth}
          height={
            (backgroundImage.height * windowWidth) / backgroundImage.width
          }
        />
        <div className="w-full h-full" style={LINEAR_GRADIENT_BACKROUND}></div>
      </div>
      <div className="py-20">
        {account && (
          <button
            onClick={deactivate}
            type="button"
            className="absolute top-4 right-4 flex justify-center items-center"
          >
            <Image src={walletBgImage} alt="wallet_bg" />
            <div className="absolute w-full h-full flex space-x-2 justify-center items-center">
              <Image
                width={24}
                height={24}
                src={walletImage}
                alt="wallet"
                color={colors.primary}
              />
              <BaseText
                type="caption1"
                color={colors["primary"]}
                label={
                  account.substring(0, 6) +
                  "..." +
                  account.substring(account.length - 4)
                }
              />
            </div>
          </button>
        )}
        <div className="relative flex flex-col items-center space-y-12">
          <Image src={titleImage} alt="title" />
          <Image src={protoshipImage} alt="protoship" />
          {account ? (
            <div className="mx-12 flex flex-col space-y-8">
              <AvailableKeysView />
              <ClaimedKeysView />
            </div>
          ) : (
            <Button onClick={handleActivateWallet} width={260}>
              <BaseText
                label="connect wallet to enter"
                type="button2"
                color={colors["steeblue-dark"][10]}
              />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MainView;
