import { database } from "@/app/_lib/firebase/config";
import { increment, addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  const { newCard } = data;

  const collectionRef = collection(database, "cards");
  const decksRef = doc(database, "decks", "uz0D4ZyLle8pQjYzVD78");

  try {
    await updateDoc(decksRef, { "cardStatus.New": increment(1) });
    const docRef = await addDoc(collectionRef, newCard);
    if (docRef) {
      const res = new NextResponse(
        JSON.stringify({
          newCard,
          status: 200,
          Headers: {
            "Content-Type": "application/json",
          },
        })
      );
      return res;
    } else {
      return new NextResponse(
        JSON.stringify({
          message: "Failed to create card",
          status: 500,
          Headers: {
            "Content-Type": "application/json",
          },
        })
      );
    }
  } catch (e) {
    return Response.json({
      status: 404,
      message: "Couldn't create card. try it again",
    });
  }
}
