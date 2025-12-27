import { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import NavLink from "./NavLink";

export default function MobileNavigation({
  headerActive,
  setHeaderActive,
}: {
  headerActive: boolean;
  setHeaderActive: (value: boolean) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNav = () => {
    setIsOpen(!isOpen);
    setHeaderActive(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setHeaderActive(false);
  };

  return (
    <>
      <button
        className={`text-3xl lg:hidden ${
          headerActive ? "text-text-dark" : "text-text-light"
        }`}
        onClick={handleOpenNav}
      >
        {isOpen ? <IoMdClose /> : <IoMdMenu />}
      </button>

      <div
        className={`absolute inset-0   min-h-screen bg-background  top-21 transform transition ease-in-out duration-300 ${
          isOpen ? "translate-x-0 " : "translate-x-full "
        }`}
      >
        <div className="p-4">
          <div className=" flex flex-col ">
            <NavLink href="/" name="Overview" onClick={closeMenu} />
            <NavLink href="/about" name="About Us" onClick={closeMenu} />
            <NavLink href="/facilities" name="Facilities" onClick={closeMenu} />
            <NavLink href="/offers" name="Offers" onClick={closeMenu} />
          </div>
        </div>
      </div>
    </>
  );
}
