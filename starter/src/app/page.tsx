import Image from 'next/image'
import Header from '../../components/Header/Header';
import Homepage from '../app/homepage/page';
import Teams from '../app/teams/page';
import {Inter} from "next/font/google";
import HomePageCard from "../../components/Cards/HomePageCard";
import Footer from "../../components/Footer/Footer";
import TeamMemberCard from "../../components/Cards/TeamMemberCard";
import {TeamMember} from "../../types/TeamMember";
import {socials} from "../../types/TeamMember";
import SuccessStories from "@/app/success-stories/page";
import Login from './login/page';

const teamMember : TeamMember = {
    "name": "Tadele Girma",
    "bio": "He is a motivated software engineer looking to pursue a successful career in software " +
        "development where he can help deliver software solutions to social problems. " +
        "His skills include Web Development, Data Structures, Machine Learning, and DevOps. Natnael’s hobbies include coding," +
        " playing soccer, and watching movies.",
    "department": "Engineering",
    socials:{
        "linkedin": "linkedin.com/tadele",
        "facebook": "facebook.com/tadele",
        "instagram": "instagram.com/tadele"
    }

}

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
  return (<>
    {/*<HomePageCard year={"2020"} percent={"50"} average={"3.5"} />*/}
    {/*    <Homepage />*/}
    {/*      <Footer />*/}
    {/*      <Teams />*/}
    {/*      <TeamMemberCard teamMember={teamMember} />*/}
          {/* <SuccessStories />
          */}
          <Login />
      </>

  )
}


