import { Outlet, useOutletContext } from "react-router-dom";
import { Section, PageHeaderView, LayoutView, ContentView } from "../components/layouts/Wrappers";
import Text from "../components/utils/Text";
import Filter from "../components/utils/Filter";
// import ListCard from "../components/layouts/ListCard";
import { useState } from "react";

export default function Seasons(){
    const [season, setSeason] = useState({});
    return (
        <Section>
            <LayoutView>
                <PageHeaderView>
                    <div>
                        <div>
                            <Text level={2} bold>Premiere League</Text>
                            <Text level={3} secondary bold={false}>Temporadas</Text>
                        </div>
                        <Filter />
                    </div>
                </PageHeaderView>
                <ContentView>
                    
                </ContentView>
                <Outlet context={season}/>
            </LayoutView>
        </Section>
    );
}

export function useSeason(){
    return useOutletContext();
}