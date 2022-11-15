import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Template from './components/Template';

import Home from './routes/Home';
import Live from './routes/Live';
import Players from './routes/Players';
import Leagues from './routes/Leagues';
import Teams from './routes/Teams';
import Bets from './routes/Bets';
import NotFound from './routes/NotFound';

const router = createBrowserRouter([
  { path: "/", element: <Template />, 
    children: [
      { element: <Home />, index: true }, // Default
      { path: "live", element: <Live /> },
      { path: "players", element: <Players /> },
      { path: "leagues", element: <Leagues /> },
      { path: "teams", element: <Teams /> },
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
