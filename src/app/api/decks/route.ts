import { NextRequest, NextResponse } from 'next/server';
import { database } from "@/app/_lib/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

// GET ALL USER's DECKS 
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const uid = searchParams.get('uid');
  
  if (!uid) {
    return NextResponse.json({ error: 'UID is required' }, { status: 400 });
  }

  const collectionRef = collection(database, 'decks');
  const q = query(collectionRef, where('uid', '==', uid));

  const snapshot = await getDocs(q)
  const decksData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  return new NextResponse(
    JSON.stringify({
      message: 'Success in getting decks data',
      decks: decksData,
      status: 200,
      Headers: {
        "Content-Type": "application/json",
      }
    })
  )
}