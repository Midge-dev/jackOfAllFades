import React from 'react';
import { Parallax, Background } from 'react-parallax';

const hero = '/img/andrea-donato-MNu0n-3BIKs-unsplash.jpg';

export default function JumbotronComponent({ onClick }) {
	return (
		<Parallax className='flex justify-center items-center' strength={300} style={{ minHeight: '75vh'}}>
			<Background className="">
				{/* <img src='/public/img/andrea-donato-MNu0n-3BIKs-unsplash-lg.jpg' alt='JOAF'/> */}
				<div
					style={{
						width: 2000,
						height: 2000,
						backgroundPosition: "center center",
						backgroundImage: `url('/img/andrea-donato-MNu0n-3BIKs-unsplash-lg.jpg')`
					}}
				/>
			</Background>
			<hr />
			<h1 className="mainFont text-8xl ">Jack of All Fades</h1>
			<hr />
		</Parallax>
	);
}
