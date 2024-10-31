"use client";

import Container from "./Container";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import images from "@/constants/images";
import Image from "next/image";

const navOptions = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Passion",
    href: "/passion",
  },
  {
    title: "My Projects",
    href: "/my-projects",
  },
  {
    title: "Social Support",
    href: "/social-support",
  },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    router.push(id);
  };

  return (
    <div className="py-4 shadow-sm fixed top-0 left-0 right-0 bg-white z-max">
      <Container>
        <div className="flex flex-row justify-between items-center">
          <Link href="/">
            <div className="flex flex-row items-center gap-4">
              <Image src={images.logo} alt="logo" className="w-full h-14" />
            </div>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="flex flex-col gap-1 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span
              className={`block w-6 h-1 bg-black transition-transform ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-1 bg-black transition-opacity ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-1 bg-black transition-transform ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>

          {/* Desktop Menu (hidden in mobile) */}
          <ul className="hidden md:flex flex-row gap-10">
            {navOptions.map((nav) => (
              <button onClick={() => handleScrollTo(nav.href)} key={nav.title}>
                <li
                  className={`text-lg ${
                    pathname === nav.href
                      ? "text-primary-600 font-bold" // Active style
                      : "text-gray-800"
                  }`}
                >
                  {nav.title}
                </li>
              </button>
            ))}
          </ul>

          {/* Modal for Mobile Menu */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 w-3/4 rounded-lg relative">
                {/* Close Button */}
                <button
                  className="absolute top-4 right-4 text-2xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  &times;
                </button>

                {/* Mobile Menu */}
                <ul className="flex flex-col gap-4 items-center">
                  {navOptions.map((nav) => (
                    <button
                      onClick={() => {
                        handleScrollTo(nav.href);
                        setIsMenuOpen(false);
                      }}
                      key={nav.title}
                    >
                      <li
                        className={`text-lg ${
                          pathname === nav.href
                            ? "text-primary-600 font-bold" // Active style
                            : "text-gray-800"
                        }`}
                      >
                        {nav.title}
                      </li>
                    </button>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
