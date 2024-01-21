/* eslint-disable @next/next/no-img-element */
'use client';
import { TiPlus } from "react-icons/ti";
import { useRouter } from "next/navigation";

import { useGetBlogQuery } from "@/redux/slices/blog_slice";
import { useEffect } from "react";

export default function Blogs() {
    const router = useRouter();


    const {
        data: blogData,
        isLoading: blogLoading,
        isError: blogError,
        error: blogErrorInfo,
    } = useGetBlogQuery({});

    useEffect(() => {
        if (blogLoading) {
            console.log("Loading...");
        }
        else if (blogData) {
            console.log(blogData);
        }
        if (blogError) {
            console.log(blogErrorInfo);
        }
    }   , [blogData, blogError]);

    return (
        <div
            className={`flex flex-col justify-center items-center  w-full`}
        >
            {/* header */}
            <div
                className={`flex justify-center items-center w-full h-1/6`}
            >
                {/* Blog text */}
                <div
                    className={`text-4xl font-bold`}
                >
                    Blogs

                </div>
                
                <div
                    className={`flex justify-center items-center w-1/2 gap-x-10`}
                >
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-full text-sm focus:outline-none placeholder:pl-7"
                     />

                     <div
                        onClick={() => router.push('newBlog')}
                        className="bg-primary flex items-center justify-center gap-x-2 rounded-full text-white w-[125px] h-[40px] cursor-pointer"
                     >
                            <TiPlus size={10} />
                            <p>New Blog</p>
                     </div>

                </div>

            </div>
            {
                blogLoading ? (
                    <div
                        className={`flex justify-center items-center w-full h-5/6`}
                    >
                        <div
                            className={`text-2xl font-bold`}
                        >
                            Loading...
                        </div>
                    </div>
                ) : blogError ? (
                    <div
                        className={`flex justify-center items-center w-full h-5/6`}
                    >
                        <div
                            className={`text-2xl font-bold`}
                        >
                            Error
                        </div>
                    </div>
                ) : blogData ? (
                    <div
                       
                        className={`flex flex-col justify-between items-center w-full p-28`}
                    >
                       { /* go through each blog and display it */}
                       {
                        blogData.map((blog:any, index:number) => (
                            
                            <div 

                                key={index}
                                onClick={() => router.push(`blogs/${blog._id}`)}
                                className={`flex flex-col justify-center group cursor-pointer`}
                            >
                                <div className="border-t border-gray my-4"></div>
                                {/* author */}
                                <div
                                    className={`flex justify-center items-center gap-x-6 self-start`}
                                >
                                    <img
                                        className="w-[60px] h-[60px] mb-3 rounded-full shadow-lg"
                                        src={blog.author ? blog.author.profilePicture : "happy_people.png"}
                                        alt="Bonnie image"
                                    />
                                    <div
                                        className="flex flex-col justify-center items-center"
                                    >
                                        <div
                                            className={`text-xl font-bold`}
                                        >
                                            {blog.author ? blog.author.name : "Bonnie"} . <p className="text-sm inline font-thin">{blog.createdAt}</p>
                                        </div>
                                        <div
                                            className={`text-sm text-left self-start`}
                                        >
                                            Software Developer
                                        </div>
                                    </div>
                                </div>

                                {/* blog */}
                                <div
                                    className="flex justify-between items-center m-auto gap-x-8"
                                >
                                    {/* title and description */}
                                    <div className="flex flex-col justify-between gap-y-8 ">
                                        <div
                                            className="text-3xl font-bold"
                                        >
                                            {blog.title}

                                        </div>
                                        <div
                                            className="text-xl" 
                                        >
                                            {blog.description.slice(0, 200)}...
                                            </div>

                                    </div>
                                    {/* image */}
                                    <div
                                        className="flex self-end"
                                    >
                                        <img
                                            className="h-[200px] w-[400px] mb-3 rounded-lg shadow-lg "
                                            src={blog.image ? blog.image : "happy_people.png"}
                                            alt="Bonnie image"
                                        />
                                    </div>

                                </div>
                               

                            </div>
                        ))
                       }

                    </div>
                ): null
            }

        </div>
    )
        }