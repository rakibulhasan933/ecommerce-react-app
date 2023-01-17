import React from 'react';
import Categories from './Categories';
import Contacts from './Contacts';
import Slider from './Slider';
import FeatureProducts from '../FeatureProducts/FeatureProducts';

const Home = () => {
	return (
		<div>
			<Slider />
			<FeatureProducts />
			<Categories />
			<Contacts />
		</div>
	);
};

export default Home;