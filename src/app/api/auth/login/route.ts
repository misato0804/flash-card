import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/_lib/firebase/config";

export async function POST(req: Request) {
  const data = await req.json();
  const { email, password } = data;

  if (!email || !password) {
    return Response.json({
      status: 404,
      message: "no email or password please try again",
    });
  }

  try {
    const firebaseRes = await signInWithEmailAndPassword(auth, email, password);
    if (firebaseRes.user) {
      return Response.json({ user: firebaseRes.user });
    } else {
      throw new Error();
    }
  } catch (e) {
    return Response.json({
        status: 404,
        message : "Couldnt find matched user with your information"
    })
  }
}
