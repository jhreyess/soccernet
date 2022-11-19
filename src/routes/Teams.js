import { Section, PageHeaderView, LayoutView, ContentView } from "../components/layouts/Wrappers";
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
    return (
        <Section>
            <LayoutView>
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
                    <ListCard 
                        vertical
                        image={exampleData.teams[0].logo}
                        title={exampleData.teams[0].name}
                    />
                    <ListCard 
                        vertical
                        image={exampleData.teams[1].logo}
                        title={exampleData.teams[1].name}
                    />
                    <ListCard 
                        vertical
                        image={exampleData.teams[2].logo}
                        title={exampleData.teams[2].name}
                    />
                </ContentView>
            </LayoutView>
        </Section>
    );
}