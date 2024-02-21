import { UserData } from "@/lib/types";
import { Code, Link2 } from "lucide-react";
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
import { PORT } from "@/lib/utils";
import { revalidatePath } from "next/cache";
type Props = {
  item: UserData;
};

const Card = ({ item }: Props) => {
  async function handleDelete() {
    "use server";
    try {
      await fetch(`${PORT}/api/delete-code/${item._id}`, { method: "DELETE" });
      revalidatePath("/");
    } catch (error) {
      console.log(error);
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
          <h6 className="font-medium text-xs">{item.email}</h6>
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
          <form action={handleDelete}>
            <button
              className="bg-red-500 text-white rounded-lg text-sm w-fit px-2 py-1"
              type="submit"
            >
              delete
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Card;
