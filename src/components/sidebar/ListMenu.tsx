import React, {useState} from 'react';
import Hamburger from "@/components/elements/icons/Hamburger";
import {navLinks} from "@/components/sidebar/nav-links";
import Link from "next/link";

const ListMenu = () => {
    const [openBar, setOpenBar] = useState<boolean>(false)
    return (
        <aside
            className={`md:block hidden h-screen fixed z-30 inset-y-0 left-0 w-64 transform ${openBar ? "translate-x-0" : "-translate-x-48"} transition-transform duration-300 ease-in-out`}>
            <div className='flex justify-between pr-[22px] my-6 items-top'>
                <ul className='ml-4'>
                    <li>
                        <h3 className={`text-2xl font-bold mb-24`}>Snap study</h3>
                    </li>
                    {navLinks.map((linkItem) =>
                        (
                            <li key={linkItem.title} className='font-bold block my-8'>
                                <Link href={linkItem.link} className=''>
                                    {linkItem.title}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
                <Hamburger
                    className='hover:cursor-pointer'
                    onClick={() => setOpenBar(!openBar)}
                />
            </div>
        </aside>
    );
};

export default ListMenu;