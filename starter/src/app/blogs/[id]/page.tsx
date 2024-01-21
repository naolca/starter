'use client';
import { useGetSingleBlogQuery } from "@/redux/slices/blog_slice"
import { useEffect } from "react";



export default function SingleBlog({params}:{params:{id:string}}) {

    const {
        data: blogData,
        isLoading: blogLoading,
        isError: blogError,
        error: blogErrorInfo,
    } = useGetSingleBlogQuery(params.id);

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
    }
        , [blogData, blogError]);


    return (

        <div
            className="flex flex-col justify-center items-center w-full h-screen gap-y-8"
        >
            {/* title and tags */}
            <div
                className="flex flex-col justify-center items-center w-full h-1/6 gap-y-4">
                {/* title */}
                <div
                    className="text-4xl font-bold"
                >
                    {blogData?.title}
                </div>
                {/* tags */}
                <div
                    className="flex justify-center items-center gap-x-4"
                >
                    {blogData?.tags.map((tag:any,index:number) => {
                        return (
                            <div
                                key={index}
                                className="bg-primary text-white rounded-full px-4 py-1"
                            >
                                {tag}
                            </div>
                        )
                    })}


                </div>

        </div>

                    {/* picture */}
                    <div
                        className="flex justify-center items-center w-2/3 "
                    >
                        <img
                            src={`${blogData?.image}`}
                            alt="blog image"
                            className="w-full h-full"
                         />
                    </div>

                    {/* author */}
                    {
                        blogData?.author ? (
                            <div
                                className="flex flex-col justify-center items-center gap-y-4 w-full h-1/6"
                            >
                                {/* author image */}
                                <img
                                    src={`${blogData?.author.profilePicture}`}
                                    alt="author image"
                                    className="w-[60px] h-[60px] rounded-full shadow-lg"
                                />
                                {/* author name */}
                                <div
                                    className="flex flex-col justify-center items-center"
                                >
                                    <div
                                        className="text-xl font-bold"
                                    >
                                        {blogData?.author.name}
                                    </div>
                                    <div
                                        className="text-sm font-bold"
                                    >
                                        {blogData?.author.role}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div
                                className="flex flex-col justify-center items-center gap-y-4 w-full h-1/6"
                            >
                                {/* author image */}
                                <img
                                    src="happy_people.png"
                                    alt="author image"
                                    className="w-[60px] h-[60px] rounded-full shadow-lg"
                                />
                                {/* author name */}
                                <div
                                    className="flex flex-col justify-center items-center"
                                >
                                    <div
                                        className="text-xl font-bold"
                                    >
                                        A2SV
                                    </div>
                                    <div
                                        className="text-sm font-bold"
                                    >
                                        A2SV
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {/* blog */}
                    <div
                        className="flex flex-col justify-center items-center m-auto p-20 pt-10 gap-y-8">
                            {blogData?.description}
                        </div>
                    
            
        </div>
    )
    
}
