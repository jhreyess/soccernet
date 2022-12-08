import { Fragment } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import { PageHeaderView, ContentView } from "../components/layouts/Wrappers";
import Text from "../components/utils/Text";
import Filter from "../components/utils/Filter";
import Searchbar from "../components/utils/Searchbar";
import ListCard from "../components/layouts/ListCard";
import { useState } from "react";

export default function Players(){
    const exampleData = {
        players: [
            {
                player: {
                    id: 882,
                    name: "David de Gea",
                    firstname: "David",
                    lastname: "de Gea Quintana",
                    age: 31,
                    height: "192 cm",
                    weight: "76 kg",
                    injured: false,
                    photo: "https://media.api-sports.io/football/players/882.png"
                },
                statistics: [
                    {
                        team: {
                            name: "Manchester United",
                            logo:"https://media.api-sports.io/football/teams/33.png"
                        },
                        league: {
                            name: "Premier League",
                            country: "England",
                            logo: "https://media.api-sports.io/football/leagues/39.png",
                            flag: "https://media.api-sports.io/flags/gb.svg",
                            season: 2020
                        }
                    },
                    {
                        team: {
                            name: "Manchester United",
                            logo:"https://media.api-sports.io/football/teams/33.png"
                        },
                        league: {
                            name: "League Cup",
                            country: "England",
                            logo: "https://media.api-sports.io/football/leagues/48.png",
                            flag: "https://media.api-sports.io/flags/gb.svg",
                            season: 2020
                        }
                    }
                ]
            },
            {
                player: {
                    id: 883,
                    name: "L. Grant",
                    firstname: "Lee",
                    lastname: "Grant",
                    age: 38,
                    height: "193 cm",
                    weight: "83 kg",
                    injured: false,
                    photo: "https://media.api-sports.io/football/players/883.png"
                },
                statistics: [
                    {
                        team: {
                            name: "Manchester United",
                            logo:"https://media.api-sports.io/football/teams/33.png"
                        },
                        league: {
                            name: "Premier League",
                            country: "England",
                            logo: "https://media.api-sports.io/football/leagues/39.png",
                            flag: "https://media.api-sports.io/flags/gb.svg",
                            season: 2020
                        }
                    },
                    {
                        team: {
                            name: "Manchester United",
                            logo:"https://media.api-sports.io/football/teams/33.png"
                        },
                        league: {
                            name: "League Cup",
                            country: "England",
                            logo: "https://media.api-sports.io/football/leagues/48.png",
                            flag: "https://media.api-sports.io/flags/gb.svg",
                            season: 2020
                        }
                    }
                ]
            },
            {
                player: {
                    id: 884,
                    name: "S. Romero",
                    firstname: "Sergio Germán",
                    lastname: "Romero",
                    age: 34,
                    height: "192 cm",
                    weight: "87 kg",
                    injured: false,
                    photo: "https://media.api-sports.io/football/players/884.png"
                },
                statistics: [
                    {
                        team: {
                            name: "Manchester United",
                            logo:"https://media.api-sports.io/football/teams/33.png"
                        },
                        league: {
                            name: "Premier League",
                            country: "England",
                            logo: "https://media.api-sports.io/football/leagues/39.png",
                            flag: "https://media.api-sports.io/flags/gb.svg",
                            season: 2020
                        }
                    },
                    {
                        team: {
                            name: "Manchester United",
                            logo:"https://media.api-sports.io/football/teams/33.png"
                        },
                        league: {
                            name: "League Cup",
                            country: "England",
                            logo: "https://media.api-sports.io/football/leagues/48.png",
                            flag: "https://media.api-sports.io/flags/gb.svg",
                            season: 2020
                        }
                    }
                ]
            }
        ]
    }

    const [player, setPlayer] = useState({});
    return (
        <Fragment>
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
                {exampleData.players.length ? 
                    exampleData.players.map(playerData => (
                        <ListCard 
                            key={playerData.player.id}
                            image={playerData.player.photo}
                            title={playerData.player.name}
                            subtitle={`${playerData.player.height} - ${playerData.player.weight}`}
                            to={playerData.player.id}
                            onClick={() => setPlayer(playerData)}
                        />
                    )
                ) : (
                    <Text level={2} bold>No hay jugadores para mostrar...</Text>
                )}
            </ContentView>
            <Outlet context={player}/>
        </Fragment>
    );
}

export function usePlayer(){
    return useOutletContext();
}