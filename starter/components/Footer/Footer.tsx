import Link from "next/link";
import { AiOutlineCopyright } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";

export const Links = [
    { name: 'home', path: '/' },
    { name: 'about', path: '/about' },
    { name: 'success', path: '/success-stories' },
    {
        name: 'get involved',
        path: '/getInvolved',
    },

];

export const Links_to_Teams = [
    {name:'Board Members', path:'/teams'},
    {name: 'Advisors/Mentors', path:'/teams' },
    {name: 'Executives', path:'/teams' },
    {name: 'Staffs', path:'/teams' },

]

const Links_to_blogs = [
    {name:'Recent Blogs', path:'/blogs'},
    {name:'New Blog', path: '/new-blog'}


]
export default function Footer() {
    return (
        <div
            className={'flex flex-col justify-evenly w-full shadow-lg h-[490px] '}
        >
            {/* row with links */}
            <div
                className={'flex justify-evenly items-center w-full mt-8'}
            >
                {/* first column */}
                <div
                    className={'flex'}
                >
                    <img
                        src={'footer_image.png'}
                        alt={'next'}
                        width={238}
                        height={165}
                        className={'p-3 m-2 mt-auto flex'}
                    />

                </div>
                {/* second column */}
                <div
                    className={'flex flex-col gap-y-6  justify-between text-left'}
                >
                    <div
                        className={'text-2xl font-bold '}
                    >
                        Get involved in improving  tech <br/>
                        education in Africa!
                    </div>
                    <button
                        className={'bg-primary text-white font-bold w-[150px] h-[50px] rounded-lg'}
                    >
                        Support Us

                    </button>

                </div>

                {/* third column */}
                <div
                    className={'flex flex-col justify-between gap-y-6'}
                >
                    <div
                        className={'text-2xl font-bold'}
                    >
                        Links

                    </div>
                    {Links.map((item, index) => (
                        <Link href={item.path} key={index} className={`flex relative`}>
                            <div className={`text-lg flex`}>{item.name}</div>
                        </Link>
                    ))}

                </div>

                {/* fourth column */}
                <div
                    className={'flex flex-col justify-between gap-y-6'}
                >
                    <div
                        className={'text-2xl font-bold'}
                    >
                        Links

                    </div>

                    {Links_to_Teams.map((item, index) => (
                        <Link href={item.path} key={index} className={`flex relative`}>
                            <div className={`text-lg flex`}>{item.name}</div>
                        </Link>
                    ))}



                </div>
                {/* fifth column */}
                <div
                    className={'flex flex-col justify-between gap-y-6 h-full pb-24'}
                >
                    <div
                        className={'text-2xl font-bold'}
                    >
                        Blogs

                    </div>

                    {Links_to_blogs.map((item, index) => (
                        <Link href={item.path} key={index} className={`flex relative`}>
                            <div className={`text-lg flex`}>{item.name}</div>
                        </Link>
                    ))}


                </div>

            </div>

            {/* devider line */}
            <div
                className={'flex justify-center items-center w-full m-0'}
            >
                <div
                    className={'w-[95%] h-[2px] bg-gray-200'}
                >
                </div>
            </div>

            {/* copy right and social medias */}
            <div
                className={'flex justify-between items-center justify-center w-full mt-0 relative top-0 text-xl'}
                >
                {/* first column */}
                <div
                    className={'flex'}
                >
                    <span className={'m-2 items-center'}>
                        <AiOutlineCopyright/>
                    </span>
                    2020 Africa to Silicon Valley, Inc. All right reserved.

                </div>
                {/* second column */}

                <div
                className={'flex gap-x-4 bg-opacity-10'}
                >
                    <span className={'m-2 items-center'}>
                        <FaTwitter/>
                    </span>
                    <span className={'m-2 items-center'}>
                        <FaFacebook/>
                    </span>
                    <span className={'m-2 items-center'}>
                        <FaInstagram/>
                    </span>
                    <span className={'m-2 items-center'}>
                        <FaLinkedin/>
                    </span>
                    <span className={'m-2 items-center'}>
                        <FaYoutube/>
                    </span>

                </div>

            </div>

        </div>
    )
}