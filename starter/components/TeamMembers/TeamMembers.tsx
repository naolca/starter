'use client';

import {TeamMember} from "../../types/TeamMember";
import TeamMemberCard from "../Cards/TeamMemberCard";
import React from "react";


interface TeamMembersProps{
    teamMembers:TeamMember[];
    pageNumber:Number;
    pageSize:Number;

}
export default function TeamMembers({teamMembers, pageNumber, pageSize}: TeamMembersProps) {

    return (
        <div
            className={'flex justify-between flex-wrap gap-x-4 p-36 m-auto'}
        >
        {teamMembers.map((teamMember) => {

            return (
                <TeamMemberCard teamMember={teamMember} />
            )
        })}



    </div>

    )



}