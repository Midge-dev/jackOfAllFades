import React from 'react';
import { Parallax } from 'react-parallax';

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
					<h1 className='banner flex justify-center text-white'>Serving the Summerlin Area</h1>
					<div>
				<iframe className='w-full' title='GMaps'
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.9944486231657!2d-115.28914208394916!3d36.16668971080041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8bf86523a6539%3A0xe2cd727e83aa610d!2s430%20S%20Rampart%20Blvd%20%23150%2C%20Las%20Vegas%2C%20NV%2089145!5e0!3m2!1sen!2sus!4v1634099018536!5m2!1sen!2sus"
						></iframe>
				</div>
				</div>
				
			</div>
		</div>

		<div className='w-full'>
			<Parallax bgImage={'/img/allef-vinicius-IvQeAVeJULw-unsplash-lg.jpg'} strength={300}>
			<div className='min-h-[40vh]'></div>
			</Parallax>
			</div>

			<div className="min-w-full  bg-black p-6">
			<div className="container flex gap-4 w-full h-full justify-between">
				<div className="card-font text-center items-center bg-[#e7c9a9] w-1/3 h-full min-h-[12em] rounded-lg">
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
				<div className="w-2/3">MAP</div>
			</div>
		</div>

		<div className='w-full'>
			<Parallax bgImage={'/img/chris-knight-_H1XXY96pqw-unsplash-lg.jpg'} strength={300}>
			<div className='min-h-[40vh]'></div>
			</Parallax>
			</div>
		</>
	);
}

{
	/* <div class="card-body">
								<p class="card-title text-center">EXPERIENCE PRECISION</p>
								<p class="card-text text-center">
									Founded with over ten years of experience, Jack of All Fades
									focuses on precision grooming for Men. Click the Book Now
									button to get started, or if you have any questions about our
									services, please feel free to check out the contact page.
									Looking forward to serving you!
									<br />-Jack
								</p>
								<img src="/img/beardedclear.png" style="width: 100%" alt="" />
								<a
									href="#bookFlow"
									data-toggle="modal"
									class="btn btn-dark d-flex justify-content-center"
									>Get an Appointment Today!</a
								>
							</div> */
}
