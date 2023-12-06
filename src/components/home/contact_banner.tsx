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
        <p id="title" className="text-2xl lg:text-4xl font-bold text-white text-center">
          {title}
        </p>
        <a href="/contact">
        <Button variant="ghost" size={"lg"} className="mt-4 text-white border hover:border-0">
          {link}
        </Button>
        </a>
      </div>
    </div>
  );
}
