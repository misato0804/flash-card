"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { IoMdMoon } from "react-icons/io";
import { IoMdSunny } from "react-icons/io";
import {SunIcon} from "@/components/elements/SunIcon";
import {MoonIcon} from "@/components/elements/MoonIcon";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null

    return (
        <>
            <Switch
                onChange={toggleTheme}
                defaultSelected
                size="lg"
                color="secondary"
                thumbIcon={({ isSelected, className }) =>
                    isSelected ? (
                        <SunIcon className={className} />
                    ) : (
                        <MoonIcon className={className} />
                    )
                }
            >
            </Switch>
        </>
    )
};
