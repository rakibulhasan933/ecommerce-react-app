import React from 'react';
import Loading from '../Shared/Loading';
import ProductCard from './ProductCard';

const ProductsCard = ({ currentProducts, isLoading }) => {
	if (isLoading) {
		return <Loading />
	};
	return (
		<div className='grid grid-cols-4 gap-4'>
			{
				currentProducts?.map((item) => <ProductCard key={item.id} item={item} />)
			}
		</div>
	);
};

export default ProductsCard;