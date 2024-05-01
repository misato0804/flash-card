'use client'
import React, {use, useEffect, useState} from 'react';
import {ThemeSwitcher} from "@/components/switcher/ThemeSwitcher";
import SideBar from "@/components/sidebar";
import AvatarDropDown from "@/components/header/AvatarDropDown";
import {useIsSidebarOpen} from "@/store/isSIdebarOpen/useIsSidebarOpen";
import CreateCardButton from "@/components/button/createCardButton";
import CreateCardModal from "@/components/modal/createCardModal";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/app/_lib/firebase/config';
import { useRouter } from 'next/navigation';

const DashBoardLayout = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    const {isOpen} = useIsSidebarOpen()
    
    const [userLoading, setUserLoading] = useState<boolean>(false)
    const { user } = useAuthState(auth)
    const router = useRouter()

    console.log("user",user)

    return (
        <div className='flex'>
            <div className='fixed top-4 right-4 flex gap-4'>
                <ThemeSwitcher/>
                <AvatarDropDown name='Misato' user_id={'3'}/>
            </div>
            <div className='w-full'>
                <SideBar/>
                <div className={`flex justify-center mt-6 transition-all ease-in-out duration-300 ${isOpen ? "md:ml-64 ml-12 md:w-[70%] px-4 md:px-0" : "ml-12 px-4"}`}>
                    {children}
                </div>
            </div>
            <CreateCardButton/>
            <CreateCardModal/>
        </div>
    );
};

export default DashBoardLayout;