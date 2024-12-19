'use client'

import { createContext, useCallback, useEffect, useMemo, useState } from "react"
import Button from "../_components/Button";
import IconThemeLight from "../_assets/theme-sun.svg";
import IconThemeDark from "../_assets/theme-moon.svg";

interface ThemeProviderProp {
    children: React.ReactNode,
}

type ThemeStr = 'dark'|'light';
const DEFAULT_THEME = 'dark';
const ICON = { light: IconThemeLight, dark: IconThemeDark, };
const getTheme = (localTheme: string|undefined):ThemeStr => {
    if (localTheme && localTheme !== 'dark' || localTheme !== 'light')
        localTheme = undefined;
    const preferredTheme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    const currentTheme = localTheme && ['dark', 'light'].includes(localTheme ?? '') ? localTheme : preferredTheme;
    return currentTheme;
}

export const ThemeContext = createContext({
    theme: DEFAULT_THEME,
    changeTheme: (v?:ThemeStr)=>{}
});

export default function ThemeProvider({ children, }: ThemeProviderProp) {
    
    const [theme, setTheme] = useState<string>(DEFAULT_THEME);
    const changeTheme = useCallback((value?:ThemeStr) => {
        const newTheme = (value === 'dark' || value === 'light') ? value : (theme === 'light' ? 'dark' : 'light');
        
        document.documentElement.classList.toggle(DEFAULT_THEME, newTheme === DEFAULT_THEME);
        
        setTheme(newTheme);
        localStorage.theme = newTheme;

    }, [theme]);

    const isDark = useMemo(() => theme === 'dark', [theme]); // derived

    useEffect(() => {
        const currentTheme = getTheme(localStorage && localStorage.theme);
        changeTheme(currentTheme);
    }, [])

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
            
            <div className="border-dashed border-[.3em] border-red-300">
                <span>ThemeProvider :: current theme: {theme}</span>
                <Button onClick={()=>{changeTheme()}} svg={isDark ? IconThemeDark : IconThemeLight} bgColor="unset" color="currentColor"></Button>
            </div>
            {children}
        </ThemeContext.Provider>
    )
}