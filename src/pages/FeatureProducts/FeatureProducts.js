import React from 'react';
import FeatureCard from './FeatureCard';
import Loading from '../Shared/Loading';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const FeatureProducts = () => {

	const { data: products, isLoading } = useQuery({
		queryKey: ['product'],
		queryFn: async () => {
			const res = await fetch('http://localhost:5000/products')
			const data = await res.json();
			return data.slice(0, 8);
		}
	});

	// useEffect(() => {
	// 	setLoading(true);
	// 	fetch('http://localhost:5000/products')
	// 		.then(res => res.json())
	// 		.then(data => {
	// 			setProducts(data.slice(0, 8));
	// 			setLoading(false);
	// 		});
	// }, []);
	return (
		<div className='p-6 m-12 bg-base-100'>
			<div className="flex flex-row py-11">
				<div className="px-12 text-2xl font-semibold text-orange-400 basis-1/2">Featured Products</div>
				<div className="basis-1/2">Today's feather outfits still boast nods to golden-era glamour and vintage boudoir style, but the options are fresh, colorful, seemingly endless, and can even lean casual. Options include shoes dotted with plumes, pants hemmed with quills, feather going-out tops, and of course feathery dresses, too</div>
			</div>
			<>{isLoading ? <Loading />
				:
				<div>
					<div className="grid grid-cols-1 gap-4 px-10 md:grid-cols-4">
						{
							products.map((item) => <FeatureCard key={item._id} item={item} />)
						}
					</div>
					<div className="flex flex-row items-center justify-center my-2 btn-group">
						<button className="bg-blue-500 btn"><Link to='/products'> SEE MORE<KeyboardArrowDownOutlinedIcon /></Link></button>
					</div>
				</div>
			}

			</>

		</div>
	);
};

export default FeatureProducts;