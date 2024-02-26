import React from "react";
import Card from "./Card";
import { getAllProjects } from "@/action/actions";
const Cards = async () => {
  const data = await getAllProjects();

  return (
    <div className="flex flex-wrap items-center justify-center w-full h-fit gap-4">
      {data?.map((item) => (
        <Card item={item} key={item.projectName} />
      ))}
    </div>
  );
};

export default Cards;
