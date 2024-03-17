"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";

type Props = {
  label: string;
  iconSrc: string;
  href: string;
};

export const SidebarItem = ({ label, href, iconSrc }: Props) => {
  const pathName = usePathname();
  const active = pathName === href;
  return (
    <Button
      asChild
      variant={active ? "sidebarOutline" : "sidebar"}
      className="h-[52px] justify-start"
    >
      <Link href={href}>
        <Image
          src={iconSrc}
          alt={label}
          className="mr-5"
          height={32}
          width={32}
        />
        {label}
      </Link>
    </Button>
  );
};
