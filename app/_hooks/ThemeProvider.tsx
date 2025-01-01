'use client'
const DEBUG = true;

import React, { createContext, useCallback, useEffect, useMemo, useState } from "react"
import Button from "../_components/Button";

interface ThemeProviderProp {
    children: React.ReactNode,
}

const DEFAULT_THEME = 'dark';
const getTheme = (localTheme: ThemeStr|undefined):ThemeStr => {
    if (localTheme && localTheme !== 'dark' && localTheme !== 'light')
        localTheme = undefined;
    const preferredTheme:ThemeStr = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    const currentTheme:ThemeStr = localTheme && ['dark', 'light'].includes(localTheme ?? '') ? localTheme : preferredTheme;
    //DEBUG && console.log(`preferredTheme: ${preferredTheme}, localStorageTheme: ${localStorage && localStorage.theme}, localTheme: ${localTheme} => currentTheme: ${currentTheme}`)
    return currentTheme;
}

const ThemeContextDeafult = {
    theme: DEFAULT_THEME,
    changeTheme: (v?:ThemeStr)=>{},
    button: (d: ImportedSvgFileType, l: ImportedSvgFileType)=><></>
}
export const ThemeContext = createContext(ThemeContextDeafult);

export default function ThemeProvider({ children, }: ThemeProviderProp) {
    
    const [theme, setTheme] = useState<string>(DEFAULT_THEME);
    const changeTheme = useCallback((value?:ThemeStr, debugNum?: number) => {
        
        DEBUG && console.log(`changing theme (${debugNum}). current theme: ${theme}, input param: ${value}`);

        const newTheme = (value === 'dark' || value === 'light') ? value : (theme === 'light' ? 'dark' : 'light');
        
        document.documentElement.classList.toggle(DEFAULT_THEME, newTheme === DEFAULT_THEME);
        
        setTheme(newTheme);
        localStorage.theme = newTheme;

    }, [theme]);
    const isDark = useMemo(() => theme === 'dark', [theme]); // derived
    const button = (iconDark: ImportedSvgFileType, iconLight: ImportedSvgFileType) => {
        return <Button onClick={()=>{changeTheme(undefined, 1)}} svg={isDark ? iconDark : iconLight} bgColor="unset" color="currentColor"></Button>
    }

    useEffect(() => {
        const currentTheme = getTheme(localStorage && localStorage.theme);
        DEBUG && console.log(`currentTheme: ${currentTheme}`)
        changeTheme(currentTheme, 2);
    }, [])

    return (
        <ThemeContext.Provider value={{theme, changeTheme, button}}>
            {/* <div className="border-dashed border-[.3em] border-red-300">
                <span>ThemeProvider :: current theme: {theme}</span>
                <Button onClick={()=>{changeTheme()}} svg={isDark ? IconThemeDark : IconThemeLight} bgColor="unset" color="currentColor"></Button>
            </div> */}
            {children}
        </ThemeContext.Provider>
    )
}