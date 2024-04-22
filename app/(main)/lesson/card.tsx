import Image from "next/image";
import { useCallback } from "react";

import { cn } from "@/lib/utils";
import { challenges } from "@/db/schema";

type Props = {
  id: number;
  imageSrc: string | null;
  audioSrc: string | null;
  text: string;
  shortcut: string;
  selected?: boolean;
  onClick: () => void;
  disabled?: boolean;
  status?: "correct" | "wrong" | "none";
  type: (typeof challenges.$inferSelect)["type"];
};
const Card = ({
  id,
  imageSrc,
  audioSrc,
  text,
  shortcut,
  selected,
  disabled,
  status,
  type,
  onClick,
}: Props) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "bottom-2 h-full cursor-pointer rounded-xl border-b-4 p-4 hover:bg-black/5 active:border-b-2 lg:p-6",
        selected && "border-sky-300 bg-sky-100 hover:bg-sky-100",
        selected &&
          status === "correct" &&
          "border-green-300 bg-green-100 hover:bg-green-100",
        selected &&
          status === "wrong" &&
          "border-rose-300 bg-rose-100 hover:bg-rose-100",
        disabled && "pointer-events-none hover:bg-white",
        type === "ASSIST" && "w-full lg:p-3",
      )}
    >
      {imageSrc && (
        <div className="relative mb-4 aspect-square max-h-[80px] w-full lg:max-h-[160px]">
          <Image src={imageSrc} fill alt="text"></Image>
        </div>
      )}

      <div
        className={cn(
          "flex items-center justify-between",
          text === "ASSIST" && "flex-col-reverse",
        )}
      >
        {type === "ASSIST" && <div />}
        <p
          className={cn(
            "text-sm text-neutral-600 lg:text-base",
            selected && "text-sky-500",
            selected && status === "correct" && "text-green-500",
            selected && status === "wrong" && "text-rose-500",
          )}
        >
          {text}
        </p>
        <div
          className={cn(
            "flex h-[20px] w-[20px] items-center justify-center rounded-lg border-2 text-xs font-semibold text-neutral-400 lg:h-[30px] lg:w-[30px] lg:text-[15px]",
            selected && "border-sky-300 text-sky-500",
            selected &&
              status === "correct" &&
              "border-green-500 text-green-500",
            selected && status === "wrong" && "border-rose-500 text-rose-500",
          )}
        >
          {shortcut}
        </div>
      </div>
    </div>
  );
};
export default Card;
