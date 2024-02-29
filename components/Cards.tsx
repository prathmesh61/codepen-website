"use client";
import React from "react";
import Card from "./Card";
import Loader from "./Loader";
import { useQuery } from "@tanstack/react-query";
import { getAllProjects } from "@/lib/api-requests";
const Cards = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProjects,
    staleTime: 2 * 1000,
  });

  return (
    <div className="flex flex-wrap items-center justify-center w-full h-fit gap-4">
      {isLoading ? (
        <Loader />
      ) : (
        data?.map((item) => <Card item={item} key={item.projectName} />)
      )}
    </div>
  );
};

export default Cards;
