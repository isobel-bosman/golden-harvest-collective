import React from 'react';
import Home from './pages/home/home.page';
import App from './App';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/not-found/not-found';

const Router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default Router;
