import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
// import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';
import DisplayError from '../pages/Shared/DisplayError';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		errorElement: <DisplayError />,
		children: [
			{
				path: '/home',
				element: <Home />
			},
			{
				path: '/',
				element: <Product />
			}
		]
	}
]);
export default router;