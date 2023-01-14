import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
// import About from '../pages/About/About';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import ResetPassword from '../pages/Login/ResetPassword';
import SingUp from '../pages/Login/SingUp';
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
			},
			{
				path: '/login',
				element: <Login />
			},
			{
				path: '/register',
				element: <SingUp />
			},
			{
				path: '/reset=password',
				element: <ResetPassword />
			}
		]
	}
]);
export default router;