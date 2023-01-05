import React from 'react';
import { Outlet } from 'react-router-dom';
import Slider from '../components/Slider/Slider';
import Footer from '../pages/Shared/Footer';
import Navbar from '../pages/Shared/Navbar';

const Main = () => {
	return (
		<div>
			<Navbar />
			<Slider />
			<Outlet />
			<Footer />
		</div>
	);
};

export default Main;