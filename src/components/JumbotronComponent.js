import React from 'react';

export default function JumbotronComponent({onClick}) {
	return (
		<div className='text-white mx-auto text-center'>
			<h1 className='mainFont text-8xl '>Jack of All Fades</h1>
			<button onClick={onClick} className='mt-8 bg-red-500 w-40 rounded' >Book Now</button>
		</div>
	);
}
