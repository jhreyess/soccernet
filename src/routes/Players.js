import { Section, PageHeaderView, LayoutView, ContentView } from "../components/layouts/Wrappers";
import Text from "../components/utils/Text";
import Filter from "../components/utils/Filter";
import Searchbar from "../components/utils/Searchbar";
import ListCard from "../components/layouts/ListCard";

export default function Players(){
    const exampleData = {
        player: {
            name: "L. Shaw",
            firstname: "Luke",
            lastname: "Shaw",
            age: 26,
            height: "185 cm",
            weight: "75 kg",
            injured: false,
            photo: "https://media.api-sports.io/football/players/891.png"
        },
        statistics: {}
    }

    return (
        <Section>
            <LayoutView>
                <PageHeaderView>
                    <div>
                        <div>
                            <Text level={2} bold>Jugadores</Text>
                            <Text level={3} secondary bold={false}>Manchester United F.C.</Text>
                        </div>
                        <Filter />
                    </div>
                    <Searchbar placeholder="Nombre del jugador" />
                </PageHeaderView>
                <ContentView>
                    <ListCard 
                        image={exampleData.player.photo}
                        title={exampleData.player.name}
                        subtitle={`${exampleData.player.height} - ${exampleData.player.weight}`}
                    />
                    <ListCard 
                        image={exampleData.player.photo}
                        title={exampleData.player.name}
                        subtitle={`${exampleData.player.height} - ${exampleData.player.weight}`}
                    />
                    <ListCard 
                        image={exampleData.player.photo}
                        title={exampleData.player.name}
                        subtitle={`${exampleData.player.height} - ${exampleData.player.weight}`}
                    />
                </ContentView>
            </LayoutView>
        </Section>
    );
}