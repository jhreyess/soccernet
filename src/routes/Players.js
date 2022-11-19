import { Section, PageHeaderView, LayoutView, ContentView } from "../components/layouts/Wrappers";
import Text from "../components/utils/Text";
import Filter from "../components/utils/Filter";
import Searchbar from "../components/utils/Searchbar";

export default function Players(){
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
            </LayoutView>
            <ContentView>
                
            </ContentView>
        </Section>
    );
}