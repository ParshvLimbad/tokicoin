"use client";
import Navbar from "../components/Navbar";

import { useSession } from "@clerk/nextjs";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";

export default function Home() {
  const session = useSession();
  return (
    <main className="font-sans">
      <Navbar />
      <HeroSection1 />
      <HeroSection2 />
    </main>
  );
}
