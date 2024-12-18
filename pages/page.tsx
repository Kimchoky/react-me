'use client'

import { useContext, useState } from "react";
import { UiContext } from "../app/+hooks/UiProvider";
import AppIcon from "../app/+components/AppIcon";
import Header from "../app/+common/Header";
import Footer from "../app/+common/Footer";
import Link from "next/link";

interface PageProps {
    children: React.ReactNode
}

export default function Page({ children, }: PageProps) {

    const { fullScreen, setFullScreen } = useContext(UiContext);

    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <h1>Page</h1>
                <button onClick={() => { setFullScreen(!fullScreen) }}>Toggle FullScreen</button>

                <hr />

                <AppIcon appIconColor="green" />

                <Link href="/me">Me</Link>
            </main>

            <footer>
                <Footer />
            </footer>

        </>
    );
}