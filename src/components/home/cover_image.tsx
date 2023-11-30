import { coverImg } from "@/utils/data/images";
import { Button } from "../ui/button";

export default function CoverImage() {
  return (
    <div
      style={{
        backgroundImage: `url('${coverImg}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[800px] rounded-lg">
      {/* Title and Button in center */}
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h1 className="text-5xl font-bold text-white">Moyosore</h1>
        <Button variant="outline" className="mt-4">
          Get Started
        </Button>
      </div>
    </div>
  );
}
