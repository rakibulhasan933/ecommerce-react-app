import React from 'react';
import Categories from '../../components/Categories/Categories';
import Slider from '../../components/Slider/Slider';
import FeatureProducts from '../FeatureProducts/FeatureProducts';

const Home = () => {
	return (
		<div>
			<Slider />
			<FeatureProducts />
			<Categories />
		</div>
	);
};

export default Home;