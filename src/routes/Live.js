import { PageHeaderView, ContentView } from "../components/layouts/Wrappers";
import Text from "../components/utils/Text";
import Filter from "../components/utils/Filter";
import MatchCard from "../components/layouts/MatchCard";
import { Fragment } from "react";

export default function Live(){

    const exampleData = {
        response: [
            {
                fixture: {
                    status: {
                        elapsed: 45
                    }
                },
                league: {
                    name: "1st Division",
                    country: "South-Africa",
                    logo:"https://media.api-sports.io/football/leagues/289.png",
                    flag:"https://media.api-sports.io/flags/za.svg",
                    season: 2020
                },
                teams: {
                    home: {
                        name: "Real Kings",
                        logo: "https://media.api-sports.io/football/teams/10566.png"
                    },
                    away: {
                        name: "Sekhukhune United",
                        logo: "https://media.api-sports.io/football/teams/15537.png"
                    }
                },
                goals: {
                    home: 0,
                    away: 0
                }
            }
        ]
    };
    
    return (
        <Fragment>
            <PageHeaderView>
                <div>
                    <div>
                        <Text level={2} bold>Partidos en curso</Text>
                        <Text level={3} secondary bold={false}>{exampleData.response[0].league.name}</Text>
                    </div>
                    <Filter />
                </div>
            </PageHeaderView>
            <ContentView>
                {exampleData.response.length ? 
                    exampleData.response.map(match => (
                        <MatchCard 
                            key={match.teams}
                            header 
                            title="Jornada 1" 
                            icon={"clock"}
                            iconInfo={match.fixture.status.elapsed}
                            actionable
                            hasScore
                            home={match.teams.home}
                            away={match.teams.away}
                            goals={match.goals}
                        />
                    )
                ) : (
                    <Text level={2} bold>No hay partidos en vivo actualmente...</Text>
                )}
            </ContentView>
        </Fragment>
    );
}