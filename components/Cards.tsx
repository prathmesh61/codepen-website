import { UserData } from "@/lib/types";
import React from "react";
import Card from "./Card";
import { PORT } from "@/lib/utils";
const Cards = async () => {
  const response = await fetch(`${PORT}/api/all-repos`, { cache: "no-cache" });
  const data: UserData[] = await response.json();
  
  return (
    <div className="flex flex-wrap items-center justify-center w-full h-fit gap-4">
      {data.map((item) => (
        <Card item={item} key={item.projectName} />
      ))}
    </div>
  );
};

export default Cards;
