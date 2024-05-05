import admin from "@/app/_lib/firebase/serverconfig";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { user_id: string } }
) {
  const id = params.user_id;
  try {
    const user = await admin.auth().getUser(id);
    if (user)
      return new NextResponse(JSON.stringify({ user }), { status: 200 });
    else if (!user) 
      return new NextResponse("User not found", { status: 404 });
    else {
      throw new Error();
    }
  } catch (e) {
    console.log(e);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
