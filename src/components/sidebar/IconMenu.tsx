import React from 'react';
import {navLinks} from "@/components/sidebar/nav-links";
import Link from "next/link";

const IconMenu = () => {
    return (
        <aside className='md:hidden fixed h-screen left-0 z-30 w-12 flex justify-center'>
            <div className='my-6'>
                <ul className=''>
                    {navLinks.map((linkItem, index) => (
                        <li key={linkItem.title} className={`block ${index % 2 !== 0 ? "my-6" : ""}`}>
                            <Link href={`/${linkItem.link}`}> {React.createElement(linkItem.icon) }</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default IconMenu;