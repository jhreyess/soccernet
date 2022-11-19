import { Section, PageHeaderView, ContentView, LayoutView } from "../components/layouts/Wrappers";
import Text from "../components/utils/Text";
import Filter from "../components/utils/Filter";
import MatchCard from "../components/layouts/MatchCard";

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
                    <MatchCard 
                        header 
                        title="Jornada 1" 
                        icon={"clock"} 
                        iconInfo="82'" 
                        actionable
                    />
                    <MatchCard 
                        header 
                        title="Jornada 1" 
                        icon={"clock"} 
                        iconInfo="82'" 
                        actionable
                    />
                </ContentView>
            </LayoutView>
        </Section>
    );
}