import Layout from './components/Layout/Layout';
import React from 'react';
import Home from './modules/Home/Home';



const routes = () => {
    return [
        {
            path: '/',
            element: <Layout/>,
            children: [
                {
                    path: '/',
                    element: <Home/>,
                },
            ]
        }
    ]
}

export default routes