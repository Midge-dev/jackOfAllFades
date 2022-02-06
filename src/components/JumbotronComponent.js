import React from 'react';

export default function JumbotronComponent({onClick}) {
	return (
		<div className='text-white'>
			<h1>Jack of All Fades</h1>
			<button onClick={onClick}>Modal</button>
		</div>
	);
}
