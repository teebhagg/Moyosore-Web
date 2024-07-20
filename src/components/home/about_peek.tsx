import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { coverImg } from "@/utils/data/images";
import { urlFor } from "../../../sanity/client";

interface Props {
  header: string;
  subheader: string;
  image: any;
  aboutLink: string;
}

export default function AboutPeek(props: Props) {
  const { header, subheader, aboutLink, image } = props;
  return (
    <Card className="w-full p-0">
      <div className="flex flex-col lg:flex-row min-h-[400px] w-full">
        <div id="image" className="w-full lg:w-[calc(35%)] h-full">
          <div className="relative h-full">
            <Image
              src={urlFor(image).url()}
              alt="Moyosore"
              width={500}
              height={500}
              className="h-full w-full max-h-[700px] lg:h-full rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none object-cover object-center"
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
            <Link href="/about">
              <Button variant="outline" className="mt-4">
                {" "}
                {aboutLink}{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
