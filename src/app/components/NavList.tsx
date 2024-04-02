"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import scrollToSection from "@/utils/scrollToSection";
import burger from "../../../public/svg/burger.svg";
import cross from "../../../public/svg/cross.svg";

function NavList() {
  const [open, setOpen] = useState(false);

  const renderNavIcon = () => {
    if (open) {
      return <Image src={cross} alt="Close menu" width={30} height={30} />;
    } else {
      return <Image src={burger} alt="Open menu" width={30} height={30} />;
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    const menu = document.querySelector("#toggled-menu");
    const menuBtn = document.querySelector("#menu-btn");

    if (menu && menuBtn) {
      if (
        !menu.contains(event.target as Node) &&
        !menuBtn.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
  };

  const handleClick = (href: string) => {
    setOpen(false);
    scrollToSection(href);
  };

  const renderNavItem = (href: string, label: string) => (
    <li className="py-4 bg-white w-full text-center border-b md:py-0 md:mr-6">
      <button
        onClick={() => handleClick(href)}
        className="text-sm uppercase w-full hover:text-primary transition-all"
      >
        {label}
      </button>
    </li>
  );

  useEffect(() => {
    const menu = document.querySelector("#toggled-menu");
    const menuBtn = document.querySelector("#menu-btn");

    if (menu && menuBtn) {
      const expandedValue = open ? "true" : "false";
      menu.classList.toggle("-translate-y-full", !open);
      menu.classList.toggle("translate-y-0", open);
      menuBtn.setAttribute("aria-expanded", expandedValue);
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <button
        aria-label="toggle menu"
        aria-expanded="false"
        id="menu-btn"
        className="cursor-pointer w-7 md:hidden"
        onClick={() => setOpen((prev) => !prev)}
      >
        {renderNavIcon()}
      </button>
      <ul
        id="toggled-menu"
        className="w-full absolute top-full left-0 -translate-y-full -z-10 border-b border-gray-200 flex flex-col items-center transition-all duration-500 md:static md:z-10 md:w-min md:transform-none md:border-none md:flex-row"
      >
        {renderNavItem("#about", "Résumé")}
        {renderNavItem("#skills", "Compétences")}
        {renderNavItem("#contact", "Contact")}
      </ul>
    </>
  );
}

export default NavList;
