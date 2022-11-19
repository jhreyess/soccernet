import { Section, PageHeaderView, LayoutView, ContentView } from "../components/layouts/Wrappers";
import Text from "../components/utils/Text";

export default function Home(){
    return (
        <Section>
            <LayoutView>
                <PageHeaderView>
                    <div>
                        <Text level={2} bold>¡Bienvenido!</Text>
                        <Text level={3} secondary bold={false}>Soccer Network</Text>
                    </div>
                </PageHeaderView>
                <ContentView>
                    
                </ContentView>
            </LayoutView>
        </Section>
    );
}