'use client'

import React, { use, useEffect, useState } from 'react';
import Button from '../_components/Button';
import Link from 'next/link';
import axios from 'axios';

const BlogIndex = () => {

    const [ posts, setPosts ] = useState([]);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        axios.get('/api/blog/posts')
        .then(r => setPosts(r.data))
        .catch(e => setError(true));
    }, [])

    return (
        <div>
            <h1 className='text-xl font-bold'>Blog Posts</h1>
            
            <ul>
                {posts.map(({title, created_at}, i) => (
                    <li key={i} className='w-full flex justify-between p-4 border-b border-gray-200'>
                        <div className='font-bold'>
                            <Link href={`/blog/${i + 1}`}>{title}</Link>
                        </div>
                        <div className='text-right'>
                            {created_at}
                        </div>
                    </li>
                ))}
                {error && <li>Failed to load posts</li>}
            </ul>

            <Link href="/blog/write">
                <Button>Write a thread</Button>
            </Link>

        </div>
    );
}

export default BlogIndex;