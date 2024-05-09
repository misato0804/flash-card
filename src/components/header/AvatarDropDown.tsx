'use client'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";
import Link from "next/link";
import { auth } from "@/app/_lib/firebase/config";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const AvatarDropDown = ({image, user_id, name}: any) => {

    const router = useRouter()

    const hadnleSignOut = async() => {
        try {
            await signOut(auth)
            router.push('/')

        }catch(e) {
            console.log(e)
        }
    }

    return (
        <Dropdown placement="bottom-end" >
            <DropdownTrigger>
                <Avatar
                    isBordered
                    as="button"
                    className="transition-transform"
                    src={ image ? image : "https://i.pravatar.cc/150?u=a042581f4e29026704d" }
                />
            </DropdownTrigger>
            <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2" textValue="profile">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{ name }</p>
                </DropdownItem>
                <DropdownItem key="my_page" textValue="decks">
                    <Link href={`/user/${user_id}/decks`}>Deck</Link>
                </DropdownItem>
                <DropdownItem key="browse" textValue="browse">
                    <Link href={`/user/${user_id}/browse`}>Browse</Link>
                </DropdownItem>
                <DropdownItem key="analytics" textValue="analytics">
                    <Link href={`/user/${user_id}/analytics`}>Analytics</Link>
                </DropdownItem>
                <DropdownItem key="logout" color="danger" textValue="logout">
                    <h5 onClick={hadnleSignOut}>Log Out</h5>
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default AvatarDropDown;