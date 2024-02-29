import axios, { AxiosError } from "axios";
import { UserData } from "./types";

export const getAllProjects = async () => {
  try {
    const res = await fetch(`/api/all-repos`);
    const data = await res.json();
    return data as UserData[];
  } catch (error: any) {
    console.log("error on getAllProjects", error);
  }
};
export async function handleDelete(itemId:string) {
    try {
      const { data } = await axios.delete(`/api/delete-code/${itemId}`);
     return data
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log("error on Axios handleDelete", error.message);
      }
      console.log("error on server handleDelete", error);
    }
  }