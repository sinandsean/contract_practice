import BaseText from "@/app/components/atoms/BaseText";
import ClaimedKey from "@/app/components/atoms/ClaimedKey";
import KeyListBox from "@/app/components/atoms/KeyListBox";
import { useClaimedKeys } from "@/app/contract/contractHooks";
import { colors } from "@/app/ui/theme/colors";
import clsx from "clsx";

function ClaimedKeysView({ className }: { className?: string }) {
  const claimedKeys = useClaimedKeys();

  return (
    <div
      className={clsx("relative flex justify-center items-center", className)}
    >
      <KeyListBox
        label={`Claimed keys [${claimedKeys ? claimedKeys.length : "0"}]`}
      >
        {claimedKeys && claimedKeys.length > 0 ? (
          <div className="w-full flex justify-evenly items-start px-8 space-x-2">
            {claimedKeys.map((key) => (
              <ClaimedKey key={key.tokenURI} {...key} />
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex flex-col justify-center items-center">
            <BaseText
              type="caption1"
              label="You have no Keys yet."
              color={colors.primary}
            />
            <BaseText
              type="caption1"
              label="Do more activities to claim Keys."
              color={colors.primary}
            />
          </div>
        )}
      </KeyListBox>
    </div>
  );
}

export default ClaimedKeysView;
