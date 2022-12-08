import { Navigate, useParams } from "react-router-dom"
import { useTeam } from "./Teams";

export default function TeamInfo(){
    const team = useTeam();
    const { teamId } = useParams();

    // Handling undefined data - TeamInfo must be accesed from Teams.js
    // TODO: Add http request to retrieve teamData based on teamId
    if(!team) return <Navigate to=".."/>

    return(
        <h1>HI THERE! {teamId}</h1>
    )
}