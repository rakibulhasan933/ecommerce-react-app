import React, { useState } from 'react';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { BalanceOutlined, FavoriteBorderOutlined } from '@mui/icons-material';

const Product = () => {

	const [selectedImg, setSelectedImg] = useState(0);
	const [quantity, setQuantity] = useState(1);

	const images = [
		"https://i.ibb.co/GWTyTTf/skirt1.jpg",
		"https://i.ibb.co/mCx6M6z/pexels-andrea-piacquadio-3772506.jpg"
	];

	return (
		<div className='flex m-6'>
			<div className="flex flex-col gap-4 px-1 basis-1/12">
				<img className='w-full h-32 cursor-pointer' src={images[0]} alt="men" onClick={e => setSelectedImg(0)} />
				<img className='w-full h-32 cursor-pointer' src={images[1]} alt="men" onClick={e => setSelectedImg(1)} />
			</div>
			<div className="flex flex-row mx-4 basis-11/12">
				<div className="mx-2 basis-1/2">
					<img className='h-3/4' src={images[selectedImg]} alt="men" />
				</div>
				<div className="px-2 basis-1/2">
					<h1 className='m-2 text-2xl font-medium tracking-tight'>Long Sleeve Graphic T-Shirt</h1>
					<h3 className='m-2 text-xl text-blue-400' >$ 20</h3>
					<h3 className='m-1 text-base font-medium tracking-tight'>Color : Black</h3>
					<div className="m-4">
						<button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : (prev - 1)))} className='p-1 mr-2 border-2 bg-slate-200'><RemoveOutlinedIcon /></button>
						<span className="mr-2">{quantity}</span>
						<button onClick={() => setQuantity((prev) => (prev + 1))} className='p-1 mr-2 border-2 bg-slate-200' ><AddOutlinedIcon /></button>
					</div>
					<button className='p-2 mx-2 my-4 font-medium text-white bg-blue-500 border cursor-pointer'><span><AddShoppingCartOutlinedIcon /></span> ADD TO CART</button>
					<div className="flex flex-row p-2 m-3 text-blue-500">
						<button className='mr-2 text-base font-normal tracking-tight cursor-pointer' ><FavoriteBorderOutlined />ADD TO WISH LIST</button>
						<button className='text-base font-normal tracking-tight cursor-pointer'> <BalanceOutlined />ADD TO COMPARE</button>
					</div>
					<h2 className='m-2 text-lg font-semibold tracking-tight'>Product Details</h2>
					<div className="flex flex-row m-3">
						<div className="mx-2">
							<h4 className='text-base font-medium tracking-tight'>Fabric Type</h4>
							<h4 className='text-base font-medium tracking-tight'>Care Instructions</h4>
							<h4 className='text-base font-medium tracking-tight'>Origin</h4>
							<h4 className='text-base font-medium tracking-tight'>Country of Origin</h4>
						</div>
						<div className="mx-2 ">
							<h4 className='text-base font-thin tracking-tight'>98% Polyester, 2% Spandex</h4>
							<h4 className='text-base font-thin tracking-tight' >Hand Wash Only</h4>
							<h4 className='text-base font-thin tracking-tight'>Imported</h4>
							<h4 className='text-base font-thin tracking-tight'>Bangladesh</h4>
						</div>
					</div>
					<hr className='w-full bg-gray-600' />
					<h2 className='m-2 text-lg font-medium tracking-tight'>About this Item</h2>
					<div className="m-2">
						<p className='font-normal tracking-tighter lowercase'>BREAKING FASHION BOUNDARIES SINCE 2007: [BLANKYNYC] exploded onto the fashion scene with a ramped up urban attitude and stripped-down irreverent edge, creating approachable clothing and obsession-worthy fits, fabrics, and designs without sacrificing quality</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;