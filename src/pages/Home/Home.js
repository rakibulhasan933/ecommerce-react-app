import React from 'react';
import Categories from '../../components/Categories/Categories';
import Contacts from '../../components/Contacts/Contacts';
import Products from '../../components/Products/Products';
import Slider from '../../components/Slider/Slider';
import FeatureProducts from '../FeatureProducts/FeatureProducts';

const Home = () => {
	return (
		<div>
			<Slider />
			<FeatureProducts />
			<Categories />
			<Products />
			<Contacts />
		</div>
	);
};

export default Home;