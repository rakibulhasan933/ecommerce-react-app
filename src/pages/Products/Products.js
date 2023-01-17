import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Pagination from '../../components/Pagination/Pagination';
import Sidebar from '../../components/Sidebar';
import Loading from '../Shared/Loading';
import ProductsCard from './ProductsCard';

const Products = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage] = useState(12);
	let signInError;


	const { data: products, isLoading, error } = useQuery({
		queryKey: ['products'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/products')
			const data = await res.json();
			return data;
		}
	});

	// Get Current page
	const IndexOfLastProducts = currentPage * productsPerPage;
	const IndexOfFirstProducts = IndexOfLastProducts - productsPerPage;
	const currentProducts = products.slice(IndexOfFirstProducts, IndexOfLastProducts);
	// Change Page
	const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

	if (isLoading) {
		return <Loading />
	};
	if (error) {
		signInError = <p className='mb-2 text-center text-red-500'><small>{error?.message}</small> </p>
	};
	return (
		<div className="m-6 bg-slate-100">
			<div className="flex flex-col lg:flex-row">
				<div className='p-8 my-8 basis-1/12'>
					<Sidebar />
				</div>
				<div className='p-2 basis-11/12'>
					<ProductsCard currentProducts={currentProducts} isLoading={isLoading} />
					<Pagination productPerPage={productsPerPage} totalProducts={products.length} paginate={paginate} />
					{signInError}
				</div>
			</div>
		</div>
	);
};

export default Products;