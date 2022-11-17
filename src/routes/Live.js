import { Section, PageHeaderView, ContentView, LayoutView } from "../components/layouts/Wrappers";
import Text from "../components/Text";
import Filter from "../components/utils/Filter";

export default function Live(){
    return (
        <Section>
            <LayoutView>
                <PageHeaderView>
                    <div>
                        <div>
                            <Text level={2} bold>Partidos en curso</Text>
                            <Text level={3} secondary bold={false}>Liga Mx</Text>
                        </div>
                        <Filter />
                    </div>
                </PageHeaderView>
                <ContentView>
                    <Text level={3} secondary bold={false}>Liga Mx</Text>
                </ContentView>
            </LayoutView>
        </Section>
    );
}