'use client'

import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import IconThemeLight from "../_assets/theme-sun.svg";
import IconThemeDark from "../_assets/theme-moon.svg";
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