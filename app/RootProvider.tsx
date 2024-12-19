'use client'

import { FunctionComponent, useState } from "react";
import UiProvider from "./_hooks/UiProvider";
import ThemeProvider from "./_hooks/ThemeProvider";

interface IRootProvider {
    children: React.ReactNode,
}
 
const RootProvider: FunctionComponent<IRootProvider> = ({ children, }) => {

    return (
        <>
            <ThemeProvider>
            <UiProvider>
            {children}
            </UiProvider>
            </ThemeProvider>
        </>
    );
}
 
export default RootProvider;