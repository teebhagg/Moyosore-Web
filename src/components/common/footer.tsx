// components/Footer.js

import { getContactData } from '@/utils/data/contact_data';
import { InstagramIcon, YoutubeIcon, MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = async () => {
  const { contactData } = await getContactData();
  const { socials } = contactData[0];
  return (
    <footer className="bg-white shadow-md flex flex-col items-center justify-center px-6 py-4">

      {/* Social media links */}
      <div className="flex mt-4 space-x-7">
        {socials.map((social: any, index: number) => (
            // Send mail when social link title lowercase is "email"
            <a
              key={index}
              href={ social.title === "Email" ? `mailto:${social.link}` : social.link}
              target="_blank"
              className="text-2xl hover:underline"
            >
              {/* Show Ico based on title */}
              {social.title === "Email" ? <MailIcon size={30} /> : social.title === "Instagram" ? <InstagramIcon size={30} /> : <YoutubeIcon size={30} />}
            </a>
          ))}
        </div>

      <p className="text-gray-500 text-sm mt-4">
        Copyright © 2023 Moyosore. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
