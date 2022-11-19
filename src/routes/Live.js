import { Section, PageHeaderView, ContentView, LayoutView } from "../components/layouts/Wrappers";
import Text from "../components/utils/Text";
import Filter from "../components/utils/Filter";
import MatchCard from "../components/layouts/MatchCard";

export default function Live(){

    const exampleData = {
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
    };
    
    return (
        <Section>
            <LayoutView>
                <PageHeaderView>
                    <div>
                        <div>
                            <Text level={2} bold>Partidos en curso</Text>
                            <Text level={3} secondary bold={false}>{exampleData.league.name}</Text>
                        </div>
                        <Filter />
                    </div>
                </PageHeaderView>
                <ContentView>
                    <MatchCard 
                        header 
                        title="Jornada 1" 
                        icon={"clock"}
                        iconInfo={exampleData.fixture.status.elapsed}
                        actionable
                        hasScore
                        home={exampleData.teams.home}
                        away={exampleData.teams.away}
                        goals={exampleData.goals}
                    />
                    <MatchCard 
                        header 
                        title="Jornada 1" 
                        icon={"clock"}
                        iconInfo={exampleData.fixture.status.elapsed}
                        actionable
                        hasScore
                        home={exampleData.teams.home}
                        away={exampleData.teams.away}
                        goals={exampleData.goals}
                    />
                    <MatchCard 
                        header 
                        title="Jornada 1" 
                        icon={"clock"}
                        iconInfo={exampleData.fixture.status.elapsed}
                        actionable
                        hasScore
                        home={exampleData.teams.home}
                        away={exampleData.teams.away}
                        goals={exampleData.goals}
                    />
                </ContentView>
            </LayoutView>
        </Section>
    );
}