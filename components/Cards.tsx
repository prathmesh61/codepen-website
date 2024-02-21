import { UserData } from "@/lib/types";
import React from "react";
import Card from "./Card";

type Props = {};

const Cards = async (props: Props) => {
  const response = await fetch("http://localhost:3007/api/all-repos");
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
