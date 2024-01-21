import {TeamMember} from "../types/TeamMember";

export default async function getTeams() {
    try {


        const res = await fetch('https://a2sv-backend.onrender.com/api/members');
        if (!res.ok) {
            throw new Error(res.statusText);
        }
        // from each team member, create a TeamMember object and collect them in a list called teams and return it
        //
        const teams: TeamMember[] = [];
        const data = await res.json();
        data.forEach((teamMember: any) => {
            const team: TeamMember = {
                name: teamMember.name,
                bio: teamMember.bio,
                department: teamMember.department,
                socials: {
                    linkedin: teamMember.socialMedia.linkedin,
                    facebook: teamMember.socialMedia.facebook,
                    instagram: teamMember.socialMedia.instagram
                }
            }
            teams.push(team);
        });
        return teams;
    } catch (error) {
        console.log(error);
    }

}