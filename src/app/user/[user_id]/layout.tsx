'use client'
import React, { ReactNode, useCallback, useEffect } from 'react';
import { ThemeSwitcher } from "@/components/switcher/ThemeSwitcher";
import SideBar from "@/components/sidebar";
import AvatarDropDown from "@/components/header/AvatarDropDown";
import { useIsSidebarOpen } from "@/store/isSIdebarOpen/useIsSidebarOpen";
import CreateCardButton from "@/components/button/createCardButton";
import useAuthStore from '@/store/userState';
import CreateDeckModal from '@/components/modal/createDeckModal';

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
                    <AvatarDropDown name={authUser.email} user_id={authUser.uid} />
                </div>
                <div className='w-full'>
                    <SideBar />
                    <div className={`flex justify-center mt-6 transition-all ease-in-out duration-300 ${isOpen ? "md:ml-64 ml-12 md:w-[70%] px-4 md:px-0" : "ml-12 px-4"}`}>
                        {children}
                    </div>
                </div>
                <CreateCardButton />
                <CreateDeckModal uid={authUser.uid} />
            </div>
    );

    else if (!authUser || loading) {
        return <>Loading</>
    }
};

export default DashBoardLayout;