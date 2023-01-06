import React from 'react';

const FeatureProducts = () => {
	const data = [
		{
			id: 1,
			img: "https://i.ibb.co/NmYXzMJ/coat1.jpg",
			img2: "https://i.ibb.co/kDtCBLF/womanphoto.jpg",
			title: "Long Sleeve Graphic T-Shirt",
			isNew: true,
			oldPrice: 300,
			price: 200,
		},
		{
			id: 2,
			img: "https://i.ibb.co/NmYXzMJ/coat1.jpg",
			img2: "https://i.ibb.co/kDtCBLF/womanphoto.jpg",
			title: "Long Sleeve Graphic T-Shirt",
			isNew: true,
			oldPrice: 300,
			price: 200,
		},
		{
			id: 3,
			img: "https://i.ibb.co/NmYXzMJ/coat1.jpg",
			img2: "https://i.ibb.co/kDtCBLF/womanphoto.jpg",
			title: "Long Sleeve Graphic T-Shirt",
			isNew: true,
			oldPrice: 300,
			price: 200,
		},
	];
	return (
		<div className='px-6 my-12 bg-base-100'>
			<div className="flex flex-row py-11 ">
				<div className="px-12 text-2xl font-semibold text-orange-400 basis-1/2">Featured Products</div>
				<div className="basis-1/2"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nam harum quaerat libero enim ipsam dolore! Officia perferendis voluptatum maxime, nobis quas unde deleniti quisquam quaerat aperiam labore optio molestiae! </div>
			</div>
		</div>
	);
};

export default FeatureProducts;