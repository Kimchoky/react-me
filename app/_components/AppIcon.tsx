'use client'

import { useContext } from "react";
import { UiContext } from "../_hooks/UiProvider";

interface AppIconProps {
    appIconColor: AppIconColorsKeyProp
}
type AppIconColorsKeyProp = 'red'|'green'|'blue'|'white'|'black';
type AppIconColorsObject = Record<AppIconColorsKeyProp, string>;

export default function AppIcon({ appIconColor }: AppIconProps) {

    const { fullScreen, setFullScreen } = useContext(UiContext);

    const appIconColors: AppIconColorsObject = {
        red: 'red',
        green: 'green',
        blue: 'blue',
        white: 'white',
        black: 'black'
    }

    return (
        <>
            <div className={`rounded-md border-solid border border-white w-16 h-16`} style={{backgroundColor: appIconColors[appIconColor]}}>
                <div className="text-center text-[.8rem]">App</div>
                <div className="text-center text-[.8rem]">Icon</div>
                {fullScreen+''}
            </div>
        </>
    );
}