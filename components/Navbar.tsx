import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import { UserButton } from "@clerk/nextjs";
const Navbar: React.FC = () => {
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
          {/* <Facebook width={20} height={20} />
          <Twitter width={20} height={20} />
          <Instagram width={20} height={20} /> */}
          <UserButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
