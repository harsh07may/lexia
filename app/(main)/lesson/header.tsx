import { InfinityIcon, X } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import Image from "next/image";

type Props = {
  hearts: number;
  percentage: number;
  hasActiveSubscription: boolean;
};
export const Header = ({
  hasActiveSubscription,
  hearts,
  percentage,
}: Props) => {
  return (
    <div className="mx-auto flex w-full max-w-[1140px] items-center justify-between gap-x-7 px-10 pt-[20px] lg:pt-[50px]">
      <X
        className="cursor-pointer text-slate-500 transition hover:opacity-75"
        onClick={() => {}}
      />
      <Progress value={percentage} />
      <div className="flex items-center font-bold text-rose-500">
        <Image
          className="mr-2"
          src="./heart.svg"
          alt="heart"
          height={28}
          width={28}
        />
        {hasActiveSubscription ? (
          <InfinityIcon className="h-6 w-6 stroke-[3]" />
        ) : (
          hearts
        )}
      </div>
    </div>
  );
};
