import { PageHeaderView, ContentView } from "../components/layouts/Wrappers";
import Text from "../components/utils/Text";
import Filter from "../components/utils/Filter";
import Searchbar from "../components/utils/Searchbar";
import ListCard from "../components/layouts/ListCard";
import { Fragment } from "react";

export default function Leagues(){
    const exampleData = {
        response: [
            {
                name:"Premier League",
                type:"League",
                logo:"https://media.api-sports.io/football/leagues/39.png"
            },
            {
                name:"Liga MX",
                type:"League",
                logo:"https://media.api-sports.io/football/leagues/262.png"
            },
            {
                name:"Ascenso MX",
                type:"League",
                logo:"https://media.api-sports.io/football/leagues/263.png",
            },
            {
                name:"Copa MX",
                type:"Cup",
                logo:"https://media.api-sports.io/football/leagues/264.png"
            },
        ]
    }
    return (
        <Fragment>
            <PageHeaderView>
                <div>
                    <div>
                        <Text level={2} bold>Ligas nacionales</Text>
                        <Text level={3} secondary bold={false}>Liga de Inglaterra</Text>
                    </div>
                    <Filter />
                </div>
                <Searchbar placeholder="Nombre de la liga" />
            </PageHeaderView>
            <ContentView>
                {exampleData.response.length ? 
                    exampleData.response.map(league => (
                        <ListCard 
                            decorate
                            image={league.logo}
                            title={league.name}
                        />
                    )
                ) : (
                    <Text level={2} bold>No se han encontrado datos...</Text>
                )}
            </ContentView>
        </Fragment>
    );
}