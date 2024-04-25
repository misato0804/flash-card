import {NextRequest} from "next/server";

export function middleware(req: NextRequest) {
    const { pathname } = req.nexturl
    const isAuthenticated = req.cookies.get('authToken') !== undefined

}