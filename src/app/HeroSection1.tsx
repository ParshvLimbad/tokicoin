import { SignUpButton, SignedOut } from "@clerk/nextjs";
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection1 = () => {
  return (
    <>
      <SignedOut>
        <div className="h-[300px] w-full flex flex-row items-center justify-center pr-[60px] pl-[60px] md:pr-[80px] md:pl-[80px] lg:pr-[100px] lg:pl-[100px] mt-[60px]">
          <div className="max-w-[700px] gap-5 md:gap-4 lg:gap-6 flex flex-col items-center">
            <h1 className="text-[40px] font-semibold text-center flex-wrap md:text-[50px] lg:text-[70px] leading-[45px] tracking-tight md:leading-[60px] lg:leading-[70px]">
              Track Cryptocurrency <br />
              prices with <span className="text-[#FF630B]">ease.</span>
            </h1>
            <p className="flex flex-wrap text-center text-[14px] md:text-[18px] text-[#9D9D9D]">
              Tokicoin is your go-to app for the latest cryptocurrency prices.
              Stay informed with real-time data and never miss a market move.
            </p>
            <SignUpButton mode="modal">
              <Button
                className="rounded-full h-9 bg-[#FF630B] hover:bg-black text-black hover:text-white w-[100px]"
                style={{ border: "1px solid black" }}
              >
                Join Today!
              </Button>
            </SignUpButton>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default HeroSection1;
