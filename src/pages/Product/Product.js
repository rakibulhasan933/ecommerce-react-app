import React, { useState } from 'react';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

const Product = () => {

	const [selectedImg, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(1);

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
					<h1 className='m-2 text-2xl font-medium'>Long Sleeve Graphic T-Shirt</h1>
					<h3 className='m-2 text-xl text-blue-400' >$ 20</h3>
					<p className='text-base font-normal leading-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia beatae consequatur expedita, magnam reprehenderit ab quibusdam laboriosam, esse veniam natus et nulla deserunt accusamus hic asperiores omnis facilis, officia placeat?</p>
					<div className="m-4">
						<button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : (prev - 1)))} className='p-1 mr-2 border-2 bg-slate-200'><RemoveOutlinedIcon /></button>
						<span className="mr-2">{quantity}</span>
						<button onClick={() => setQuantity((prev) => (prev + 1))} className='p-1 mr-2 border-2 bg-slate-200' ><AddOutlinedIcon /></button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;