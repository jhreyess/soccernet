import { Section, PageHeaderView, LayoutView, ContentView } from "../components/layouts/Wrappers";
import Text from "../components/Text";
import Filter from "../components/utils/Filter";
import Searchbar from "../components/utils/Searchbar";

export default function Leagues(){
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
            </LayoutView>
            <ContentView>
                
            </ContentView>
        </Section>
    );
}