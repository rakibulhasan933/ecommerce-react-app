import React from 'react';

const Categories = () => {
	return (
		<div style={{ height: `calc(100vh - 100px)` }} className=' bg-slate-100'>
			<div className="box-border grid grid-cols-1 md:grid-cols-4">
				<div className="border-4 ">01</div>
				<div className="row-span-3 border-4 ">02</div>
				<div className="border-4 ">03</div>
				<div className="border-4 ">04</div>
				<div className="border-4 ">05</div>
				<div className="col-span-2 border-4 ">07</div>
			</div>
		</div>
	);
};

export default Categories;