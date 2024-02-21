import connection from "@/database/Connection";
import Code from "@/database/Schema";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest, response: NextResponse) => {
  try {
    connection();
    const data = await Code.find().exec();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log("error on fetch all repos", error);
    return NextResponse.json("failed to fetch all repos", { status: 500 });
  }
};
