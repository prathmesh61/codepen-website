"use client";
import { useStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { CheckCheck, XCircle } from "lucide-react";
const HelperNav: React.FC = () => {
  const { user } = useUser();
  const [projectName, setProjectName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { css, html, js } = useStore((state) => state);
  const email = user?.primaryEmailAddress?.emailAddress;
  const router = useRouter();
  const saveCode = async () => {
    setLoading(true);
    if (projectName === "" || projectName === null) {
      return alert("Project name is required");
    }
    try {
      await axios.post("/api/code", {
        email,
        projectName,
        fullCode: {
          html,
          css,
          js,
        },
      });
      toast.success("Code saved!", {
        icon: (
          <CheckCheck
            className="bg-green-500 text-white p-1 rounded-full"
            color="white"
            width={20}
            height={20}
          />
        ),
      });
      setLoading(false);
      router.push("/");
      router.refresh();
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log("error on Axios saveCode", error.message);
      }
      toast.error("Could not save.", {
        icon: (
          <XCircle
            className="bg-red-500 text-white p-1 rounded-full"
            color="white"
            width={20}
            height={20}
          />
        ),
      });
      console.log("Error white saving code", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative h-[50px] px-12 mx-auto flex justify-between items-center shadow-lg bg-[#0E1525]">
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
        {email ? (
          <button
            className="bg-green-500 text-white rounded-md text-sm px-4 py-1 w-fit"
            onClick={saveCode}
            disabled={loading}
          >
            {loading ? "Saving.." : "Save"}
          </button>
        ) : (
          <Link href={"/sign-in"} className="text-sm font-mono text-white">
            sign up to save code
          </Link>
        )}
      </div>
    </div>
  );
};

export default HelperNav;
