import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

export function Drawer() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size={"icon"} className="md:hidden">
          <MenuIcon className="w-6 h-6 rounded" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col mt-5 space-y-5">
          <Link href="/">
            <Button variant={"outline"}>Home</Button>
          </Link>
          <Link href="/portfolio">
            <Button variant={"outline"}>Portfolio</Button>
          </Link>
          <Link href="/blog">
            <Button variant={"outline"}>Blog</Button>
          </Link>
          <Link href="/projects">
            <Button variant={"outline"}>Projects</Button>
          </Link>
          <Link href="/about">
            <Button variant={"outline"}>About</Button>
          </Link>
          <Link href="/contact">
            <Button variant={"outline"}>Contact</Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
