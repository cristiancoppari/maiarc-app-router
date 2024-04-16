"use client";

import type { NavLink } from "@/types/links";

import { useState } from "react";
import { useRouter, usePathname } from "@/lang/navigation";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Link } from "@/lang/navigation";

import Burger from "@/components/buttons/burger";
import Arrow from "@/components/arrow";

import useDesktop from "@/hooks/useDesktop";
import { cn } from "@/lib/utils";

type HeaderProps = {
  leftNavKeys: NavLink[];
  rightNavKeys: NavLink[];
  destinationsKeys: NavLink[];
};

const dropdownVariants = {
  hidden: {
    opacity: 0,
    display: "none",
    height: 0,
  },
  visible: {
    opacity: 1,
    display: "flex",
    height: "auto",
    transition: { duration: 0.5 },
  },
};

export default function Header({ leftNavKeys, rightNavKeys, destinationsKeys }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isDesktop = useDesktop();

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header fixed left-0 top-0 z-10 w-full backdrop-blur-sm">
      <div className="bg-slate-100">
        <div className="container flex h-8 items-center justify-end gap-4">
          <button className={cn("uppercase", locale === "es" && "font-bold")} onClick={() => changeLanguage("es")}>
            ESPAÑOL
          </button>
          <span className="text-slate-900">l</span>
          <button className={cn("uppercase", locale === "en" && "font-bold")} onClick={() => changeLanguage("en")}>
            ENGLISH
          </button>
        </div>
      </div>
      <div className="bg-black/90">
        <div className={cn("container mx-auto flex h-16 items-center justify-between md:h-24 md:justify-center")}>
          <Link href="/" className="block md:hidden">
            <img src="/images/logo-gray.png" alt="" className="h-auto w-20" />
          </Link>

          <Burger classes="block md:hidden" onClick={toggleMenu} isOpen={isMenuOpen} />

          <ul
            className={cn(
              "absolute right-0 top-24 z-20 hidden w-full flex-col justify-around transition-colors duration-500 md:relative md:top-0 md:flex md:h-full md:flex-row md:items-center md:border-none",
              isMenuOpen && "flex bg-black",
            )}
          >
            {leftNavKeys.map((link) => {
              if (link.href === "/destinos") {
                return (
                  <li
                    className="relative grid place-items-center p-4 text-sm font-light uppercase text-slate-200 transition-all duration-300 ease-in-out hover:text-slate-100 md:h-full md:p-0 md:pt-4"
                    key={link.label}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className={cn(pathname === "/destinos" && "--active")}>
                      <span>{link.label}</span>
                      <Arrow classes="w-14 block mx-auto mt-1 arrow" />
                    </div>
                    <motion.ul
                      className="top-full flex flex-col items-center bg-black md:absolute md:items-start"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate={isHovered ? "visible" : "hidden"}
                    >
                      {destinationsKeys.map((item) => (
                        <li
                          className="w-40 px-4 py-2 text-sm font-light uppercase text-slate-200 opacity-80 transition-all duration-300 ease-in-out hover:text-slate-100"
                          key={item.label}
                        >
                          <Link
                            href={item.href}
                            className={cn(
                              "nav-link grid place-items-center",
                              // `/${router.query.destino as string}` === `/${item.href.split("/")[2]}` && "--active",
                            )}
                          >
                            <span>{item.label}</span>
                            <Arrow classes="w-14 block mx-auto mt-1 arrow" />
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  </li>
                );
              } else {
                return (
                  <li className="grid place-items-center p-4 text-center md:p-0 md:pt-4" key={link.label}>
                    <Link
                      href={link.href}
                      className={cn(
                        "nav-link text-sm font-light uppercase text-slate-200 transition-all duration-300 ease-in-out hover:text-slate-100",
                        pathname === link.href && "--active",
                      )}
                    >
                      <span>{link.label}</span>
                      <Arrow classes="w-14 block mx-auto mt-1 arrow" />
                    </Link>
                  </li>
                );
              }
            })}

            <Link href="/" className="hidden md:block">
              <img src="/images/logo-gray.png" alt="" className="h-auto w-20" />
            </Link>

            {rightNavKeys.map((link) => {
              return (
                <li className="grid place-items-center p-4 text-center md:p-0 md:pt-4" key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      "nav-link text-sm font-light uppercase text-slate-200 transition-all duration-300 ease-in-out hover:text-slate-100",
                      pathname === link.href && "--active",
                    )}
                  >
                    <span>{link.label}</span>
                    <Arrow classes="w-14 block mx-auto mt-1 arrow" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </header>
  );
}
