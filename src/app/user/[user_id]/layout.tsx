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
        <div className='flex '>
            <div className='fixed top-4 right-8 flex gap-4'>
                <ThemeSwitcher/>
                <AvatarDropDown name='Misato' user_id={'3'}/>
            </div>
            <div className='flex'>
                <SideBar/>
                <div className={`bg-sky-100 mt-6 flex transition-all ease-in-out duration-300 ${isOpen ? "md:ml-64 ml-16" : "ml-16"}`}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashBoardLayout;