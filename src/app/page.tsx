"use client";
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SignOutButton, SignedIn, SignedOut, useSession } from "@clerk/nextjs";

export default function Home() {
  const session = useSession();
  return (
    <main>
      <Navbar />
    </main>
  );
}
