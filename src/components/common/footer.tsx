// components/Footer.js

import { FacebookIcon, InstagramIcon, YoutubeIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white shadow-md flex flex-col items-center justify-center px-6 py-4">

      {/* Social media links */}
      <div className="flex mt-4 space-x-5">
        <Link href="https://twitter.com/moyosore" target="_blank" rel="noopener noreferrer">
          <FacebookIcon size={20} />
        </Link>
        <Link href="https://twitter.com/moyosore" target="_blank" rel="noopener noreferrer">
          <InstagramIcon size={20} />
        </Link>
        <Link href="https://twitter.com/moyosore" target="_blank" rel="noopener noreferrer">
          <YoutubeIcon size={20} />
        </Link>
        </div>

      <p className="text-gray-500 text-sm mt-4">
        Copyright © 2023 Moyosore. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
