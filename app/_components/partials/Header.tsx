"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import MobileNavigation from "../MobileNavigation";
import NavLink from "../NavLink";
import Button from "../Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [forceActive, setForceActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = forceActive || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-2.5 pb-1 border-b border-primary 
        ${isActive ? "bg-background shadow-md " : "bg-transparent "}
      `}
    >
      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <div>
            {isActive ? (
              <Image
                src="/logo-2.svg"
                alt="logo"
                width={100}
                height={100}
                className="w-25 md:w-26 lg:w-32"
              />
            ) : (
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="w-25 md:w-26 lg:w-32"
              />
            )}
          </div>
          <div
            className={`hidden lg:flex gap-8 ${
              isActive ? "text-text-dark" : "text-text-light"
            }`}
          >
            <NavLink href="/" name="Overview" />
            <NavLink href="/about" name="About Us" />
            <NavLink href="/facilities" name="Facilities" />
            <NavLink href="/offers" name="Offers" />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Button type="link" href="/">
            Contact Us
          </Button>
          <MobileNavigation
            headerActive={isActive}
            setHeaderActive={setForceActive}
          />
        </div>
      </div>
    </header>
  );
}
