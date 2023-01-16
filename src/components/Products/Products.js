import React, { useState } from 'react';
import FeatureCard from '../FeatureCard/FeatureCard';

const Products = () => {
	const data = [
		{
			id: 1,
			img: "https://i.ibb.co/hL09fH9/pexels-gianni-orefice-4065967.jpg",
			title: "Long Sleeve Graphic T-Shirt",
			isNew: true,
			oldPrice: 30,
			price: 20,
		},
		{
			id: 2,
			img: "https://i.ibb.co/NmYXzMJ/coat1.jpg",
			title: "Jacket",
			isNew: true,
			oldPrice: 40,
			price: 30,
		},
		{
			id: 3,
			img: "https://i.ibb.co/mCx6M6z/pexels-andrea-piacquadio-3772506.jpg",
			title: "Coat",
			oldPrice: 35,
			price: 25,
		},
		{
			id: 4,
			img: "https://i.ibb.co/nbYfxDG/pexels-dejan-krstevski-1578997.jpg",
			title: "Jeans Jacket",
			oldPrice: 40,
			price: 25,
		}

	];

	const [priceValue, setPriceValue] = useState(0);

	const handlePriceValue = (event) => {
		setPriceValue(event.target.value);
	};

	return (
		<div style={{ height: `calc(100vh - 40px)` }} className="m-6 bg-base-200">
			<div className="flex flex-col lg:flex-row">
				<div className='p-8 my-8 basis-1/4'>
					<div className="form-control">
						<h1 className='text-lg font-semibold '>Products Categories</h1>
						<label className="flex items-center cursor-pointer">
							<input type="checkbox" className="checkbox checkbox-xs" />
							<span className="ml-4">Jacket</span>
						</label>
						<label className="flex items-center cursor-pointer">
							<input type="checkbox" className="checkbox checkbox-xs" />
							<span className="ml-4 ">T-Shirt</span>
						</label>
					</div>
					<div className="my-6">
						<h1 className='text-lg font-semibold'>Filter by Price</h1>
						<h6>${priceValue}</h6>
						<input type="range" min="0" max="10000" onChange={handlePriceValue} value={priceValue} className="w-1/2 range range-xs" />
					</div>
					<div className="form-control">
						<h1 className='text-lg font-semibold '>Short by</h1>
						<label className="flex items-center cursor-pointer">
							<input type="checkbox" className="checkbox checkbox-xs" />
							<span className="ml-4">Price(low to High)</span>
						</label>
						<label className="flex items-center cursor-pointer">
							<input type="checkbox" className="checkbox checkbox-xs" />
							<span className="ml-4 ">Price(High to low)</span>
						</label>
					</div>
				</div>
				<div className='p-4 basis-3/4'>
					<div className="grid grid-flow-row-dense grid-cols-3 gap-2 py-8 mx-8">
						<div className="h-48 col-span-3">
							<img className='w-full h-48' src="https://i.ibb.co/jgD95P5/pexels-ksenia-chernaya-3965539.jpg" alt="men" />
						</div>
					</div>
					<div className="grid h-40 grid-cols-1 gap-4 px-10 md:grid-cols-4">
						{
							data.map((item) => <FeatureCard key={item.id} item={item} />)
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Products;