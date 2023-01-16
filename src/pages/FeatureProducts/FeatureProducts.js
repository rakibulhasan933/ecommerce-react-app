import React, { useEffect, useState } from 'react';
import FeatureCard from '../../components/FeatureCard/FeatureCard';

const FeatureProducts = () => {
	const [products, setProducts] = useState([]);
	console.log(products);

	useEffect(() => {
		fetch('http://localhost:5000/products')
			.then(res => res.json())
			.then(data => setProducts(data));
	}, []);
	return (
		<div className='p-6 m-12 bg-base-100'>
			<div className="flex flex-row py-11">
				<div className="px-12 text-2xl font-semibold text-orange-400 basis-1/2">Featured Products</div>
				<div className="basis-1/2">Today's feather outfits still boast nods to golden-era glamour and vintage boudoir style, but the options are fresh, colorful, seemingly endless, and can even lean casual. Options include shoes dotted with plumes, pants hemmed with quills, feather going-out tops, and of course feathery dresses, too</div>
			</div>
			<div className="grid grid-cols-1 gap-4 px-10 md:grid-cols-4">
				{
					products.map((item) => <FeatureCard key={item._id} item={item} />)
				}
			</div>
		</div>
	);
};

export default FeatureProducts;