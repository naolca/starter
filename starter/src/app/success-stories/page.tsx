'use client';

import React, { CSSProperties, useEffect } from "react";
import { SuccessStory } from "../../../types/success-story";
import { getSuccessStories } from "../../../services/get_success_stories";
import { useGetSuccessStoriesQuery } from "../../redux/slices/success_stories_slice";
import { HashLoader, ClipLoader } from "react-spinners";



export default function SuccessStories (){


    const [successStories, setSuccessStories] = React.useState<SuccessStory[]>([]);
    const { data, error, isLoading } = useGetSuccessStoriesQuery({});

    useEffect(() => {
        setTimeout(() => { 
        }, 5000);
        if (data) {
            setSuccessStories(data);
        }
    }, [data]);

    console.log("this is the data",data);
    
    



    if (isLoading) {
        return (
            <ClipLoader
            color={'#DOO21B'}
            loading={true}
    
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )
    }
    if (error) {
        return (
            <div>
                Error...
            </div>
        )
    }
    else {


    return (
        <div
            className={'flex flex-col justify-between'}
        >
            {/* the header */}

            <div
                className="flex flex-col justify-between items-center text-left m-16 gap-y-4 relative"
            >
                {/* the header text */}
                <div
                    className="self-center text-4xl font-bold"
                >
                    Impact Stories
                </div>
                {/* the header subtext */}
                <div
                    // className={`flex self-center text-xl font-bold text-center after:content-[""] after:absolute after:bottom-4 after:h-4 after:w-full after:bg-primary`}
                    className={`self-center text-center text-2xl flex after:content-[""] after:absolute after:bottom-0 after:left-[45.5%] after:h-1 p-4 after:w-32 after:bg-primary  `}
                    >
                        Behind every success is a story. Learn about the stories of <br/> A2SVians
                    </div>

            </div>
                
                {/* the body **/}

                <div
                    className="m-auto"
                >
                    {/* yisaks story */}
                    <div
                        className="flex justify-between m-24"
                    >
                        {/* Image on the left */}

                        <div
                            className={` h-[900px] w-[640px] flex flex-col justify-end bg-cover m-10 flex-shrink-0`}
                            style={{ backgroundImage: `url(${successStories[0]?.imgURL})` }}
                        >

                            <div
                                className={`flex backdrop-blur-md gap-y-2 w-[640px] h-[240px]`}
                            >
                               <div
                                    className="flex flex-col text-left m-16 gap-y-5 text-white"
                               >
                                    <div
                                            className="text-3xl font-bold"
                                        >
                                            {successStories[0]?.personName}

                                        </div>
                                        <div
                                            className="text-2xl font-bold">
                                            {successStories[0]?.role}

                                        </div>
                                        <div
                                            className="text-2xl font-bold">
                                            {successStories[0]?.location}   
                                        </div>

                                </div>
                            </div>

                        </div>


                    


                        {/* text on the right */}
                        <div
                            className="flex flex-col justify-center items-center text-left m-16 gap-y-14"
                        >
                            {/* map through the stories of story of the current success story and create divs */}

                            {
                            successStories[0]?.story.map((s, index) => {
                                return (
                                    <div
                                    key={index}
                                    className="leading-8"

                                    > 
                                    <div
                                    className="text-left justify-center text-2xl font-bold"
                                    >
                                        {s.heading}
                                    </div>
                                    <div>
                                        {s.paragraph}
                                    </div>
                                    </div>
                                )
                            })}



                        </div>

                    </div>

                    {/* lidyas story */}    

                    <div
                        className="flex justify-between m-24"
                    >

                        {/* text on the left */}
                        <div
                            className="flex flex-col justify-center items-center text-left m-16 gap-y-14"
                        >
                            {/* map through the stories of story of the current success story and create divs */}

                            {
                            successStories[1]?.story.map((s, index) => {
                                return (
                                    <div
                                    key={index}
                                    className="leading-8"

                                    > 
                                    <div
                                    className="text-left justify-center text-2xl font-bold"
                                    >
                                        {s.heading}
                                    </div>
                                    <div>
                                        {s.paragraph}
                                    </div>
                                    </div>
                                )
                            })}



                        </div>

                        {/* Image on the right */}
                        <div
                            className={` h-[900px] w-[640px] flex flex-col justify-end bg-cover m-10 flex-shrink-0`}
                            style={{ backgroundImage: `url(${successStories[1]?.imgURL})` }}
                        >

                            <div
                                className={`flex backdrop-blur-md gap-y-2 w-[640px] h-[240px]`}
                            >
                               <div
                                    className="flex flex-col text-left m-16 gap-y-5 text-white"
                               >
                                    <div
                                            className="text-3xl font-bold"
                                        >
                                            {successStories[1]?.personName}

                                        </div>
                                        <div
                                            className="text-2xl font-bold">
                                            {successStories[1]?.role}

                                        </div>
                                        <div
                                            className="text-2xl font-bold">
                                            {successStories[1]?.location}   
                                        </div>

                                </div>
                            </div>

                        </div>

                    </div>

                    {/* biruks story */}
                    <div
                        className="flex justify-between m-24"
                    >
                        {/* Image on the left */}
                        <div
                            className={` h-[900px] w-[640px] flex flex-col justify-end bg-cover m-10 flex-shrink-0`}
                            style={{ backgroundImage: `url(${successStories[2]?.imgURL})` }}
                        >

                            <div
                                className={`flex backdrop-blur-md gap-y-2 w-[640px] h-[240px]`}
                            >
                               <div
                                    className="flex flex-col text-left m-16 gap-y-5 text-white"
                               >
                                    <div
                                            className="text-3xl font-bold"
                                        >
                                            {successStories[2]?.personName}

                                        </div>
                                        <div
                                            className="text-2xl font-bold">
                                            {successStories[2]?.role}

                                        </div>
                                        <div
                                            className="text-2xl font-bold">
                                            {successStories[2]?.location}   
                                        </div>

                                </div>
                            </div>

                        </div>

                        {/* text on the right */}
                        <div
                            className="flex flex-col justify-center items-center text-left m-16 gap-y-14"
                        >
                            {/* map through the stories of story of the current success story and create divs */}

                            {
                            successStories[2]?.story.map((s, index) => {
                                return (
                                    <div
                                    key={index}
                                    className="leading-8"

                                    > 
                                    <div
                                    className="text-left justify-center text-2xl font-bold"
                                    >
                                        {s.heading}
                                    </div>
                                    <div>
                                        {s.paragraph}
                                    </div>
                                    </div>
                                )
                            })}



                        </div>

                    </div>
                </div>
        </div>
    )
}
}