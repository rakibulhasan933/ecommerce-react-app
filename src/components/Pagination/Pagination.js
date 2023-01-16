import React from 'react';

const Pagination = ({ productPerPage, totalProducts }) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(totalProducts / productPerPage); i++) {
		pageNumbers.push(i);
	};

	return (
		<div className='flex flex-row items-center justify-center'>
			<div className="btn-group">
				{
					pageNumbers?.map((number) => (
						<button className='btn'>{number}</button>
					))
				};
			</div>
		</div>
	);
};

export default Pagination;