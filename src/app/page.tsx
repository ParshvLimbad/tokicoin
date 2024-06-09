"use client";
import Navbar from "@/components/ui/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SignOutButton, SignedIn, SignedOut, useSession } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const session = useSession();
  return (
    <main>
      <Navbar />
    </main>
  );
}
