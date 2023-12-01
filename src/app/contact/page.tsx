import React from "react";
import Image from "next/image";

import { coverImg } from "@/utils/data/images";
import { getContactData } from "@/utils/data/contact_data";
import { urlFor } from "../../../sanity/client";
import { Link } from "lucide-react";

export default async function ContactPage() {
  const { contactData } = await getContactData();
  const { title, coverImage, socials } = contactData[0];
  return (
    <main className="max-w-[1800px] mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between space-x-5 py-24 px-6">
        <div className="w-full md:w-1/2">
          <Image
            src={urlFor(coverImage).url()}
            alt="Moyosore"
            width={400}
            height={400}
            className="w-full aspect-[4/5] md:aspect-[3/4] max-h-[700px] rounded-lg object-cover"
          />
        </div>
        <div className="w-full h-full space-y-20 md:w-1/2">
          <p className="text-4xl font-medium px-6 pt-16">{title}</p>
          <div className="flex flex-col space-y-5 px-6">
          {socials.map((social: any, index: number) => (
            // Send mail when social link title lowercase is "email"
            <a
              key={index}
              href={ social.title === "Email" ? `mailto:${social.link}` : social.link}
              target="_blank"
              className="text-2xl hover:underline"
            >
              {social.title}
            </a>
          ))}
          </div>
        </div>
      </div>
    </main>
  );
}
