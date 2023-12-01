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
        <div id="image" className="w-full lg:w-1/2 h-full">
          <div className="relative h-full">
            <Image
              src={urlFor(image).url()}
              alt="Moyosore"
              width={900}
              height={900}
              className="h-full w-full max-h-[700px] lg:max-h-[900px] rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none object-cover object-center"
            />
          </div>
        </div>
        <div
          id="post"
          className="flex flex-col justify-between p-6 space-y-7 md:p-8 lg:p-12 lg:w-1/2">
          <h1 className="text-5xl font-medium">{header}</h1>
          <p className="text-lg">{subheader}</p>
          <Link href="/about">
            <Button variant="outline" className="mt-4">
              {" "}
              {aboutLink}{" "}
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
}
