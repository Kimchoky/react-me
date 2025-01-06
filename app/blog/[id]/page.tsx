'use client';

import Button from '@components/Button';
import Skeleton from '@components/Skeleton';
import axios from 'axios';
import Link from 'next/link';
import { title } from 'process';
import React, { Usable, useEffect, useState } from 'react';

interface BlogThreadProps {
    params: Usable<{ id: string }>;
}

const BlogThread = ({ params }: BlogThreadProps) => {

    const {id} = React.use(params);
    const [post, setPost] = useState<BlogPostProps|null>(null);


    useEffect(()=>{

        axios.get(`/api/blog/posts/${id}`)
        .then(r => {
            setPost(r.data);
        })
    }, [])

    return (
        <div>
            <div className='p-4'>
                <h2 className='text-xl font-bold'>
                    {!post && <Skeleton type="title" />}
                    {post?.title}
                </h2>
                
                <div>
                {!post && <Skeleton type="content" />}
                {post && 
                    <div dangerouslySetInnerHTML={{__html: post.content}}></div>
                }
                </div>
            </div>
            <div>
                <Link href={`/blog`}>
                    <Button>Back to blog</Button>
                </Link>
            </div>
        </div>
    );
}

export default BlogThread;