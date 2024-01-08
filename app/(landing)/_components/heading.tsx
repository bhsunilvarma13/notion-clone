"use client";

import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Loader } from "lucide-react";
import Link from "next/link";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="max-w-3xl h-full mx-auto text-center flex items-center justify-center pb-24">
      <div className="space-y-10">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          Write your notes with <br />
          <span className="underline">Slate</span>
        </h1>
        <div className="flex justify-center">
          {isLoading && (
            <div>
              <Loader className="animate-spin" />
            </div>
          )}
          {isAuthenticated && !isLoading && (
            <Link href="/documents">
              <Button>Your Slate</Button>
            </Link>
          )}
          {!isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
              <Button>Get Started</Button>
            </SignInButton>
          )}
        </div>
      </div>
    </div>
  );
};
