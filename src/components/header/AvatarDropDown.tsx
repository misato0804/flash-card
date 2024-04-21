'use client'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";
import { User } from '@/type/User'
import Link from "next/link";

const AvatarDropDown = ({image, user_id, name}: User) => {
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
                <DropdownItem key="profile" className="h-14 gap-2">
                    <p className="font-semibold">Signed in as</p>
                    <p className="font-semibold">{ name }</p>
                </DropdownItem>
                <DropdownItem key="my_page">
                    <Link href={`/user/${user_id}`}>Deck</Link>
                </DropdownItem>
                <DropdownItem key="browse">
                    <Link href={`/user/${user_id}/browse`}>Browse</Link>
                </DropdownItem>
                <DropdownItem key="browse">
                    <Link href={`/user/${user_id}/analytics`}>Analytics</Link>
                </DropdownItem>
                <DropdownItem key="logout" color="danger">
                    Log Out
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default AvatarDropDown;