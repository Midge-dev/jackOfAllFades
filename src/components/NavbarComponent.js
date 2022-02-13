import React from 'react';
import { Navbar, Nav, Offcanvas, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavbarComponent({ onClick }) {
	return (
		<Navbar sticky="top" bg="black" variant="dark" expand={false}>
			<Container className="">
				<Navbar.Brand className="text-white mainFont text-xl" href="#">
					Jack of All Fades
				</Navbar.Brand>
				<div className="m-2 w-44 flex justify-between">
					<Button onClick={onClick} variant="danger">
						Book Now
					</Button>
					<Navbar.Toggle aria-controls="offcanvasNavbar" />
				</div>
				<Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
					<Offcanvas.Header closeButton className="bg-[#080808] text-[#e7c9a9] card-font border-1 rounded border-[#e7c9a9]">
						<Offcanvas.Title id="offcanvasNavbarLabel">Where to?</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body className='bg-[#080808] card-font text-[#e7c9a9]'>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Link to="/">Home</Link>
							<Nav.Link>
								<Link to="/about">About</Link>
							</Nav.Link>
							<Link to="/about">About</Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
}
