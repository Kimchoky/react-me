'use client'

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import IconThemeLight from "../_assets/icons/theme-sun.svg";
import IconThemeDark from "../_assets/icons/theme-moon.svg";
import { ThemeContext } from "../_hooks/ThemeProvider";
import axios from "axios";

interface HeaderProps {
     
}

export default function Header({  }: HeaderProps) {

    const { button } = useContext(ThemeContext);
    const [ menuList, setMenuList ] =  useState<Array<MenuType>>([]);

    useEffect(() => {
        axios.get('/api/main/menu')
        .then(r => setMenuList(r.data));
    }, [])

    return (
        <div className={`
            border-dashed border-[.3em] border-green-700
            flex justify-between items-center flex-auto
            `}
        >
            <div className={`
                font-extrabold text-lg
                bg-gradient-to-br from-purple-500 to-blue-500
                text-transparent bg-clip-text
            `}
            >
                <Link href="/">{`<JUNGSOO, KIM/>`}</Link>
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
                            menu.href ?
                                <Link key={menu.id} href={menu.href}>
                                    <li className={`display: inline-block cursor-pointer font-medium text-xl p-2`}>
                                    {menu.name}
                                    </li>
                                </Link> :
                                menu.name
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