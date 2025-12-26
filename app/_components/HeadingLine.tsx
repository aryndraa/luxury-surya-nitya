import React from "react";
import { FaDiamond } from "react-icons/fa6";

export default function HeadingLine({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-12 w-full justify-center  ">
      <div className="w-full hidden lg:flex items-center text-primary ">
        <hr className="w-full" />
        <FaDiamond />
      </div>
      {children}
      <div className="w-full hidden lg:flex items-center text-primary ">
        <FaDiamond />
        <hr className="w-full" />
      </div>
    </div>
  );
}
