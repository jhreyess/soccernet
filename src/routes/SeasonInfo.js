import { Navigate, useParams } from "react-router-dom"
import { useSeason } from "./Seasons";

export default function SeasonInfo(){
    const season = useSeason();
    const { seasonId } = useParams();

    // Handling undefined data - SeasonInfo must be accesed from Seasons.js
    // TODO: Add http request to retrieve playerData based on seasonId
    if(!season) return <Navigate to=".."/>

    return(
        <h1>HI THERE! {seasonId}</h1>
    )
}