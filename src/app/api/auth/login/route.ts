// import type {NextApiRequest, NextApiResponse} from 'next';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "@/app/_lib/firebase/config";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: Request, res: Response) {
    const data = await req.body
    console.log(data)
    return NextResponse.json({data})
    // const { email, password } = req.body
    // if( !email || !password ) {
    //    return new Response('Hello',{
    //         status: 404
    //    }) 
    // }
    // try {
    //     const firebaseRes = await signInWithEmailAndPassword(auth, email, password)
    //     if(firebaseRes.user) {
    //         const { uid, email, accessToken } = firebaseRes.user;
    //         console.log(uid, email, accessToken)
    //         return new Response()
    //     }

    // } catch (e: any) {

    // }


}