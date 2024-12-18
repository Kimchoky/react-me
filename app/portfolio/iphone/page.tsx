'use client'

import { FunctionComponent } from "react";

interface PageProps {

}

const Page: FunctionComponent<PageProps> = () => {
    return (
        <>
            <div className="flex justify-center items-center h-[100vh]">
                <div>
                    <div className="grid grid-rows-[20px_1fr_20px]">
                        <h1>iPhone</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;