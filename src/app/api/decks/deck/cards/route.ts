import { NextRequest, NextResponse } from 'next/server';
import { database } from "@/app/_lib/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

// GET ALL USER's DECKS 
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const deck_id = searchParams.get('deck_id');

  if( !deck_id ) {
    return NextResponse.json({ error: 'UID is required' }, { status: 400 })
  }
  const collectionRef = collection(database, 'cards');
  const q = query(collectionRef, where('deckId', '==', deck_id))

  try {
    const snapshot = await getDocs(q)
    const cardsData = snapshot.docs.map(item => ({
      id: item.id,
      ...item.data()
    }))

    if( !cardsData ) {
      throw new Error('There is no deck id matched')
    }

    return new NextResponse(
      JSON.stringify({
        message: 'Success',
        cards: cardsData,
        status: 200,
        Headers: {
          "Content-Type": "application/json",
        }
      })
    )

  } catch (e) {
    return new NextResponse(
      JSON.stringify({
        message: 'Failed to get cards data',
        status: 500,
        Headers: {
          "Content-Type": "application/json",
        }
      })
    )
  }
}