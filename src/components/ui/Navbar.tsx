import React from "react";
import { Logo, MenuIcon } from "../../../constants/constants";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="w-full h-20 flex items-center justify-center">
      <div className="flex flex-row justify-between w-[86%] items-center lg:w-[95%]">
        <div className="flex flex-row items-center gap-2">
          <Logo />
          <h1 className="text-[23px]">TokiCoin</h1>
        </div>
        <div>
          <ul className="hidden flex-row gap-8 lg:flex items-center">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <SignUpButton mode="modal">
              <Button>Sign Up</Button>
            </SignUpButton>
            <SignOutButton>
              <Button>Sign Out</Button>
            </SignOutButton>
          </ul>
          <div className="flex lg:hidden">
            <Sheet>
              <SheetTrigger>
                <MenuIcon />
              </SheetTrigger>
              <SheetContent className="flex justify-center">
                <ul className="text-center">
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
