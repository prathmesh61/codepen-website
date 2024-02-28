"use client";

import Link from "next/link";
import React from "react";
import { UserButton, useUser } from "@clerk/nextjs";
const Navbar: React.FC = () => {
  const { user } = useUser();
  return (
    <nav className="h-[50px] max-w-screen-xl mx-auto flex justify-between items-center shadow-lg">
      <Link
        href={"/"}
        className="font-bold text-2xl font-mono border-b-4 border-b-[#0079F2]"
      >
        CodeEdii
      </Link>
      <div className="flex items-center gap-4">
        <Link
          href={"/editor"}
          className="bg-[#0053A6] hover:bg-[#0079F2] rounded-md text-xs px-4 py-1"
        >
          Compiler
        </Link>
        <div className="flex items-center gap-2">
          {user ? (
            <UserButton afterSignOutUrl="/sign-in" />
          ) : (
            <Link
              href={"/sign-up"}
              className="font-medium text-xs bg-black text-white px-4 py-1 rounded-lg border-2 border-gray-400"
            >
              sign up
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
