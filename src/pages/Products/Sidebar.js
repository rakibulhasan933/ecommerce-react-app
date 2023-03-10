import React, { useState } from 'react';

const Sidebar = () => {
	const [priceValue, setPriceValue] = useState(0);

	const handlePriceValue = (event) => {
		setPriceValue(event.target.value);
	};
	return (
		<div>
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
	);
};

export default Sidebar;