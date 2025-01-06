'use client'

import { useContext, useLayoutEffect, useState } from "react";
import { UiContext } from "./_hooks/UiProvider";
import AppIcon from "@components/AppIcon";
import Header from "./_common/Header";
import Footer from "./_common/Footer";
import Link from "next/link";

interface PageProps {
    children: React.ReactNode
}

export default function Page({ children, }: PageProps) {

    const { fullScreen, setFullScreen } = useContext(UiContext);

    useLayoutEffect(() => {
        
    });

    return (
        <>
            <button onClick={() => { setFullScreen(!fullScreen) }}>Toggle FullScreen</button>
            <hr />
            <AppIcon appIconColor="green" />

            <div>

            </div>
        </>
    );
}