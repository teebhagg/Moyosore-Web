import Image from "next/image";
import React from "react";
import { urlFor } from "../../../sanity/client";
import Link from "next/link";

interface Props {
  header: string;
  blogLink: string;
  image: any;
}

export default function RemainingBlogCard(props: Props) {
  const { header, blogLink, image } = props;
  return (
    <Link href="/blog/[id]" as={`/blog/${blogLink}`} className="">
      <div className="flex md:hidden items-center space-x-5 w-full rounded-md hover:border hover:bg-slate-200">
        <Image
          src={urlFor(image).url()}
          alt="Moyosore"
          width={400}
          height={400}
          className="max-w-[150px] max-h-[150px] aspect-[4/4] rounded-lg object-cover"
        />
        <p>{header}</p>
      </div>

      <div
        style={{
          backgroundImage: `url('${urlFor(image).url()}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="hidden md:flex justify-center items-center h-[150px] space-x-5 w-full rounded-md">
        <p className="text-3xl text-white">{header}</p>
      </div>
    </Link>
  );
}
