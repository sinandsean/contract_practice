import BaseText from "@/app/components/atoms/BaseText";
import Button from "@/app/components/atoms/Button";
import ClaimedKey from "@/app/components/atoms/ClaimedKey";
import KeyListBox from "@/app/components/atoms/KeyListBox";
import { useClaimKey } from "@/app/contract/contractHooks";
import keyG3 from "@/app/ui/assets/img_key_g_3.png";
import { colors } from "@/app/ui/theme/colors";
import { useEthers } from "@usedapp/core";
import clsx from "clsx";
import { ethers } from "ethers";
import Image from "next/image";
import { useCallback } from "react";

function AvailableKeysView({ className }: { className?: string }) {
  const { account } = useEthers();
  const { send: claimKey } = useClaimKey();

  const handleClaimKey = useCallback(() => {
    if (!account) return;
    const signature = ethers.utils.hexZeroPad(account, 32);
    claimKey(signature);
  }, [account, claimKey]);

  return (
    <div
      className={clsx("relative flex justify-center items-center", className)}
    >
      <KeyListBox label="Available keys">
        <div className="flex flex-col justify-start items-center space-y-2">
          <Image src={keyG3} alt="item_g_3" />
          <Button width={260} onClick={handleClaimKey}>
            <BaseText label="claim" type="button2" color={colors["primary"]} />
          </Button>
          <BaseText
            label="more Keys to be added"
            type="caption1"
            color={colors.primary}
          />
        </div>
      </KeyListBox>
    </div>
  );
}

export default AvailableKeysView;
