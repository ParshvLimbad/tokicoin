import { SignUpButton, SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import InsightsIcon from "@mui/icons-material/Insights";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import React from "react";

const HeroSection2 = () => {
  return (
    <>
      <SignedOut>
        <div className="h-screen w-full flex flex-row justify-center pr-[60px] pl-[60px] md:pr-[80px] md:pl-[80px] lg:pr-[100px] lg:pl-[100px] mt-[200px]">
          <div className="max-w-[700px] gap-5 md:gap-4 lg:gap-6 flex flex-col items-center">
            <h1 className="text-[40px] font-semibold text-center flex-wrap md:text-[50px] lg:text-[70px] leading-[45px] tracking-tight md:leading-[60px] lg:leading-[70px] mb-[2rem]">
              Your Ultimate
              <br />
              Crypto Companion
            </h1>
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:gap-16">
              <div className="p-5 border border-1 border-black rounded-2xl">
                <div className="flex flex-col justify-center items-center w-[350px]">
                  <div className="h-[16rem] w-[16rem] bg-[#FF630B] rounded-xl lg:h-[22rem] lg:w-[22rem] px-5 py-4 flex justify-between flex-col">
                    <p className="text-[25px] font-medium text-white">
                      Real-Time
                      <br />
                      Tracking
                    </p>
                    <div className="w-full flex justify-end">
                      <InsightsIcon
                        style={{
                          height: "5rem",
                          width: "auto",
                          fontWeight: "lightest",
                          color: "white",
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-justify mt-5 font-regular">
                    Get up-to-the-second updates on cryptocurrency prices from
                    major exchanges. Stay informed and make timely decisions
                    with accurate data at your fingertips.
                  </p>
                </div>
              </div>
              <div className="p-5 border border-1 border-black rounded-2xl">
                <div className="flex flex-col justify-center items-center w-[350px]">
                  <div className="h-[16rem] w-[16rem] bg-[#FF630B] rounded-xl lg:h-[22rem] lg:w-[22rem] px-5 py-4 flex justify-between flex-col">
                    <p className="text-[25px] font-medium text-white">
                      Market Analysis
                    </p>
                    <div className="w-full flex justify-end">
                      <QueryStatsIcon
                        style={{
                          height: "5rem",
                          width: "auto",
                          fontWeight: "lightest",
                          color: "white",
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-justify mt-5 font-regular">
                    Analyze market trends and movements with our comprehensive
                    tools. Make well-informed investment decisions and stay
                    ahead in the crypto world.
                  </p>
                </div>
              </div>
              <div className="p-5 border border-1 border-black rounded-2xl">
                <div className="flex flex-col justify-center items-center w-[350px]">
                  <div className="h-[16rem] w-[16rem] bg-[#FF630B] rounded-xl lg:h-[22rem] lg:w-[22rem] px-5 py-4 flex justify-between flex-col">
                    <p className="text-[25px] font-medium text-white">
                      Custom Alerts
                    </p>
                    <div className="w-full flex justify-end">
                      <ReportProblemIcon
                        style={{
                          height: "5rem",
                          width: "auto",
                          fontWeight: "lightest",
                          color: "white",
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-justify mt-5 font-regular">
                    Set personalized notifications for price changes and market
                    trends. Never miss an important update and act quickly with
                    our customizable alerts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SignedOut>
    </>
  );
};

export default HeroSection2;
