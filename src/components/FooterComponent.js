import React from 'react'

export default function FooterComponent() {
  return (
    <div>
        <footer>
			<section className="bg-black">
				<div className="container">
					<div className="row d-flex justify-content-between align-items-center">
						<div className="col-12 col-sm-3">
							<ul className="list-unstyled footerLink">
								<br />
								<li><a href="#">Home</a></li>
								<li><a href="services.html">Services</a></li>
								<li><a href="gallery.html">Gallery</a></li>
								<li><a href="aboutus.html">About</a></li>
								<li><a href="contact.html">Contact</a></li>
							</ul>
						</div>
						<div className="col-sm-6 col-12 text-center footerLink">
							<p>For all other inquiries:</p>
							<h5>
								<a href="mailto:rachel@jackofallfades.co"
									>rachel<wbr />@jackofallfades.co</a
								>
							</h5>
							<br />
							<img
								src="/img/Barbers-Chair-25-white.png"
								width="90"
								height="90"
								alt=""
							/>
						</div>
						<div className="col-12 col-sm-3 mt-2 footerLink text-center">
							<h5>Social</h5>
							<a
								className="btn btn-social-icon btn-instagram"
								href="http://instagram.com/"
								><i className="fa fa-instagram"></i
							></a>
							<a
								className="btn btn-social-icon btn-facebook"
								href="http://facebook.com/"
								><i className="fa fa-facebook"></i
							></a>
							<a
								className="btn btn-social-icon btn-twitter"
								href="http://twitter.com/"
								><i className="fa fa-twitter"></i
							></a>
							<a
								className="btn btn-social-icon btn-google"
								href="http://youtube.com/"
								><i className="fa fa-youtube"></i
							></a>
						</div>
					</div>
				</div>
			</section>
		</footer>
    </div>
  )
}
