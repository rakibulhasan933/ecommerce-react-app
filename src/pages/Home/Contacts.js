import React from 'react';

const Contacts = () => {
	return (
		<div className='py-8 m-6 bg-emerald-200'>
			<div className="px-12">
				<label className="flex flex-row items-center justify-center">
					<input type="email" placeholder="username@gmail.com" className="input input-bordered" />
					<button className="rounded btn btn-primary">Subscribe</button>
				</label>
			</div>
		</div>
	);
};

export default Contacts;