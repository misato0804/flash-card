'use client'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import AvatarDropDown from "@/components/header/AvatarDropDown";
import AuthButtons from "@/components/header/AuthButtons";
import {User} from "@/type/User";
import {user1} from "@/dammy/User";
import { usePathname } from 'next/navigation'
import {ThemeSwitcher} from "@/components/switcher/ThemeSwitcher";
import useAuthStore from "@/store/userState/userAuthStore";
import { useEffect } from "react";

const Header = () => {

    const data = user1
    const { authUser, updateUser,loading, setUser} = useAuthStore()


    const url = '/api/user'
    const getUser = async (token: string) => {
        const res = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ authToken: token })
        })

        if( res.ok) {
            const data = await res.json()
            setUser(data.user)
        }
    }

    useEffect(() => {
        var authCookie = document.cookie.split('=')[1];
        console.log(authCookie)
        if(authCookie) {
            getUser(authCookie)
        }
    }, [])

    const navBarItems = [
        {
            link: '/space-repetition',
            title: 'Spaced Repetition',

        },
        {
            link: '/usage',
            title: 'usage',

        },
        {
            link: '/features',
            title: 'features',
        }
    ]
    const pathname = usePathname()

    return (
        <Navbar
            maxWidth='xl'
            shouldHideOnScroll
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "data-[active=true]:after:content-['']",
                    "data-[active=true]:after:absolute",
                    "data-[active=true]:after:bottom-0",
                    "data-[active=true]:after:left-0",
                    "data-[active=true]:after:right-0",
                    "data-[active=true]:after:h-[2px]",
                    "data-[active=true]:after:rounded-[2px]",
                    "data-[active=true]:after:bg-primary"
                ]
            }}>
            <NavbarBrand>
                <Link href='/'>Logo</Link>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-24" justify="center">
                {
                    navBarItems.map(item => (
                        <NavbarItem key={item.title} isActive={item.link === pathname}>
                            <Link className='' href={item.link} >
                                {item.title}
                            </Link>
                        </NavbarItem>
                    ))
                }
            </NavbarContent>
            <NavbarContent justify="end">
                <ThemeSwitcher/>
                {authUser ?
                    <AvatarDropDown
                        name={data!.name}
                        user_id={data!.user_id}
                        image={data?.image}
                    /> :
                    <AuthButtons/>
                }
            </NavbarContent>
        </Navbar>
    );
};

export default Header;