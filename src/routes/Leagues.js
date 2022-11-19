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
                name:"Championship",
                type:"League",
                logo:"https://media.api-sports.io/football/leagues/40.png",
            },
            {
                name:"EFL Trophy",
                type:"Cup",
                logo:"https://media.api-sports.io/football/leagues/46.png"
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
                        vertical
                        decorate
                        image={exampleData.response[0].logo}
                        title={exampleData.response[0].name}
                    />
                    <ListCard 
                        vertical
                        decorate
                        image={exampleData.response[1].logo}
                        title={exampleData.response[1].name}
                    />
                    <ListCard 
                        vertical
                        decorate
                        image={exampleData.response[2].logo}
                        title={exampleData.response[2].name}
                    />
                </ContentView>
            </LayoutView>
        </Section>
    );
}