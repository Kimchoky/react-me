'use client'

import { createContext, useState } from "react";

interface UiProviderProps {
    children: React.ReactNode,
}

export const UiContext = createContext({
    fullScreen: false,
    setFullScreen: (value: boolean) => {},
    fullWidth: false,
    setFullWidth: (value: boolean) => {},
});

export default function UiProvider({ children }: UiProviderProps) {
    
    const [fullScreen, setFullScreen] = useState<boolean>(false);
    const [fullWidth, setFullWidth] = useState<boolean>(false);

    return ( 
        <UiContext.Provider value={{fullScreen, setFullScreen, fullWidth, setFullWidth}}>
        {children}
        </UiContext.Provider>
    );
}

