'use client'
import React, { ReactNode, use, useCallback, useEffect, useMemo, useState } from 'react';
import { ThemeSwitcher } from "@/components/switcher/ThemeSwitcher";
import SideBar from "@/components/sidebar";
import AvatarDropDown from "@/components/header/AvatarDropDown";
import { useIsSidebarOpen } from "@/store/isSIdebarOpen/useIsSidebarOpen";
import CreateCardButton from "@/components/button/createCardButton";
import CreateCardModal from "@/components/modal/createCardModal";
import useAuthStore from '@/store/userState/userAuthStore';

const DashBoardLayout = ({children, params}: {children: ReactNode, params: {user_id : string}}) => {
    const { isOpen } = useIsSidebarOpen()
    const { authUser, updateUser,loading} = useAuthStore()

    const memoizedUpdateUser = useCallback(
        () => updateUser(params.user_id),
        [params.user_id, updateUser]
    );
    
    useEffect(() => {
        memoizedUpdateUser();
    }, [memoizedUpdateUser]); 

    if(authUser)
    return (
            <div className='flex'>
                <div className='fixed top-4 right-4 flex gap-4'>
                    <ThemeSwitcher />
                    <AvatarDropDown name='Misato' user_id={'3'} />
                </div>
                <div className='w-full'>
                    <SideBar />
                    <div className={`flex justify-center mt-6 transition-all ease-in-out duration-300 ${isOpen ? "md:ml-64 ml-12 md:w-[70%] px-4 md:px-0" : "ml-12 px-4"}`}>
                        {children}
                    </div>
                </div>
                <CreateCardButton />
                <CreateCardModal />
            </div>
    );

    else if (!authUser || loading) {
        return <>Loading</>
    }
};

export default DashBoardLayout;