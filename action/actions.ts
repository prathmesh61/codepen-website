import { UserData } from "@/lib/types";
import { PORT } from "@/lib/utils";
import axios from "axios";
import { revalidatePath } from "next/cache";

export async function handleDeleteProject(id: string) {
  "use server";
  try {
    await axios.delete(`${PORT}/api/delete-code/${id}`);
    revalidatePath("/");
  } catch (error) {
    console.log("error on deleteProject", error);
  }
}
export async function getProjectsByEmail(email: string) {
  "use server";
  try {
    const { data } = await axios.get<UserData[]>(
      `${PORT}/api/user-repo/${email}`
    );
    return data;
  } catch (error) {
    console.log("error on getProjectByEmail", error);
  }
}
export async function getAllProjects() {
  "use server";
  try {
    const { data } = await axios.get<UserData[]>(`${PORT}/api/all-repos`);
    return data;
  } catch (error) {
    console.log("error on getAllProjects", error);
  }
}
