"use client";
import { useStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface UserData {
  createdAt: string; // Assuming ISO 8601 date-time format
  email: string;
  fullCode: {
    css: string;
    html: string;
    js: string;
  };
  updatedAt: string; // Assuming ISO 8601 date-time format
  __v: number;
  _id: string;
}
const HelperNav: React.FC = () => {
  const { user } = useUser();
  const { css, html, js } = useStore((state) => state);
  const email = user?.primaryEmailAddress?.emailAddress;
  const router = useRouter();
  const saveCode = async () => {
    try {
      const res = await axios.post("/api/save-code", {
        email,
        fullCode: {
          html,
          css,
          js,
        },
      });
      const data: UserData = await res.data;
      console.log(data);
      router.push(`/code/${data._id}`);
    } catch (error) {
      console.log("Error white saving code", error);
    }
  };
  return (
    <div className="h-[50px] px-12 mx-auto flex justify-between items-center shadow-lg bg-[#0E1525]">
      <Link
        href={"/"}
        className="font-bold text-xl font-mono border-b-4 border-b-[#0079F2] text-white"
      >
        CodeEdii
      </Link>
      <div className="flex items-center">
        <button
          className="bg-green-500 text-white rounded-md text-sm px-4 py-1"
          onClick={saveCode}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default HelperNav;
