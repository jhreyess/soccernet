import { Section, PageHeaderView, LayoutView, ContentView } from "../components/layouts/Wrappers";
import Text from "../components/utils/Text";
import Filter from "../components/utils/Filter";

export default function Bets(){
    return (
        <Section>
            <LayoutView>
                <PageHeaderView>
                    <div>
                        <Text level={2} bold>Predicciones</Text>
                        <Text level={3} secondary bold={false}>Liga Mx</Text>
                    </div>
                    <Filter />
                </PageHeaderView>
                <ContentView>
                    
                </ContentView>
            </LayoutView>
        </Section>
    );
}