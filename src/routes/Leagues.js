import { Section, PageHeaderView, LayoutView, ContentView } from "../components/layouts/Wrappers";
import Text from "../components/utils/Text";
import Filter from "../components/utils/Filter";
import Searchbar from "../components/utils/Searchbar";
import ListCard from "../components/layouts/ListCard";

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
        <Section>
            <LayoutView>
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
                    <ListCard 
                        decorate
                        image={exampleData.response[0].logo}
                        title={exampleData.response[0].name}
                    />
                    <ListCard 
                        decorate
                        image={exampleData.response[1].logo}
                        title={exampleData.response[1].name}
                    />
                    <ListCard 
                        decorate
                        image={exampleData.response[2].logo}
                        title={exampleData.response[2].name}
                    />
                    <ListCard 
                        decorate
                        image={exampleData.response[3].logo}
                        title={exampleData.response[3].name}
                    />
                </ContentView>
            </LayoutView>
        </Section>
    );
}