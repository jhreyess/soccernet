import { Section, PageHeaderView, LayoutView, ContentView } from "../components/layouts/Wrappers";
import Text from "../components/Text";
import Filter from "../components/utils/Filter";
import Searchbar from "../components/utils/Searchbar";

export default function Teams(){
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
            </LayoutView>
            <ContentView>
                
            </ContentView>
        </Section>
    );
}