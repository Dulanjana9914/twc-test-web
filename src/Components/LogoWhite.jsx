"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import logoWhite from "../../public/assets/LogoWhiteText.svg";

export default function LogoWhite() {
  const route = useRouter();
  return (
    <div>
      <div>
        <Image
          src={logoWhite}
          alt="logoWhite"
          className="cursor-pointer md:w-[138px] md:h-[92px] mb-20"
          onClick={() => route.push("/")}
        />
      </div>
    </div>
  );
}
