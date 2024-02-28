"use client";
import { UserData } from "@/lib/types";
import { CheckCheck, Code, Link2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
type Props = {
  item: UserData;
};

const Card = ({ item }: Props) => {
  const router = useRouter();
  async function handleDelete() {
    try {
      const { data } = await axios.delete(`/api/delete-code/${item._id}`);
      toast.success(data, {
        icon: (
          <CheckCheck
            className="bg-green-500 text-white p-1 rounded-full"
            color="white"
            width={20}
            height={20}
          />
        ),
      });
      router.push("/message");
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log("error on Axios handleDelete", error.message);
      }
      console.log("error on server handleDelete", error);
    }
  }
  return (
    <div className="w-full h-[100px] md:w-[350px] bg-[#272931] my-8">
      <span className="font-bold bg-[#3c3e4b] text-white/45 px-4 text-sm flex items-center gap-2">
        <Code height={20} width={20} />
      </span>
      <div className="mx-2 my-1 flex justify-between items-center">
        <div className="">
          <h4 className="font-bold text-base font-mono">{item.projectName}</h4>
          <Link href={`/profile/${item.email}`} className="font-medium text-xs">
            {item.email}
          </Link>
        </div>
        <Link
          href={`/code/${item._id}`}
          className="hover:bg-gray-500 hover:p-1 rounded-lg"
        >
          <Link2 height={25} width={25} />
        </Link>
      </div>

      <Dialog>
        <DialogTrigger className="text-xs mx-2 my-1">Option</DialogTrigger>
        <DialogContent className="bg-[#0E1525]">
          <DialogHeader>
            <DialogTitle className="text-white">
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription className="text-white">
              This will permanently delete your data from our servers.
            </DialogDescription>
          </DialogHeader>

          <button
            className="bg-red-500 text-white rounded-lg text-sm w-fit px-2 py-1"
            onClick={handleDelete}
          >
            delete
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Card;
