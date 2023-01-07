import React from 'react';

const Products = () => {
	return (
		<div className="m-6 hero bg-base-200">
			<div className="flex flex-col lg:flex-row">
				<div className='p-4 basis-1/4'>
					<h1 className='text-lg font-semibold '>Products Categories</h1>
					<div className="form-control">
						<label className="flex items-center cursor-pointer">
							<input type="checkbox" className="checkbox checkbox-xs" />
							<span className="ml-4">Jacket</span>
						</label>
						<label className="flex items-center cursor-pointer">
							<input type="checkbox" className="checkbox checkbox-xs" />
							<span className="ml-4 ">T-Shirt</span>
						</label>
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