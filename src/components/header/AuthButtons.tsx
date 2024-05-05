'use client'

import {Button, Link, NavbarItem} from "@nextui-org/react";


const AuthButtons = () => {
    return (
        <>
            <NavbarItem className="hidden lg:flex">
                <Link href="/login">Login</Link>
            </NavbarItem>
            <NavbarItem>
                <Link href="/register">Sign in</Link>
            </NavbarItem>
        </>
    );
};

export default AuthButtons;