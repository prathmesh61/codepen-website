"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import { UserData } from "@/lib/types";
import Loader from "./Loader";
import axios from "axios";

const Cards = () => {
  const [data, setData] = useState<UserData[] | null>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllProjects = async () => {
      setLoading(true);
      try {
        const { data } = await axios(`/api/all-repos`);
        setData(data);
      } catch (error: any) {
        console.log("error on getAllProjects", error);
      } finally {
        setLoading(false);
      }
    };
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
