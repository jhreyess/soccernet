import { Fragment, useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { PageHeaderView, ContentView } from "../components/layouts/Wrappers";
import Text from "../components/utils/Text";
import Filter from "../components/utils/Filter";
import Searchbar from "../components/utils/Searchbar";
import ListCard from "../components/layouts/ListCard";

export default function Teams(){
    const exampleData = {
        teams: [
            {
                name:"Manchester United",
                code:"MUN",
                logo:"https://media.api-sports.io/football/teams/33.png",
                country:"England"
            },
            {
                name:"Leicester",
                code:null,
                logo:"https://media.api-sports.io/football/teams/46.png",
                country:"England",
            },
            {
                name:"Newcastle",
                code:null,
                logo:"https://media.api-sports.io/football/teams/34.png",
                country:"England",
            },
            {
                name:"Tottenham",
                code:null,
                logo:"https://media.api-sports.io/football/teams/47.png",
                country:"England",
            }
        ]
    }
    const [team, setTeam] = useState({});
    return (
        <Fragment>
            <PageHeaderView>
                <div>
                    <div>
                        <Text level={2} bold>Equipos</Text>
                        <Text level={3} secondary bold={false}>Premiere League</Text>
                    </div>
                    <Filter />
                </div>
                <Searchbar placeholder="Nombre del equipo" />
            </PageHeaderView>
            <ContentView>
                {exampleData.teams.length ? 
                    exampleData.teams.map(team => (
                        <ListCard
                            key={team.name} 
                            vertical
                            image={team.logo}
                            title={team.name}
                            to={team.name}
                            onClick={() => setTeam(team)}
                        />
                    )
                ) : (
                    <Text level={2} bold>No teams to show...</Text>
                )}
            </ContentView>
            <Outlet context={team} />
        </Fragment>
    );
}

export function useTeam(){
    return useOutletContext();
}