import { Fragment } from "react";
import { PageHeaderView, ContentView } from "../components/layouts/Wrappers";
import MatchCard from "../components/layouts/MatchCard";
import Text from "../components/utils/Text";
import Filter from "../components/utils/Filter";
import EventIcon from "../components/utils/EventIcon";

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
                    name: "Serie C",
                    country: "Italy",
                    logo: "https://media.api-sports.io/football/leagues/138.png",
                    flag:" https://media.api-sports.io/flags/it.svg",
                    season: 2020,
                    round: "Girone C - 28"
                },
                teams: {
                    home: {
                        id:871,
                        name:"Sambenedettese",
                        logo:"https://media.api-sports.io/football/teams/871.png"
                    },
                    away: {
                        id:877,
                        name:"Triestina",
                        logo:"https://media.api-sports.io/football/teams/877.png"
                    }
                },
                goals: {
                    home: 0,
                    away: 0
                },
                events: [
                    {
                        team: {
                            id: 871,
                        },
                        player: {
                            id: 32177,
                            name: "D. D'Ambrosio"
                        },
                        time: { 
                            elapsed: 22,
                            extra: null
                        },
                        type: "Card",
                        detail: "Red Card"
                    },
                    {
                        team: {
                            id: 877,
                        },
                        player: {
                            id: 31671,
                            name: "W. Lopez"
                        },
                        time: { 
                            elapsed: 24,
                            extra: null
                        },
                        type: "Card",
                        detail: "Yellow Card"
                    },
                    {
                        team: {
                            id: 871,
                        },
                        player: {
                            id: 30959,
                            name: "N. Fazzi"
                        },
                        time: { 
                            elapsed: 37,
                            extra: null
                        },
                        type: "Goal",
                        detail: "Normal Goal"
                    },
                ]
            }
        ]
    };

    const liveMatches = exampleData.response.length ? 
        exampleData.response.map(match => (
            <MatchCard 
                key={match.teams}
                header 
                title={match.league.round} 
                icon={"clock"}
                iconInfo={match.fixture.status.elapsed}
                actionable
                hasScore
                home={match.teams.home}
                away={match.teams.away}
                goals={match.goals}
            >
                <div>
                    {match.events.map(ev => (
                        <div>
                            <Text bold>{ev.player.name} {ev.time.elapsed}'</Text>
                            <EventIcon type={ev.detail} />
                        </div>
                    ))}
                </div>
            </MatchCard>
        )
    ) : (
        <Text level={2} bold>No hay partidos en vivo actualmente...</Text>
    )

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
                {liveMatches}
            </ContentView>
        </Fragment>
    );
}