import React from 'react';

const Loading = () => {
	return (
		<div className='flex items-center justify-center h-screen '>
			<div class="flex items-center justify-center flex-col">
				<div class="w-12 h-12 mb-3 border-b-2 border-gray-900 rounded-full animate-spin">
				</div>
				<h2 className='text-2xl font-semibold'> Processing...</h2>
			</div>
		</div>
	);
};

export default Loading;