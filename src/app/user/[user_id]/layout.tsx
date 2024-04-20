import React from 'react';
import {ThemeSwitcher} from "@/components/switcher/ThemeSwitcher";
import SideBar from "@/components/sidebar";

const DashBoardLayout = ({children}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className='flex justify-center'>
            <div className='fixed top-4 right-8'>
                <ThemeSwitcher/>
            </div>
            <div className='side-bar'>
                <SideBar/>
            </div>
            {children}
        </div>
    );
};

export default DashBoardLayout;