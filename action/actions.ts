import { UserData } from "@/lib/types";
import { PORT } from "@/lib/utils";
import axios, { AxiosError } from "axios";

export async function getProjectsByEmail(email: string) {
  "use server";
  try {
    const { data } = await axios.get<UserData[]>(
      `${PORT}/api/user-repo/${email}`
    );
    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log("error on Axios getProjectByEmail", error.message);
    }
    console.log("error on getProjectByEmail", error);
  }
}
