import { NextResponse } from 'next/server'
import admin from "@/app/_lib/firebase/serverconfig";

export async function POST(req: Request) {
  const data = await req.json();
  const { authToken } = data
  
  try {
    const decodedToken = await admin.auth().verifyIdToken(authToken)
    const uid = decodedToken.uid
    const user = await admin.auth().getUser(uid)
    return new NextResponse(JSON.stringify({user}))
  } catch(e) {
    console.log(e)
  }
}
