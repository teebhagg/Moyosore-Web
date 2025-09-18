import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "../../../sanity/client";

interface Props {
  header: string;
  subheader: string;
  blogLink: string;
  image: any;
}

export default function BlogPeek(props: Props) {
  const { header, subheader, blogLink, image } = props;
  return (
    <Card className="w-full p-0 rounded-3xl overflow-hidden h-[900px]">
      <div className="flex flex-col lg:flex-row h-full w-full">
        <div id="image" className="w-full lg:w-[calc(35%)] h-full">
          <div className="relative h-full w-full">
            <Image
              src={urlFor(image).url()}
              alt="Moyosore"
              fill
              className="rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none object-cover object-center"
            />
          </div>
        </div>
        <div
          id="post"
          className="flex flex-col justify-between p-6 md:p-8 lg:p-10 lg:w-[calc(65%)]">
          <div className="space-y-5">
            <h1 className="text-xl md:text-2xl lg:text-4xl font-medium">
              {header}
            </h1>
            <p className="text-lg">{subheader}</p>
          </div>
          <div className="flex justify-end">
            <Link href="/blog">
              <Button variant="outline" className="mt-4">
                {" "}
                {blogLink}{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
