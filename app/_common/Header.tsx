'use client'

import Link from "next/link";
import { menuList } from "../_lib/menuList";

interface HeaderProps {
     
}

export default function Header({  }: HeaderProps) {

    return (
        <div className="border-dashed border-[.3em] border-green-700">
            <div>
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
                
            </div>
        </div>
    );
}