import { Ellipsis } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Image_Low from '../home/components/image-low'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { PostSingle } from '../tcs'

interface Post {
    post: PostSingle
    session: any
}

const Post_single = ({post, session}: Post) => {
    return (
        <div className='space-y-4' key={post.id} >
            <div className="flex items-center justify-between px-4 w-full">
                <div className="flex items-center gap-3">
                    <Avatar className="w-10 h-10">
                        <AvatarImage src={post.author.image || ''} />
                    </Avatar>
                    <div className="flex-1">
                        <div className="font-medium">
                            <h1 className="md:text-base text-sm font-extrabold">
                                {post.author.userName}
                            </h1>
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            <p className='md:text-xs text-xs' >{`${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1><Ellipsis /></h1>
                </div>
            </div>
            <div className='md:[500px] w-full md:h-auto md:max-h-[468px] max-h-[520px] overflow-hidden h-auto'>
                <Image
                    className='rounded-md w-auto h-auto'
                    src={post.image || ''}
                    alt='Imagens'
                    width={500}
                    height={500}
                    priority
                />
            </div>
            <div>
                <Image_Low
                    userId={session?.user?.id}
                    postId={post.id}
                />
            </div>
            {
                post.title.length > 0 &&
                <div className='text-sm px-4 space-x-2' >
                    <p className='font-extrabold text-black' >{post.author.userName}
                        <span className='font-normal ml-2' >{post.title}</span>
                    </p>
                </div>
            }
            <Separator />
        </div>
    )
}

export default Post_single