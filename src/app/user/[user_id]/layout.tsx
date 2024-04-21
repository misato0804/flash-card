'use client'
import React, {useState} from 'react';
import {ThemeSwitcher} from "@/components/switcher/ThemeSwitcher";
import SideBar from "@/components/sidebar";
import AvatarDropDown from "@/components/header/AvatarDropDown";
import {useIsSidebarOpen} from "@/store/isSIdebarOpen/isSidebarOpen";

const DashBoardLayout = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    const {isOpen} = useIsSidebarOpen()

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
        </div>
    );
};

export default DashBoardLayout;