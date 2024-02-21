import connection from "@/database/Connection";
import Code from "@/database/Schema";
import { NextRequest, NextResponse } from "next/server";

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } },

  response: NextResponse
) => {
  try {
    connection();
    const data = await Code.findByIdAndDelete(params.id);
    return NextResponse.json("successfully delete", { status: 500 });
  } catch (error) {
    console.log("error on delete code", error);
    return NextResponse.json("failed to delete code", { status: 500 });
  }
};
