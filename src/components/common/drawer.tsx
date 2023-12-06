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
        <div className="flex flex-col mt-8 space-y-5">
          <SheetClose asChild>
            <Link href="/">
              <Button variant={"outline"} className="w-full">
                Home
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/portfolio">
              <Button variant={"outline"} className="w-full">
                Portfolio
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/blog">
              <Button variant={"outline"} className="w-full">
                Blog
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/projects">
              <Button variant={"outline"} className="w-full">
                Projects
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/about">
              <Button variant={"outline"} className="w-full">
                About
              </Button>
            </Link>
          </SheetClose>
          <SheetClose asChild>
            <Link href="/contact">
              <Button variant={"outline"} className="w-full">
                Contact
              </Button>
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}
