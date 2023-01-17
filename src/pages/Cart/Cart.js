import { DeleteOutlined } from '@mui/icons-material';
import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
	const products = useSelector((state) => state.cart.products);
	console.log(products);

	return (
		<div className='absolute z-40 p-5 bg-white shadow-md right-5 top-20'>
			<h2 className='m-2 text-xl font-semibold text-center text-orange-400'>Products in your Cart</h2>
			<div className="flex flex-col m-2">
				{
					products?.map((item) => (
						<div key={item.id} className='flex flex-row items-center mb-2 shadow'>
							<img className='object-cover w-20 h-24 mr-2' src={item?.img} alt="products" />
							<div className="flex flex-col mr-4 ">
								<h1 className='text-base font-normal'>{item?.title}</h1>
								<h5 className='text-base font-medium text-blue-500'>1 X ${item?.price} </h5>
							</div>
							<DeleteOutlined className='mx-4 text-6xl text-red-500 cursor-pointer' />
						</div>
					))
				}
			</div>
			<div className="flex flex-row justify-between m-3">
				<span className="text-lg font-medium">TOTAL</span>
				<span className="text-lg font-medium text-blue-500">$ 1234</span>
			</div>
			<button className='flex items-center justify-center w-64 gap-5 p-2 mb-2 font-medium text-white bg-blue-500 border-none'>PROCEED TO CHECKOUT</button>
			<h3 className='m-2 text-lg font-normal text-red-600 cursor-pointer'>Reset Cart</h3>
		</div>
	);
};

export default Cart;