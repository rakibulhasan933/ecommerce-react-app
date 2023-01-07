import React, { useState } from 'react';

const Products = () => {
	const [priceValue, setPriceValue] = useState(0);

	const handlePriceValue = (event) => {
		setPriceValue(event.target.value)
	};

	return (
		<div className="m-6 hero bg-base-200">
			<div className="flex flex-col lg:flex-row">
				<div className='p-4 basis-1/4'>
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
				</div>
				<div className='p-4 basis-3/4'>
					<h1 className="text-5xl font-bold">Box Office News!</h1>
					<p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
					<button className="btn btn-primary">Get Started</button>
				</div>
			</div>
		</div>
	);
};

export default Products;