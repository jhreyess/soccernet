import { Navigate, useParams } from "react-router-dom"
import { usePlayer } from "./Players";

export default function PlayerInfo(){
    const { player, statistics } = usePlayer();
    const { playerId } = useParams();

    // Handling undefined data - PlayerInfo must be accesed from Players.js
    // TODO: Add http request to retrieve playerData based on playerId
    if(!player || !statistics) return <Navigate to=".."/>

    return(
        <h1>HI THERE! {playerId} - {player.name}</h1>
    )
}