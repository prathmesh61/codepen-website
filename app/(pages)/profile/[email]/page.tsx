import { UserData } from "@/lib/types";
import { PORT } from "@/lib/utils";
import React from "react";

type Props = {
  params: { email: string };
};

const page = async ({ params }: Props) => {
  const filteredEmail = params.email.replace("@", "%40");
  const response = await fetch(`${PORT}/api/user-repo/${filteredEmail}`, {
    cache: "no-cache",
  });
  const data: UserData[] = await response.json();
  return <div>page</div>;
};

export default page;
