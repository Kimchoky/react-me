'use client'

import Button from '@components/Button';
import Editor from '@components/Editor';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { toast } from 'react-toastify';

const BlogWritePage = () => {

    const contentRef = useRef<string>('')
    const titleRef = useRef<HTMLInputElement>(null);

    const saveThread = async () => {

        const res = await fetch('/api/blog/posts/write', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                title: titleRef?.current?.value,
                content: contentRef.current
            })
        });

        console.log(res.ok, toast);

        if (res.ok) {
            toast.success('Thread saved')
        } else {
            toast.error('Wow Faield');
        }
    }

    return (
        <div>
            <h1>Write a thread</h1>

            <Link href="/blog">
                <Button>Back to blog</Button>
            </Link>

            <div>
                <input type="text" ref={titleRef} className="border border-1 p-2"/>
            </div>
            <Editor
                onUpdate={(value) => {
                    contentRef.current = value
                }}
            />

            <Button onClick={saveThread}>
                Save
            </Button>

            <button onClick={()=>{toast.success('ok')}}>ets</button>
        </div>
    );
}

export default BlogWritePage;