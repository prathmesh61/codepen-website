import connection from "@/database/Connection";
import Code from "@/database/Schema";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// creating a schema for strings and type
type BodyType = {
  email: string;
  fullCode: {
    html: string;
    css: string;
    js: string;
  };
};
const bodySchema = z.object({
  email: z.string().email(),
  fullCode: z.object({
    html: z.string(),
    css: z.string(),
    js: z.string(),
  }),
});
export async function POST(request: NextRequest, response: NextResponse) {
  connection();
  const body: BodyType = await request.json();
  const validation = bodySchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  try {
    const code = await Code.create({
      email: validation.data.email,
      fullCode: {
        html: validation.data.fullCode.html,
        css: validation.data.fullCode.css,
        js: validation.data.fullCode.js,
      },
    });
    return NextResponse.json(code, { status: 201 });
  } catch (error) {
    console.log("error on saving code", error);
    return NextResponse.json("failed to save data", { status: 500 });
  }
}
