'use client'

import { FunctionComponent } from "react";
import UiProvider from "./+hooks/UiProvider";

interface IRootProvider {
    children: React.ReactNode
}
 
const RootProvider: FunctionComponent<IRootProvider> = ({ children }) => {
    return (
        <>
            <UiProvider>
            {children}
            </UiProvider>
        </>
    );
}
 
export default RootProvider;