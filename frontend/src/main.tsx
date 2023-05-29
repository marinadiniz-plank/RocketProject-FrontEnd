import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Crew from './pages/Crew/Crew.tsx';
import Crewman from './pages/Crewman/Crewman.tsx';
import ErrorPage from './pages/ErrorPage.tsx';
import Home from './pages/Home.tsx';
import Launch from './pages/Launch/Launch.tsx';
import Rocket from './pages/Rocket/Rocket.tsx';

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
