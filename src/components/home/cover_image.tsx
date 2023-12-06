import { coverImg } from "@/utils/data/images";
import { Button } from "../ui/button";
import { urlFor } from "../../../sanity/client";
import Link from "next/link";

interface Props {
  title?: string;
  image?: any;
  aboutLink?: string;
}

export default function CoverImage(props: Props) {
  const { title, image, aboutLink } = props;
  return (
    <div
      style={{
        backgroundImage: `url('${urlFor(image[0]).url()}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[650px] md:h-[800px] rounded-lg">
      {/* Title and Button in center */}
      <div className="w-full h-full flex flex-col justify-center items-center space-y-16">
        <p className="text-2xl md:text-4xl text-center font-bold text-white">{title}</p>
        <Link href="/about">
        <Button variant="ghost" className="mt-4 text-white border hover:border-0">
          {aboutLink}
        </Button>
        </Link>
      </div>
    </div>
  );
}
