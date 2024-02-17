import Link from "next/link";
import React from "react";

const HelperNav: React.FC = () => {
  return (
    <div className="h-[50px] px-12 mx-auto flex justify-between items-center shadow-lg bg-[#0E1525]">
      <Link
        href={"/"}
        className="font-bold text-xl font-mono border-b-4 border-b-[#0079F2] text-white"
      >
        CodeEdii
      </Link>
      <div className="flex items-center gap-4">
        <button className="bg-green-500 text-white rounded-md text-sm px-4 py-1">
          Save
        </button>
        <button className="bg-gray-700 text-white rounded-md text-sm px-4 py-1">
          Share
        </button>
      </div>
    </div>
  );
};

export default HelperNav;
