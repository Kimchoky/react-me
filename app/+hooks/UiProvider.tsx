import { createContext, useCallback, useEffect, useState } from "react";

interface UiProviderProps {
    children: React.ReactNode,
}

export const UiContext = createContext({
    fullScreen: true,
    setFullScreen: (value: boolean) => {}
});

export default function UiProvider({ children }: UiProviderProps) {
    
    const [fullScreen, setFullScreen] = useState<boolean>(false);

    return ( 
        <UiContext.Provider value={{fullScreen, setFullScreen}}>
        {children}
        </UiContext.Provider>
    );
}

