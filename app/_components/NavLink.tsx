"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  name: string;
  onClick?: () => void;
}

export default function NavLink({ href, name, onClick }: NavLinkProps) {
  const pathname = usePathname();

  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`font-playfair-display relative font-semibold lg:font-medium pb-4 mb-4 lg:pb-2 lg:mb-0 border-b lg:border-0 flex  items-center  gap-2 transition-colors duration-300
        ${
          isActive
            ? "text-text-dark lg:text-inherit"
            : "text-text-dark/60 border-text-dark/30  lg:text-inherit "
        }
      `}
    >
      {isActive && (
        <span className="min-w-1.5 min-h-1.5 bg-primary rounded-full lg:absolute transform -translate-x-1/2 left-1/2 -bottom-3 "></span>
      )}
      {name}
    </Link>
  );
}
