import React from 'react';

interface SkeletonProps {
    type?: 'content' | 'image' | 'title'
}

const Skeleton = ( { type = 'content'}: SkeletonProps) => {

    const c = {
        'title': <div className='bg-gray-200 h-6 w-48'></div>,
        'content': [45, 65, 35, 55, 25].map((w, i) => {
            return (
                <div key={i} className='bg-gray-200 h-6 mt-2' style={{ width: (w + '%')}}></div>
        )}),
        'image': <div className='bg-gray-200 h-48 w-48'></div>
    }

    return (
        <div className='py-2'>
            {
                c[type]
            }
        </div>
    );
}

export default Skeleton;