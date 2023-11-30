// components/Navbar.js

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-[1800px] mx-auto flex justify-between items-center px-6 py-9">
        <div className="flex items-center space-x-8">
          <Link href="/">
            <p className="text-gray-500 hover:text-gray-700">Home</p>
          </Link>
          <Link href="/portfolio">
            <p className="text-gray-500 hover:text-gray-700">Portfolio</p>
          </Link>
          <Link href="/blog">
            <p className="text-gray-500 hover:text-gray-700">Blog</p>
          </Link>
        </div>

        <h1 className="text-3xl capitalize">Moyosore</h1>

        <div className="flex items-center space-x-8">
          <Link href="/projects">
            <p className="text-gray-500 hover:text-gray-700">Projects</p>
          </Link>
          <Link href="/about">
            <p className="text-gray-500 hover:text-gray-700">About</p>
          </Link>
          <Link href="/contact">
            <p className="text-gray-500 hover:text-gray-700">Contact</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
