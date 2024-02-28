import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="px-12 mx-auto h-screen flex flex-col justify-center items-center shadow-lg bg-[#0E1525] gap-4">
      <h2 className="font-mono text-3xl text-white">
        Project has been deleted...
      </h2>
      <div className="flex items-center justify-center gap-4">
        <Link
          href={"/editor"}
          className="font-medium text-sm bg-green-500 text-white px-6 py-1 rounded-lg"
        >
          New Project
        </Link>
        <Link
          href={"/"}
          className="font-medium text-sm bg-black text-white px-6 py-1 rounded-lg border-2 border-gray-400"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default page;
