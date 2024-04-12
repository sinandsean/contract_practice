import KeyListBox from "@/app/components/atoms/KeyListBox";
import clsx from "clsx";

function AvailableKeysView({ className }: { className?: string }) {
  return (
    <div className={clsx(className)}>
      <KeyListBox label="Available keys" />
    </div>
  );
}

export default AvailableKeysView;
