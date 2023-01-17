import { EastOutlined, WestOutlined } from '@mui/icons-material';
import React from 'react';


const Slider = () => {
	return (
		<div style={{ height: `calc(100vh - 80px)` }} className="w-full carousel">
			<div id="slide1" className="relative w-full carousel-item">
				<img src="https://i.ibb.co/h2DfNtb/children.jpg" alt='children' className="w-full" />
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide3" className="rounded btn">
						<WestOutlined />
					</a>
					<a href="#slide2" className="rounded btn">
						<EastOutlined />
					</a>
				</div>
			</div>
			<div id="slide2" className="relative w-full carousel-item">
				<img src="https://i.ibb.co/BVfVPC4/woman.jpg" alt='men' className="w-full" />
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide1" className="rounded btn">
						<WestOutlined />
					</a>
					<a href="#slide3" className="rounded btn">
						<EastOutlined />
					</a>
				</div>
			</div>
			<div id="slide3" className="relative w-full carousel-item">
				<img src="https://i.ibb.co/f2zqvvK/pexels-manjeet-singh-yadav-1162983.jpg" alt='women' className="w-full" />
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a href="#slide2" className="rounded btn">
						<WestOutlined />
					</a>
					<a href="#slide1" className="rounded btn">
						<EastOutlined />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Slider;