import React from 'react';

export default function HomeComponent() {
	return (
		<div className="min-w-full min-h-screen bg-black">
			<div className="container flex gap-4 w-full h-full justify-between">
				<div className='bg-red-600 w-1/3 h-full min-h-[64px]'>
					<div className="bg-red-300">GET JACK</div>
				</div>
				<div className='w-2/3'>MAP</div>
			</div>
		</div>
	);
}
