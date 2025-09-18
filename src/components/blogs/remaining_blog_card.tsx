import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../sanity/client";

interface Props {
  header: string;
  blogLink: string;
  image: any;
}

export default function RemainingBlogCard(props: Props) {
  const { header, blogLink, image } = props;
  if (!image) return null;
  return (
    <Link href="/blog/[id]" as={`/blog/${blogLink}`} className="">
      <div className="flex md:hidden items-center space-x-5 w-full p-4 rounded-3xl hover:border hover:bg-slate-200 h-[120px]">
        <div className="relative w-[100px] h-[100px] flex-shrink-0">
          <Image
            src={urlFor(image).url()}
            alt="Moyosore"
            fill
            className="rounded-2xl object-cover"
          />
        </div>
        <p>{header}</p>
      </div>

      <div
        style={{
          backgroundImage: `url('${urlFor(image).url()}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="hidden md:flex justify-center items-center h-[200px] w-full rounded-3xl">
        <p className=" text-xl text-white text-center">{header}</p>
      </div>
    </Link>
  );
}
