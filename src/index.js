import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './components/App';

import Home from './routes/Home';
import Live from './routes/Live';
import Players from './routes/Players';
import Leagues from './routes/Leagues';
import Seasons from './routes/Seasons';
import Teams from './routes/Teams';
import Bets from './routes/Bets';
import NotFound from './routes/NotFound';

import PlayerInfo from './routes/PlayerInfo';
import TeamInfo from './routes/TeamInfo';
import SeasonInfo from './routes/SeasonInfo';

const router = createBrowserRouter([
  { path: "/", element: <App />,
    children: [
      { element: <Home />, index: true }, // Default
      { path: "live", element: <Live /> },
      { path: "players", element: <Players />,
        children: [
          { path: ":playerId", element: <PlayerInfo /> }
        ]
      },
      { path: "leagues", element: <Leagues /> },
      { path: "leagues/:leagueId/seasons", element: <Seasons />,
        children: [
          { path: ":seasonId", element: <SeasonInfo /> }
        ]
      },
      { path: "teams", element: <Teams />,
        children: [
          { path: ":teamId", element: <TeamInfo /> }
        ]
       },
      { path: "bets", element: <Bets /> }
    ]
  },
  { path: "*", element: <NotFound /> } // Handling 404
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
