import connection from "@/database/Connection";
import Code from "@/database/Schema";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { email: string } },
  response: NextResponse
) => {
  connection();
  const { email } = params;
  try {
    const data = await Code.find({});
    const filterData = data.filter((item) => item.email === email);
    if (filterData.length === 0) {
      return NextResponse.json("no repo found", { status: 200 });
    } else {
      return NextResponse.json(filterData, { status: 200 });
    }
  } catch (error) {
    console.log("error on sharing code", error);
    return NextResponse.json("failed to get user repo", { status: 500 });
  }
};
