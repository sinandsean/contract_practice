import KeyListBox from "@/app/components/atoms/KeyListBox";
import clsx from "clsx";

function ClaimedKeysView({ className }: { className?: string }) {
  return (
    <div className={clsx(className)}>
      <KeyListBox label="Claimed keys" />
    </div>
  );
}

export default ClaimedKeysView;
