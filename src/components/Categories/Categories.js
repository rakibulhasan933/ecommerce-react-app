import React from 'react';

const Categories = () => {
	return (
		<div style={{ height: `calc(100vh - 50px)` }} className='m-6 bg-slate-100'>
			<div className="grid grid-flow-row-dense grid-cols-4">
				<div className='relative '>
					<img className='object-cover w-full h-full' src="https://i.ibb.co/82ZytFc/pexels-pixabay-458766.jpg" alt="men" />
					<div className="absolute p-1 top-1/2 bottom-1/2 left-1/2">
						<h2 className=' bg-slate-100'>WOMAN</h2>
					</div>
				</div>
				<div className="row-span-3">
					<img className='object-cover w-full h-full' src="https://i.ibb.co/64Bj5HL/pexels-light-vibe-990675.jpg" alt="men" />
				</div>
				<div className="">
					<img className='object-cover w-full h-full' src="https://i.ibb.co/fQ6d0np/pexels-ksenia-chernaya-3965543.jpg" alt="men" />
				</div>
				<div className="">
					<img className='object-cover w-full h-full' src="https://i.ibb.co/RPcsH4W/pexels-helena-lopes-1049317.jpg" alt="men" />
				</div>
				<div className="">
					<img className='object-cover w-full h-full' src="https://i.ibb.co/hL09fH9/pexels-gianni-orefice-4065967.jpg" alt="men" />
				</div>
				<div className="col-span-2">
					<img className='object-cover w-full h-full' src="https://i.ibb.co/YX8WB3Q/pexels-burst-373964.jpg" alt="men" />
				</div>
			</div>
		</div>
	);
};

export default Categories;