import { getProjectsByEmail } from "@/action/actions";
import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

type Props = {
  params: { email: string };
};

const ProfilePage = async ({ params }: Props) => {
  const filteredEmail = params.email.replace("@", "%40");

  const data = await getProjectsByEmail(filteredEmail);
  return (
    <div className="h-screen w-full p-4 bg-[#0E1525]">
      <div className="flex flex-col gap-2 bg-gradient-to-r from-slate-900 to-slate-700 h-[200px] w-full justify-center items-center">
        <Link
          href={"/"}
          className="font-bold text-base text-white border-b-2 border-b-blue-500"
        >
          CodiiEdi
        </Link>
        <h2 className="font-bold text-white font-mono text-2xl">
          ✨🚀Creator: {data && data[0].email}
        </h2>
      </div>
      <div className="flex flex-wrap items-center  w-full h-fit gap-4 text-white">
        {data?.map((item) => (
          <Card item={item} key={item.projectName} />
        ))}
      </div>
    </div>
  );
};

export default ProfilePage;
