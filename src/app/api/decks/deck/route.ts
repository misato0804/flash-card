import { database } from "@/app/_lib/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

// CREATE
export async function POST(req: Request) {
  const data = await req.json();
  const { title, uid, cardStatus } = data;

  if (!title || !uid) {
    return Response.json({
      status: 404,
      message: "no title or id please try again",
    });
  }

  const collectionREf = collection(database, "decks");

  try {
    const docRef = await addDoc(collectionREf, { title, uid, cardStatus });
    if (docRef) {
      const res = new NextResponse(
        JSON.stringify({
          deck: {
            title,
            uid,
          },
          status: 200,
          Headers: {
            "Content-Type": "application/json",
          },
        })
      );

      return res
    } else {
      return new NextResponse(
        JSON.stringify({
          message: 'Failed to create deck',
          status: 500,
          Headers: {
            "Content-Type": "application/json",
          }
        })
      )
    }

  } catch (e) {
    console.log(e);
  }
}

export async function GET() {}
