import React from "react";
import { Logo, MenuIcon } from "../../constants/constants";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-24 flex items-center justify-center border border-1 border-black">
      <div className="flex flex-row justify-between w-[86%] items-center lg:w-[93%]">
        <div className="flex flex-row items-center gap-2">
          <Logo />
          <h1 className="text-[23px]">TokiCoin</h1>
        </div>
        <div>
          <ul className="hidden flex-row gap-8 lg:flex items-center">
            <SignedOut>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </SignedOut>
            <SignedIn>
              <ul className="hidden flex-row gap-8 lg:flex items-center">
                <li>Prices</li>
                <li>
                  <Link href="/coins">Coins</Link>
                </li>
                <li>Exchange</li>
              </ul>
            </SignedIn>
            <SignedIn>
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Button className="rounded-full w-8 h-8 outline-none scale-[110%]">
                    <PersonIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer">
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    Favorites
                  </DropdownMenuItem>
                  <SignOutButton>
                    <DropdownMenuItem className="flex justify-between cursor-pointer items-center">
                      Log Out
                      <span>
                        <LogoutIcon style={{ height: "15px", width: "auto" }} />
                      </span>
                    </DropdownMenuItem>
                  </SignOutButton>
                </DropdownMenuContent>
              </DropdownMenu>
            </SignedIn>
          </ul>
          <div className="flex lg:hidden">
            <SignedIn>
              <Sheet>
                <SheetTrigger>
                  <MenuIcon />
                </SheetTrigger>
                <SheetContent className="flex justify-center">
                  <ul className="text-center">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <SignOutButton>
                      <Button>Sign Out</Button>
                    </SignOutButton>
                  </ul>
                </SheetContent>
              </Sheet>
            </SignedIn>
            <SignedOut>
              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
