import React from 'react';

const FeatureCard = ({ item }) => {
	const { img, title, isNew } = item;
	return (
		<div className="relative w-full shadow-xl card card-compact bg-base-100 h-80">
			<figure><img className='object-cover h-64' src={img} alt="Shoes" /></figure>
			{isNew && <div className="absolute top-0 left-0 p-1 bg-white border">
				<p className='text-xs text-slate-400'>New Season</p>
			</div>}
			<div className="card-body">
				<h2 className="font-medium ">{title}</h2>
			</div>
		</div>
	);
};

export default FeatureCard;