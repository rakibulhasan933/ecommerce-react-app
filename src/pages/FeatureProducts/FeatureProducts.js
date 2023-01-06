import React from 'react';
import FeatureCard from '../../components/FeatureCard/FeatureCard';

const FeatureProducts = () => {
	const data = [
		{
			id: 1,
			img: "https://i.ibb.co/hL09fH9/pexels-gianni-orefice-4065967.jpg",
			title: "Long Sleeve Graphic T-Shirt",
			isNew: true,
			oldPrice: 30,
			price: 20,
		},
		{
			id: 2,
			img: "https://i.ibb.co/NmYXzMJ/coat1.jpg",
			title: "Jacket",
			isNew: true,
			oldPrice: 40,
			price: 30,
		},
		{
			id: 3,
			img: "https://i.ibb.co/mCx6M6z/pexels-andrea-piacquadio-3772506.jpg",
			title: "Coat",
			oldPrice: 35,
			price: 25,
		},
		{
			id: 4,
			img: "https://i.ibb.co/nbYfxDG/pexels-dejan-krstevski-1578997.jpg",
			title: "Jeans Jacket",
			oldPrice: 40,
			price: 25,
		}

	];
	return (
		<div className='p-6 m-12 bg-base-100'>
			<div className="flex flex-row py-11">
				<div className="px-12 text-2xl font-semibold text-orange-400 basis-1/2">Featured Products</div>
				<div className="basis-1/2"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus nam harum quaerat libero enim ipsam dolore! Officia perferendis voluptatum maxime, nobis quas unde deleniti quisquam quaerat aperiam labore optio molestiae! </div>
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-4">
				{
					data.map((item) => <FeatureCard item={item} />)
				}
			</div>
		</div>
	);
};

export default FeatureProducts;