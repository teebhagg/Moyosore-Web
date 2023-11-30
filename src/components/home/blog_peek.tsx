import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { coverImg } from "@/utils/data/images";
import Image from "next/image";

export default function BlogPeek() {
  return (
    <Card className="w-full p-0">
        <div className="flex flex-col lg:flex-row min-h-[400px] w-full">
            <div id="image" className="w-full lg:w-1/2 h-full">
                <Image
                    src={coverImg}
                    alt="Moyosore"
                    width={400}
                    height={400}
                    className="h-full min-h-[400px] w-full rounded-t-lg lg:rounded-l-lg object-cover"
                />
            </div>
            <div id="post" className="p-6 md:p-10 lg:p-16 w-1/2">
                <h1 className="text-5xl font-bold">Moyosore</h1>
                <p className="text-2xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                <Button variant="outline" className="mt-4"> Get Started </Button>
            </div>
        </div>
    </Card>
  );
}
