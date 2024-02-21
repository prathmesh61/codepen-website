"use client";
import { useStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { UserData } from "@/lib/types";
import { Input } from "@/components/ui/input";
const HelperNav: React.FC = () => {
  const { user } = useUser();
  const [projectName, setProjectName] = useState<string>("");
  const { css, html, js } = useStore((state) => state);
  const email = user?.primaryEmailAddress?.emailAddress;
  const router = useRouter();
  const saveCode = async () => {
    if (projectName === "" || projectName === null) {
      return alert("Project name is required");
    }
    try {
      const res = await axios.post("/api/save-code", {
        email,
        projectName,
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
      <Input
        type="text"
        placeholder="Project name.."
        className="bg-transparent border-2 border-gray-600 w-[250px] text-white"
        value={projectName}
        required
        onChange={(e) => setProjectName(e.target.value)}
      />
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
