import { database } from "@/app/_lib/firebase/config";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET() {}

// update card
export async function PATCH(req: Request, { params }: { params: { card_id: string } }) {
  const card = await req.json();
  
  try {
    const collectionRef = collection(database, "cards");
    const docRef = doc(collectionRef, params.card_id);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      return Response.json({
        status: 404,
        message: "no email or password please try again",
      });
    }

    await setDoc(docRef, card, { merge: true });

    const res = new NextResponse(
      JSON.stringify({
        updatedCard: docSnap.data(),
        status: 200,
        Headers: {
          "Content-Type": "application/json",
        },
      })
    );

    return res
  } catch (e) {
    return Response.json({
      status: 500,
      message: "Couldnt update card data",
    });
  }
}

export async function DELETE() {}

export async function POST(req: Request) {
  // const data = await req.json();
  // const { email, password } = data;
  // if (!email || !password) {
  //   return Response.json({
  //     status: 404,
  //     message: "no email or password please try again",
  //   });
  // }
  // try {
  //   const firebaseRes = await signInWithEmailAndPassword(auth, email, password);
  //   if (firebaseRes.user) {
  //     const res = new NextResponse(JSON.stringify({
  //       user: firebaseRes.user,
  //       status: 200,
  //       Headers: {
  //         'Content-Type' : 'application/json'
  //       }
  //     }))
  //     const token = await firebaseRes.user.getIdToken()
  //     res.cookies.set('authToken', token, {
  //       httpOnly: false,
  //       path: '/',
  //       maxAge: 864000,
  //       secure: process.env.NODE_ENV === 'production'
  //     })
  //     return res
  //   } else {
  //     throw new Error();
  //   }
  // } catch (e) {
  // return Response.json({
  //     status: 404,
  //     message : "Couldnt find matched user with your information"
  // })
  // }
}
