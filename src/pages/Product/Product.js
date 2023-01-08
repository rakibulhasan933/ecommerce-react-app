import React, { useState } from 'react';

const Product = () => {

	const [selectedImg, setSelectedImg] = useState(0);

	const images = [
		"https://i.ibb.co/GWTyTTf/skirt1.jpg",
		"https://i.ibb.co/mCx6M6z/pexels-andrea-piacquadio-3772506.jpg"
	];

	return (
		<div style={{ height: `calc(100vh - 40px)` }} className='flex m-6'>
			<div className="flex flex-col gap-4 px-1 basis-1/12">
				<img className='w-full h-32 cursor-pointer' src={images[0]} alt="men" onClick={e => setSelectedImg(0)} />
				<img className='w-full h-32 cursor-pointer' src={images[1]} alt="men" onClick={e => setSelectedImg(1)} />
			</div>
			<div className="flex flex-row mx-4 basis-11/12">
				<div className="mx-2 basis-1/2">
					<img className='h-full' src={images[selectedImg]} alt="men" />
				</div>
				<div className="px-2 basis-1/2">
					letter
				</div>
			</div>
		</div>
	);
};

export default Product;