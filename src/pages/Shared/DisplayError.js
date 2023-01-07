import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const DisplayError = () => {
	return (
		<>
			<Navbar />
			<div>
				<p className='text-red-500'>Something went wrong!!!</p>
				<p className='text-red-400'>Error Message</p>
				<h4 className="text-3xl"> Please <button>Sign out</button> and log back in</h4>
			</div>
			<Footer />
		</>
	);
};

export default DisplayError;