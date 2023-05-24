import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import Crew from './routes/Crew.tsx';
import Crewman from './routes/Crewman.tsx';
import ErrorPage from './routes/ErrorPage.tsx';
import Home from './routes/Home.tsx';
import Launch from './routes/Launch.tsx';
import Rocket from './routes/Rocket.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


//TODO: integrar backend
//TODO: dashboard
//TODO: adicionar notificacoes

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Rocket",
        element: <Rocket />
      },
      {
        path: "/Launch",
        element: <Launch />
      },
      {
        path: "/Crewman",
        element: <Crewman />
      },
      {
        path: "/Crew",
        element: <Crew />
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
