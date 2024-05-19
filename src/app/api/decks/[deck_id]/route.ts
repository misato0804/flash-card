import { NextRequest, NextResponse } from "next/server";
import { database } from "@/app/_lib/firebase/config";
import { collection ,  doc, getDoc} from 'firebase/firestore';


export async function GET(req: NextRequest,
  { params }: { params: { deck_id: string } }) {
    const deck_id = params.deck_id;

    try {
      const docRef = doc(database, 'decks', deck_id)
      const snapShot = await getDoc(docRef)

      if( snapShot.exists()) {
        const deck = snapShot.data()
        return new NextResponse(JSON.stringify({ deck }), { status: 200 });
      } else {
        return new NextResponse("deck not found", { status: 404 });
      }
  
    } catch(e) {
      console.log(e);
      return new NextResponse("Internal Server Error", { status: 500 });
    }
}