import React from 'react';
import { Parallax, Background } from 'react-parallax';

export default function HomeComponent() {
	return (
		<>
		<div className="min-w-full  bg-black md:p-6">
			<div className="container md:flex gap-4 w-full h-full justify-between">
				<div className="card-font text-center items-center bg-[#e7c9a9] md:w-1/3 mt-2 w-full h-full min-h-[12em] rounded-lg">
					<h1 className="bg-black pt-3 rounded-lg text-[#e7c9a9] border-3 border-[#e7c9a9] text-6xl">
						Get Bold.
					</h1>
					<p className="font-bold italic text-xl">EXPERIENCE PRECISION</p>
					<p className="font-bold text-lg p-3">
						Founded with over ten years of experience, Jack of All Fades focuses on precision grooming for
						Men. Click the Book Now button to get started, or if you have any questions about our services,
						please feel free to check out the contact page. Looking forward to serving you!
					</p>
					<img src="img/beardedclear.png" alt="Get Jack" className="" />
				</div>
				<div className="w-full md:w-2/3">
					<h1 className='banner flex justify-center text-white text-center text-5xl mt-4'>Serving the Summerlin Area</h1>
					<div>
				<iframe className='w-full h-96 mt-8 rounded-lg' title='GMaps'
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.9944486231657!2d-115.28914208394916!3d36.16668971080041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf86523a6539%3A0xe2cd727e83aa610d!2s430%20S%20Rampart%20Blvd%20%23150%2C%20Las%20Vegas%2C%20NV%2089145!5e0!3m2!1sen!2sus!4v1634099018536!5m2!1sen!2sus"
						></iframe>
				</div>
				<div className='text-white flex justify-center mt-3'>
					<button className='bg-red-500 hover:bg-red-900 w-full h-10 rounded'>Map it!</button>
				</div>
				<div className='text-center banner text-white'>
					<h2>
					<br />Welcome to Jack of All Fades<br />the last stylist you'll ever need<br />to get started, pick an available appointment date
					</h2>
				</div>
				</div>
				
			</div>
		</div>

		<div className='w-full'>
		<Parallax className='flex justify-center items-center' strength={200} style={{ minHeight: '50vh'}}>
			<Background>
				<div
					style={{
						width: 2000,
						height: 2000,
						backgroundPosition: "bottom",
						backgroundSize: 'auto',
						backgroundImage: `url('/img/allef-vinicius-IvQeAVeJULw-unsplash-lg.jpg')`,
						opacity: 0.5
					}}
				/>
			</Background>
			<div className='text-white'>
			<hr />
			<h1 className="mainFont text-8xl text-center">Precision Styles</h1>
			<hr />
			</div>
		</Parallax>
		</div>

			<div className="min-w-full  bg-black p-6">
			<div className="container flex gap-4 w-full h-full justify-between">
				<div>
				<div className="w-2/3">MAP</div>
				</div>
				<div className="card-font text-center items-center bg-[#e7c9a9] w-1/3 h-full min-h-[12em] rounded-lg">
					<h1 className="bg-black pt-3 rounded-lg text-[#e7c9a9] border-3 border-[#e7c9a9] text-6xl">
						Get Jack.
					</h1>
					<p className="font-bold text-lg p-3 italic">
					Not just who you are, but who you become.
					</p>
					<img src="/img/styles.png" alt="Get Jack" className="p-2" />
				</div>
			</div>
		</div>

		<div className='w-full'>
		<Parallax className='flex justify-center items-center' strength={200} style={{ minHeight: '75vh'}}>
			<Background className="main-hero">
				<div
					style={{
						width: 2000,
						height: 2000,
						backgroundPosition: "bottom center",
						backgroundImage: `url('/img/chris-knight-_H1XXY96pqw-unsplash-lg.jpg')`,
						opacity: 0.5
					}}
				/>
			</Background>
			<div className='text-white'>
			<hr />
			<h1 className="mainFont text-8xl text-center">10 years in the making</h1>
			<hr />
			</div>
		</Parallax>
		</div>
		</>
	);
}
