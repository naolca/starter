'use client';
import {TeamMember} from "../../../types/TeamMember";
import React, {useEffect} from 'react';
import getTeams from "../../../services/get_teams";
import teamMemberCard from "../../../components/Cards/TeamMemberCard";
import TeamMemberCard from "../../../components/Cards/TeamMemberCard";
import TeamMembers from "../../../components/TeamMembers/TeamMembers";
import {number} from "prop-types";
import Pagination from "../../../components/Pagination/Pagination";


export default function Teams(){




    const [teamMembers, setTeamMembers] = React.useState<TeamMember[]>([]);
    const [pageNumber, setPageNumber] = React.useState<number>(1);
    const [pageSize, setPageSize] = React.useState<number>(4);

    useEffect(() => {
        const teamGetter = async () => {
            const res  = getTeams();
            console.log(res);
            res.then((data) => {
                if( data == undefined){
                    console.log("error");
                    setTeamMembers([]);
                }
                else{
                    setTeamMembers(data);
                }
            })

        }
        teamGetter();
    }, [pageNumber]);


    const indexOfLastTeamMember = pageNumber * pageSize;
    const indexOfFirstTeamMember = indexOfLastTeamMember - pageSize;
    const currentTeamMembers = teamMembers.slice(indexOfFirstTeamMember, indexOfLastTeamMember);
    const paginate = (pageNumber: number) => setPageNumber(pageNumber);
    console.log(pageNumber);



    return (
        <div
            className={'flex flex-col justify-between'}

        >
            {/* the header */}
            <div
                className={'flex justify-between items-center text-left m-16'}>
                {/* the header text */}
                <div
                    className={'flex flex-col'}>
                    {/* the header text */}
                    <div
                        className={'text-5xl text-left mb-6 font-bold'}
                    >
                        The team we’re<br/>
                        currently <br/>
                        working with
                    </div>
                    {/* body of the header text */}
                    <div
                        className={'text-xl text-gray-500 text-left'}>
                        Meet our development team is a small but highly <br/>
                        skilled and experienced group of professionals. We <br/>
                        have a talented mix of web developers, software <br/>
                        engineers, project managers and quality assurance <br/>
                        specialists who are passionate about developing <br/>
                        exceptional products and services.
                    </div>
                </div>

                <img
                    src = {'teamwork.png'}
                />

            </div>


            {/* the body */}
            <TeamMembers teamMembers={currentTeamMembers} pageNumber={pageNumber} pageSize={pageSize} />
            <Pagination pageNumber={pageNumber} pageSize={pageSize} totalTeamMembers={teamMembers.length} paginate={paginate} />

        </div>
    )
}