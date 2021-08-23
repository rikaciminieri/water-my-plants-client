import React from 'react';
import PlantList from '../../../components/PlantList';

const Main = () => {
	
	return (
		<div>
			<header className='bg-white shadow'>
				<div className='max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8'>
					<h1 className='text-3xl font-bold text-green-900'>
						Welcome back, Rika!
					</h1>
				</div>
			</header>
			<div>
				<div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
					{/* Replace with your content */}
					<div className='px-4 py-6 sm:px-0'>
						<PlantList/>
					</div>
					{/* /End replace */}
				</div>
			</div>
		</div>
	);
};

export default Main;
