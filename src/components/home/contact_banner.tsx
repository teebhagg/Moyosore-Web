import { coverImg } from "@/utils/data/images";
import React from "react";
import { Button } from "../ui/button";
import { urlFor } from "../../../sanity/client";
import { Link } from "lucide-react";

interface Props  {
  subTitle: string;
  link: string;
  title: string;
  banner: any
}

export default function ContactBanner(props: Props) {
  const { subTitle, link, title, banner } = props;
  return (
    <div
      style={{
        backgroundImage: `url('${urlFor(banner).url()}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[400px] rounded-lg">
      {/* Title and Button in center */}
      <div className="w-full h-full flex flex-col justify-center items-center space-y-8">
        <p id="subtitle" className=" text-white">
          {subTitle}
        </p>
        <h1 id="title" className="text-4xl font-bold text-white">
          {title}
        </h1>
        <a href="/contact">
        <Button variant="ghost" className="mt-4 text-white border hover:border-0">
          {link}
        </Button>
        </a>
      </div>
    </div>
  );
}
