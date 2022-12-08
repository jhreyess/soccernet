import { PageHeaderView, ContentView } from "../components/layouts/Wrappers";
import Text from "../components/utils/Text";
import Filter from "../components/utils/Filter";
import MatchCard from "../components/layouts/MatchCard";
import { Fragment } from "react";

export default function Bets(){

    const exampleData = {
        league: {
            name: "Primera Division - Clausura",
            country: "Paraguay",
            logo: "https://media.api-sports.io/football/leagues/252.png",
            flag: "https://media.api-sports.io/flags/py.svg",
            season: 2019
        },
        teams: {
            home: {
                name: "Deportivo Santani",
                logo: "https://media.api-sports.io/football/teams/1189.png"
            },
            away: {
                name: "Deportivo Capiata",
                logo: "https://media.api-sports.io/football/teams/1180.png"
            }
        }
    };

    return (
        <Fragment>
            <PageHeaderView>
                <div>
                    <div>
                        <Text level={2} bold>Predicciones</Text>
                    </div>
                    <Filter />
                </div>
            </PageHeaderView>
            <ContentView>
                <MatchCard 
                    actionable
                    home={exampleData.teams.home}
                    away={exampleData.teams.away}
                />
            </ContentView>
        </Fragment>
    );
}