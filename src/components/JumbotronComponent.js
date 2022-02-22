import React from 'react';
import { Parallax, Background } from 'react-parallax';

export default function JumbotronComponent({ onClick }) {
	return (
		<Parallax className="flex justify-center items-center" strength={200} style={{ minHeight: '75vh' }}>
			<Background className="main-hero">
				{/* <img src='/public/img/andrea-donato-MNu0n-3BIKs-unsplash-lg.jpg' alt='JOAF'/> */}
				<div
					style={{
						width: 2000,
						height: 2000,
						backgroundPosition: 'center center',
						backgroundImage: `url('/img/andrea-donato-MNu0n-3BIKs-unsplash-lg.jpg')`,
						opacity: 0.5
					}}
				/>
			</Background>
			<div className='text-white text-center'>
				<hr />
				<h1 className="mainFont text-8xl ">Jack of All Fades</h1>
				<hr />
			</div>
		</Parallax>
	);
}

// /img/allef-vinicius-IvQeAVeJULw-unsplash-lg.jpg
