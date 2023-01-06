import React from 'react';

const Categories = () => {
	return (
		<div style={{ height: `calc(100vh - 100px)` }} className='m-6 bg-slate-100'>
			<div className="grid grid-cols-1 md:grid-cols-4">
				<div className="border-4 ">
					<figure>
						<img src="https://i.ibb.co/82ZytFc/pexels-pixabay-458766.jpg" alt="men" />
					</figure>
				</div>
				<div className="row-span-3 border-4 ">
					<figure>
						<img src="https://i.ibb.co/64Bj5HL/pexels-light-vibe-990675.jpg" alt="men" />
					</figure>
				</div>
				<div className="border-4 ">
					<figure>
						<img src="https://i.ibb.co/fQ6d0np/pexels-ksenia-chernaya-3965543.jpg" alt="men" />
					</figure>
				</div>
				<div className="border-4 ">
					<figure>
						<img src="https://i.ibb.co/RPcsH4W/pexels-helena-lopes-1049317.jpg" alt="men" />
					</figure>
				</div>
				<div className="border-4 ">
					<figure>
						<img src="https://i.ibb.co/30GHm3N/pexels-r-fera-432059.jpg" alt="men" />
					</figure>
				</div>
				<div className="col-span-2 border-4 ">
					<figure>
						<img src="https://i.ibb.co/YX8WB3Q/pexels-burst-373964.jpg" alt="men" />
					</figure>
				</div>
			</div>
		</div>
	);
};

export default Categories;