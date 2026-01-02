"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MobileNavigation from "../MobileNavigation";
import NavLink from "../NavLink";
import Button from "../Button";

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [forceActive, setForceActive] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // background aktif saat scroll
      setScrolled(currentScrollY > 50);

      // hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHideHeader(true);
      } else {
        setHideHeader(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activePages = ["/about", "/facilities", "/offers", "/contact"];
  const isRouteActive = activePages.includes(pathname);

  const isActive = isRouteActive || scrolled || forceActive;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transform transition-all duration-300 border-b border-primary
        ${isActive ? "bg-background" : "bg-transparent"}
        ${hideHeader && !forceActive ? "-translate-y-full" : "translate-y-0"}
      `}
    >
      <div className="2xl:container mx-auto px-4 md:px-8 lg:px-12 py-2.5 pb-1 flex justify-between items-center">
        <div className="flex items-center gap-12">
          <Image
            src={isActive ? "/logo-2.svg" : "/logo.svg"}
            alt="logo"
            width={100}
            height={100}
            className="w-25 md:w-26 lg:w-32"
            priority
          />

          <div
            className={`hidden lg:flex gap-8 transition-colors duration-300 ${
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
          <Button type="link" href="/contact">
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
