import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Sidebar';
import Loading from '../Shared/Loading';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setLoading] = useState(false);
	console.log(products);

	useEffect(() => {
		setLoading(true);
		fetch('http://localhost:5000/products')
			.then(res => res.json())
			.then(data => {
				setProducts(data);
				setLoading(false);
			});
	}, []);
	return (
		<div className="h-screen m-6 bg-slate-100">
			<div className="flex flex-col lg:flex-row">
				<div className='p-8 my-8 basis-1/12'>
					<Sidebar />
				</div>
				{isLoading ? <Loading /> : <div className='p-4 basis-11/12'>

				</div>}
			</div>
		</div>
	);
};

export default Products;