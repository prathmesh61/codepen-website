import { UserData } from "@/lib/types";
import { Code, Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {
  item: UserData;
};

const Card = ({ item }: Props) => {
  return (
    <Link
      href={`/code/${item._id}`}
      className="w-full h-[100px] md:w-[350px] bg-[#272931] my-8"
    >
      <span className="font-bold bg-[#3c3e4b] text-white/45 px-4 text-sm flex items-center gap-2">
        <Code height={20} width={20} />
      </span>
      <div className="mx-2 my-1 flex justify-between items-center">
        <div className="">
          <h4 className="font-bold text-base font-mono">{item.projectName}</h4>
          <h6 className="font-medium text-xs">{item.email}</h6>
        </div>
        <Link
          href={`/code/${item._id}`}
          className="hover:bg-gray-500 hover:p-1 rounded-lg"
        >
          <Link2 height={30} width={30} />
        </Link>
      </div>
    </Link>
  );
};

export default Card;
