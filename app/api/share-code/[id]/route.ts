import connection from "@/database/Connection";
import Code from "@/database/Schema";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } },
  response: NextResponse
) => {
  connection();
  const { id } = params;
  try {
    const data = await Code.findById(id);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.log("error on sharing code", error);
    return NextResponse.json("failed to share data", { status: 500 });
  }
};
