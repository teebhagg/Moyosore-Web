import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { coverImg } from "@/utils/data/images";
import Image from "next/image";
import { urlFor } from "../../../sanity/client";
import Link from "next/link";

interface Props {
  header: string;
  subheader: string;
  blogLink: string;
  image: any;
}

export default function BlogPeek(props: Props) {
  const { header, subheader, blogLink, image } = props;
  return (
    <Card className="w-full p-0">
      <div className="flex flex-col lg:flex-row min-h-[400px] w-full">
        <div id="image" className="w-full lg:w-1/2 h-full">
          <Image
            src={urlFor(image).url()}
            alt="Moyosore"
            width={400}
            height={400}
            className="h-full w-full max-h-[700px] lg:max-h-[900px] rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none object-cover object-center"
          />
        </div>
        <div
          id="post"
          className="flex flex-col justify-between p-6 space-y-7 md:p-8 lg:p-12 lg:w-1/2">
          <h1 className="text-3xl lg:text-5xl font-medium">{header}</h1>
          <p className="text-lg">{subheader}</p>
          <Link href="/blog">
            <Button variant="outline" className="mt-4">
              {" "}
              {blogLink}{" "}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
