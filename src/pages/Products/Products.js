import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import ProductsCard from './ProductsCard';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [productsPerPage, setProductsPerPage] = useState(12);

	useEffect(() => {
		setLoading(true);
		fetch('http://localhost:5000/products')
			.then(res => res.json())
			.then(data => {
				setProducts(data);
				setLoading(false);
			});
	}, []);
	// Get Current page
	const IndexOfLastProducts = currentPage * productsPerPage;
	const IndexOfFirstProducts = IndexOfLastProducts - productsPerPage;
	const currentProducts = products.slice(IndexOfFirstProducts, IndexOfLastProducts);


	return (
		<div className="m-6 bg-slate-100">
			<div className="flex flex-col lg:flex-row">
				<div className='p-8 my-8 basis-1/12'>
					<Sidebar />
				</div>
				<div className='p-2 basis-11/12'>
					<ProductsCard currentProducts={currentProducts} isLoading={isLoading} />
				</div>
			</div>
		</div>
	);
};

export default Products;