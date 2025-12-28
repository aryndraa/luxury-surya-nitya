import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | "link";
  href?: string;
  style?: "primary" | "secondary";
  onclick?: () => void;
}

export default function Button({
  type,
  href,
  children,
  onclick,
  style = "primary",
}: ButtonProps) {
  if (type === "link" && href) {
    return (
      <Link
        href={href}
        className="bg-primary hover:bg-primary/80 font-playfair-display px-4 py-2 text-base md:text-lg text-white  tracking-wider font-medium "
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type !== "link" ? type : "button"}
      onClick={onclick}
      className={`font-playfair-display px-4 py-2 text-base md:text-lg  tracking-wider font-medium border border-primary transition ease-in-out  ${
        style === "secondary"
          ? "bg-transparent hover:bg-primary text-primary hover:text-white"
          : "bg-primary hover:bg-primary/80 text-white"
      }`}
    >
      {children}
    </button>
  );
}
