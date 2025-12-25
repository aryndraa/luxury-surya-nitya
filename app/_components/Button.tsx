import Link from "next/link";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | "link";
  href?: string;
}

export default function Button({ type, href, children }: ButtonProps) {
  if (type === "link" && href) {
    return (
      <Link
        href={href}
        className="bg-primary font-playfair-display px-4 py-2 text-base md:text-lg text-white  tracking-wider font-medium "
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type !== "link" ? type : "button"}
      className="bg-primary font-playfair-display px-4 py-2 text-base md:text-lg text-white  tracking-wider font-medium"
    >
      {children}
    </button>
  );
}
