"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/clerk-react";
import { useConvexAuth } from "convex/react";
import { Loader } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const { user } = useUser();

  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <div className="px-4 max-w-5xl mx-auto h-[10vh] flex items-center justify-between">
      <div>
        <h3 className="underline font-semibold text-2xl">
          <Link href="/">Slate</Link>
        </h3>
      </div>
      <div className="flex items-center space-x-2">
        <ModeToggle />

        {isLoading && (
          <div className="flex justify-center">
            <Loader className="animate-spin" />
          </div>
        )}
        {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button size="sm">Get Started</Button>
          </SignInButton>
        )}
        {isAuthenticated && !isLoading && (
          <UserButton afterSignOutUrl="/">
            <Avatar className="w-8 h-8">
              <AvatarImage src={user?.imageUrl} />
            </Avatar>
          </UserButton>
        )}
      </div>
    </div>
  );
};
