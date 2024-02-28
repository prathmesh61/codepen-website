"use client";
import React, { Suspense, useEffect, useState } from "react";
import Card from "./Card";
import { UserData } from "@/lib/types";
import Loader from "./Loader";

const Cards = () => {
  const [data, setData] = useState<UserData[] | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAllProjects() {
      setLoading(true);
      try {
        const response = await fetch(`/api/all-repos`, { cache: "no-cache" });
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        console.log("error on getAllProjects", error);
      } finally {
        setLoading(false);
      }
    }
    getAllProjects();
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-center w-full h-fit gap-4">
      {loading ? (
        <Loader />
      ) : (
        data?.map((item) => <Card item={item} key={item.projectName} />)
      )}
    </div>
  );
};

export default Cards;
