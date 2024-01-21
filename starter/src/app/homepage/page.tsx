
import {Poppins} from "next/font/google";

import { AiOutlineMessage } from "react-icons/ai";
import HomePageCard from "../../../components/Cards/HomePageCard";


const stats = [
    { year: '2020', percent: '50', average: '3.5' },
    { year: '2021', percent: '70', average: '3.7' },
    { year: '2022', percent: '80', average: '3.9' },
    { year: '2023', percent: '90', average: '4.0' },
];

export default function Homepage (){
    return (
        <div
            className={'flex flex-col'}
        >
            {/* first section */}
            <div
                className={'flex justify-between m-20 font-poppins '}
            >
                {/* Text */}
                <div
                    className={'flex flex-col justify-center items-start w-1/2 ml-2'}
                >
                <div
                    className={'text-darkBlue text-7xl font-bold top-0'}
                >
                    Africa to


                    <span className={'text-primary text-7xl font-bold top-0 p-2'}>
                         Silicon
                    </span>
                </div>

                    <div
                        className={' justify-start text-primary text-7xl font-bold top-0'}
                    >
                        Valley

                    </div>
                    <div className={'text-2xl font-serif'}>
                        A2SV up-skills high-potential <br/> university students, connects them <br/> with opportunities at top tech companies
                    </div>
                </div>
                {/* Image */}
                <div
                    className={'flex justify-center items-center'}

                >
                    <img
                        src={'big_image.png'}
                        alt={'next'}
                        width={610}
                        height={590}
                        className={'p-3 m-2 mt-auto flex'}
                    />
                </div>
        </div>

            {/* second section */}
            <div
                className={'flex flex-col justify-between items-center  m-20 font-poppins '}
            >
                {/* Header */}
                 <div
                    className={'flex justify-center items-start  ml-2 text-center text-2xl font-bold '}
                >
                     Lets Build A Better <br/> Tommorow
            </div>
                {/* Text */}
                <div
                    className={'flex flex-col justify-center items-start w-1/2 ml-2 text-center text-lg font-serif'}
                    >
                    SV upskills high-potential university students, connects them with opportunities at top tech companies around <br/>
                    the world, and creates digital solutions to urgent problems in their home countries. The program is free for students,
                    making the opportunity available for youth who have talent but lack the means to use it.

                </div>

                {/* button with icon*/}
                <div
                    className={'flex justify-center items-center w-1/2 ml-2 p-3 text-center text-lg font-serif'}>
                    <button
                        className={'flex text-white justify-center items-center w-1/3 ml-2 text-center text-lg bg-primary font-serif border-2 gap-x-4 border-primary rounded-md p-2'}
                    >
                        <AiOutlineMessage
                            className={'text-white'}
                        />
                        <div
                            className={'text-white'}
                        >
                            Apply Now
                        </div>
                    </button>
                </div>

                {/* Image */}
                <div
                    className={'flex justify-center items-center w-full'}
                    >
                    <img
                        src={'happy_people.png'}
                        alt={'next'}
                        width={610}
                        height={590}
                        className={'w-full flex'}
                    />
                </div>



        </div>

            {/* third section */}
            <div
                className={'flex flex-col justify-between gap-x-4 m-20 font-poppins gap-y-10'} >
            {/* Header */}

            <div
                className={'flex justify-center text-center text-2xl font-bold '}
            >
                Google SWE Interviews Acceptance <br/>
                Rate Comparison
            </div>

            {/* Stats */}
            <div
                className={'flex justify-between h-fit p-6 bg-lightBlue shadow-2xl'}

                >
                <div
                    className={'flex justify-center items-center w-1/4'}
                >
                    A2SV students are 35 <br/> times more likely to <br/> pass Google SWE <br/> interviews than  <br/> average candidates.

                </div>


                    {
                        stats.map((item, index) => (
                            <HomePageCard year={item.year} percent={item.percent} average={item.average} key={index}/>
                        ))
                    }

            </div>

            </div>

                {/* fourth section */}
            <div
                className={'flex flex-col justify-between items-center  m-20 font-poppins '}
>
                {/* First row with an image in a circle on the left and a text paragraph on the right */}
                <div
                    className={'flex justify-between w-full p-16'}
                >
                    {/* Image */}
                    <div
                        className={'flex shadow-inner rounded-full w-[300px] h-[300px]'}
                    >
                        <img
                            src={'happy_people.png'}
                            alt={'next'}
                            width={610}
                            height={590}
                            className={'rounded-full w-[300px] h-[300px] object-cover'}
                        />
                    </div>
                        {/* Text */}
                        <div
                            className={'flex flex-col gap-y-6  text-right'}
                        >
                            <div className={'text-2xl font-bold'}>
                                Internships
                            </div>
                            <div
                                className={'flex flex-col justify-center items-center ml-2 text-right text-lg font-serif'}
                            >
                                Students who passed their interviews get 3-month <br/>
                                internships to gain experience in building scalable products
                                <br/> that are widely used around the world.

                            </div>
                        </div>
                    </div>
                {/* Second row with an image in a circle on the right and a text paragraph on the left */}
                <div
                    className={'flex justify-between w-full p-16'}
                >
                    {/* Text */}
                    <div
                        className={'flex flex-col gap-y-6  text-left'}
                    >
                        <div className={'text-2xl font-bold text-left'}>
                            360° Training
                        </div>
                        <div
                            className={'flex flex-col justify-center text-left items-center text-lg font-serif'}
                        >
                            A2SV upskills students with a 360° software engineering <br/>
                            program that focuses on problem-solving, effective <br/>
                            speaking, and personal development.

                        </div>
                    </div>
                    {/* Image */}
                    <div
                        className={'flex shadow-inner rounded-full w-[300px] h-[300px]'}
                    >
                        <img
                            src={'happy_people.png'}
                            alt={'next'}
                            width={610}
                            height={590}
                            className={'rounded-full w-[300px] h-[300px] object-cover'}
                        />
                    </div>

                </div>
                {/* Third row with an image in a circle on the left and a text paragraph on the right */}
                <div
                    className={'flex justify-between w-full p-16'}
                >
                    {/* Image */}
                    <div
                        className={'flex shadow-inner rounded-full w-[300px] h-[300px]'}
                    >
                        <img
                            src={'happy_people.png'}
                            alt={'next'}
                            width={610}
                            height={590}
                            className={'rounded-full w-[300px] h-[300px] object-cover'}
                        />
                    </div>
                    {/* Text */}
                    <div
                        className={'flex flex-col gap-y-6  text-left'}
                    >
                        <div className={'text-2xl font-bold text-left'}>
                            Social Projects
                        </div>
                        <div
                            className={'flex flex-col justify-center text-left items-center text-lg font-serif'}
                        >
                            Students work on social projects with industry experts to <br/>
                            address the most pressing problems in their community.

                        </div>
                    </div>
                </div>

            </div>
            {/* Section five */}
            <div
                className={'w-full bg-primary h-[340px] flex flex-col gap-y-10 bg-no-repeat bg-center justify-center items-center'}
                style={{ backgroundImage: `url("africa.png")` }}
            >
                <div
                    className={'text-3xl font-normal text-white '}
                >
                    Help us sustain our mission!

                </div>

                <button
                    className={'bg-white text-primary font-normal rounded w-[200px] h-[50px]'}
                >
                    Support Us
                </button>
            </div>


            {/* Section six */}
            <div
                className={'flex flex-col justify-between items-center  m-20 font-poppins '}
                >
                {/* Header */}
                <div
                    className={'flex justify-center items-start  ml-2 text-center text-5xl font-bold '}
                    >
                    Impact stories
                </div>
                {/* section with Text on the left and image on the left */}
                <div
                    className={'flex justify-evenly w-full '}>
                    {/* Text */}
                    <div
                        className={'flex flex-col p-24 gap-y-6  text-left'}
                        >
                        {/* Header */}
                        <div className={'text-2xl font-bold text-left'}>
                            Abel Tsegaye
                        </div>
                        {/* sub header */}
                        <div
                            className={'flex'}>
                            Software Engineer at Google
                        </div>
                        {/* paragraph */}
                        <div
                            className={'flex flex-col justify-center text-left items-center text-lg font-serif'}>
                            “ When I joined A2SV in 2019, I found the concept of data <br/>
                            structures and algorithms quite challenging. A2SV's smooth <br/>
                            learning process and dedicated team molded me to see the <br/>
                            peak of my abilities. Through A2SV's effective education and<br/>
                            continual support, I passed Google's internship interviews and <br/>
                            attended a summer internship at Google in Amsterdam.<br/>
                            However, the A2SV program and training is beyond technical <br/>
                            education and interview preparation. As an A2SVian, I also <br/>
                            learned the values of putting humanity first, giving back to our<br/>
                            community, and utilizing teamwork with my colleagues, which I <br/>
                            can now consider my big family. After completing three<br/>
                            remarkable months at Google, I was offered a full-time position <br/>
                            at Google's London office for 2022. “
                        </div>
                        <button
                            className={'bg-primary text-white font-normal rounded-md w-[150px] h-[50px]'}
                        >
                            See More

                        </button>
                    </div>
                    {/* Image */}
                    <img
                        src={'impact_stories.png'}
                        alt={'next'}
                        width={440}
                        height={610}

                    />

                    
                </div>
            </div>
            {/* devider line */}
            <div
                className={'flex justify-center items-center w-full m-0'}
            >
                <div
                    className={'w-[100%] h-[2px] bg-gray-200'}
                >
                </div>
            </div>
        </div>

    )
}