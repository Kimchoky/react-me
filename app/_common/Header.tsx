'use client'

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import Fetch from "../_lib/Fetch";
import IconThemeLight from "../_assets/theme-sun.svg";
import IconThemeDark from "../_assets/theme-moon.svg";
import { ThemeContext } from "../_hooks/ThemeProvider";

interface HeaderProps {
     
}

export default function Header({  }: HeaderProps) {

    const { theme, changeTheme, button } = useContext(ThemeContext);
    const [ menuList, setMenuList ] =  useState<Array<MenuType>>([]);

    useEffect(() => {
        Fetch('/api/main/menu')
        .then(r => setMenuList(r));
    }, [])

    return (
        <div className={`
            border-dashed border-[.3em] border-green-700
            flex justify-between items-center flex-auto
            `}
        >
            <div className={`
                font-bold
            `}
            >
                JUNGSOO, KIM
            </div>

            <div>
                <nav className={`
                    `}
                >
                    <ul className={`
                        flex 
                        flex-col 
                        sm:flex-row sm:gap-8`}
                    >
                        {menuList && menuList.map(menu => (
                            <li key={menu.id} className={`display: inline-block cursor-pointer font-medium text-xl p-2`}>
                            {menu.href ?
                                <Link href={menu.href}>{menu.name}</Link> :
                                menu.name
                            }
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div>
                {button(IconThemeDark, IconThemeLight)}
            </div>
        </div>
    );
}