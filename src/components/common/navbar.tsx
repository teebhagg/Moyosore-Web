"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Drawer } from "./drawer";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isTransparent = isHomePage && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent ? "bg-transparent shadow-none" : "bg-white shadow-md"
      }`}>
      <div className="max-w-[1800px] mx-auto flex justify-between items-center px-6 py-5 md:py-9">
        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <Link href="/">
            <p
              className={`hover:opacity-80 transition-colors ${
                isTransparent
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}>
              Home
            </p>
          </Link>
          <Link href="/portfolio">
            <p
              className={`hover:opacity-80 transition-colors ${
                isTransparent
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}>
              Portfolio
            </p>
          </Link>
          <Link href="/blog">
            <p
              className={`hover:opacity-80 transition-colors ${
                isTransparent
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}>
              Blog
            </p>
          </Link>
          <Link href="/prayer-request">
            <p
              className={`hover:opacity-80 transition-colors ${
                isTransparent
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}>
              Prayer Request
            </p>
          </Link>
        </div>

        <Link
          href="/"
          className={`text-xl md:text-2xl font-bold capitalize transition-colors ${
            isTransparent ? "text-white" : "text-gray-900"
          }`}>
          Moyosore
        </Link>
        <Drawer isTransparent={isTransparent} />

        <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
          <Link href="/testimonies">
            <p
              className={`hover:opacity-80 transition-colors ${
                isTransparent
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}>
              Testimonies
            </p>
          </Link>
          <Link href="/projects">
            <p
              className={`hover:opacity-80 transition-colors ${
                isTransparent
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}>
              Projects
            </p>
          </Link>
          <Link href="/about">
            <p
              className={`hover:opacity-80 transition-colors ${
                isTransparent
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}>
              About
            </p>
          </Link>
          <Link href="/contact">
            <p
              className={`hover:opacity-80 transition-colors ${
                isTransparent
                  ? "text-white"
                  : "text-gray-500 hover:text-gray-700"
              }`}>
              Contact
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
