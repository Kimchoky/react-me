'use client'

import Link from "next/link";
import Button from "@components/Button";

interface PageProps {
}
import iconSearch from '@assets/icons/search.svg';

export default function Page({ }: PageProps) {

    return (
        <div>
            <h1 className="text-4xl font-bold text-center m-4">Portfolio</h1>

            {/* search box */}
            <div className="flex justify-center">
                <div>
                    search by
                    <select className="border border-gray-300 p-2 rounded-lg">
                        <option value="title">Title</option>
                        <option value="description">Description</option>
                        <option value="tag">Tag</option>
                    </select>
                    <input type="text" className="border border-gray-300 p-2 rounded-lg w-1/2" placeholder="Search..." />
                    <Button svg={iconSearch}>Search</Button>
                </div>
                <div>
                    Tags: 
                    <ul>
                        <Link href="/portfolio/tag1"><li className="cursor-pointer">#Tag1</li></Link>
                        <Link href="/portfolio/tag1"><li className="cursor-pointer">#Tag2</li></Link>
                        <Link href="/portfolio/tag1"><li className="cursor-pointer">#Tag3</li></Link>
                    </ul>
                </div>
            </div>


            <div className="flex flex-wrap justify-center">
                <Link href="/portfolio/lg-lead-platform">
                    <div className="m-4 p-4 border border-gray-300 rounded-lg">
                        <h2 className="text-2xl font-bold">LG Lead Platform</h2>
                        <p className="text-lg">Description of Project 1</p>
                    </div>
                </Link>
                <Link href="/portfolio/project2">
                    <div className="m-4 p-4 border border-gray-300 rounded-lg">
                        <h2 className="text-2xl font-bold">Project 2</h2>
                        <p className="text-lg">Description of Project 2</p>
                    </div>
                </Link>
                <Link href="/portfolio/project3">
                    <div className="m-4 p-4 border border-gray-300 rounded-lg">
                        <h2 className="text-2xl font-bold">Project 3</h2>
                        <p className="text-lg">Description of Project 3</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}