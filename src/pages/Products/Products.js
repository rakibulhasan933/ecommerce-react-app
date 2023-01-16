import React, { useState } from 'react';
import Sidebar from '../../components/Sidebar';

const Products = () => {

	return (
		<div style={{ height: `calc(100vh - 40px)` }} className="m-6 bg-slate-100">
			<div className="flex flex-col lg:flex-row">
				<div className='p-8 my-8 basis-1/12'>
					<Sidebar />
				</div>
				<div className='p-4 basis-11/12'>

				</div>
			</div>
		</div>
	);
};

export default Products;