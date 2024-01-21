import {TeamMember} from "../../types/TeamMember";
import Image from "next/image";
import { SiLinkedin, SiInstagram, SiFacebook } from "react-icons/si";

export default function TeamMemberCard({teamMember}: { teamMember: TeamMember }) {
    return (


        <div className=" flex w-full max-w-sm rounded-b-md h-[740px] w-[400px] shadow-2xl p-14 rounded-2xl">
    <div className="flex flex-col justify-between items-center pb-10 rounded-xl">
        {/* Image */}
                <img
                    className="w-[150px] h-[160px] mb-3 rounded-full shadow-lg"
                    src="happy_people.png"
                    alt="Bonnie image"
                />

        {/* Name */}
                <h5
                    className="mb-1 text-3xl font-medium"
                >{teamMember.name}
                </h5>
        {/* department */}
                <span
                    className="text-xl"
                >{teamMember.department}
                </span>
        {/* bio */}
                <div className="flex items-center mt-6 mb-6 text-center">
                    {teamMember.bio}
                </div>
        {/* divider */}
        <div
            className={'flex justify-center items-center w-full m-5'}
        >
            <div
                className={'w-[100%] h-[2px] bg-gray-200'}
            >
            </div>
        </div>
        {/* socials */}

        <div
            className={ 'flex justify-between w-full m-1 text-gray-50 relative bottom-0'}
        >
            {/* map through socials and create links with the icons */}
            {Object.keys(teamMember.socials).map((key) => {
                if(key === "linkedin"){
                    return (
                        <a
                            href={teamMember.socials[key]}
                            className={'text-4xl text-gray-500'}
                        >
                            <SiLinkedin />
                        </a>
                    )
                }
                if(key === "facebook"){
                    return (
                        <a
                            href={teamMember.socials[key]}
                            className={'text-4xl text-gray-500'}
                        >
                            <SiFacebook />
                        </a>
                    )
                }
                if(key === "instagram"){
                    return (
                        <a
                            href={teamMember.socials[key]}
                            className={'text-4xl text-gray-500'}
                        >
                            <SiInstagram />
                        </a>
                    )
                }

        })
        }

        </div>
        

        {/* socials */}
            </div>
        </div>

    )
}