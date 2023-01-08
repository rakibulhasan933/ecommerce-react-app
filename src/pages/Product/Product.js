import React, { useState } from 'react';

const Product = () => {

	const [selectedImg, setSelectedImg] = useState(0);

	const images = [
		"https://i.ibb.co/nbYfxDG/pexels-dejan-krstevski-1578997.jpg",
		"https://i.ibb.co/mCx6M6z/pexels-andrea-piacquadio-3772506.jpg"
	];

	return (
		<div className='flex m-6'>
			<div className="basis-1/12">
				<img src={images[0]} alt="men" />
				<img src={images[1]} alt="men" />
			</div>
			<div className=" basis-11/12">
				right
			</div>
		</div>
	);
};

export default Product;