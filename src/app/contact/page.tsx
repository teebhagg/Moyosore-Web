import Image from "next/image";

import { ContactForm } from "@/components/contact/contact_form";
import { getContactData } from "@/utils/data/contact_data";
import { urlFor } from "../../../sanity/client";

export default async function ContactPage() {
  const { contactData } = await getContactData();
  const { title, coverImage, socials } = contactData[0];
  return (
    <main className="max-w-[1800px] md:mx-auto">
      <div className="flex flex-col md:flex-row items-start justify-between space-x-5 pt-[150px] pb-24 px-6">
        <div className="w-full md:w-1/2">
          <Image
            src={urlFor(coverImage).url()}
            alt="Moyosore"
            width={400}
            height={400}
            className="w-full aspect-[4/5] rounded-lg object-cover"
          />
        </div>
        <div className="w-full h-full md:space-y-20 md:w-1/2">
          <p className="text-2xl md:text-4xl font-medium px-6 pt-16">{title}</p>
        </div>
      </div>
      <div className="border-t-2 mb-24 mx-6" />
      <ContactForm />
    </main>
  );
}
