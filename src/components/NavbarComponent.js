import React from 'react';
import { Navbar, Nav, Offcanvas, Container, Button } from 'react-bootstrap';

export default function NavbarComponent({ onClick }) {
	return (
		<Navbar sticky="top" bg="black" variant='dark' expand={false}>
			<Container className=''>
				<Navbar.Brand className='text-white mainFont' href="#">Jack of All Fades</Navbar.Brand>
				<div className='m-2 w-44 flex justify-between'>
					<Button onClick={onClick} variant="danger" >Book Now</Button>
				<Navbar.Toggle aria-controls="offcanvasNavbar" />
				</div>
				<Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
					<Offcanvas.Header closeButton className=''>
						<Offcanvas.Title id="offcanvasNavbarLabel">Where to?</Offcanvas.Title>
					</Offcanvas.Header>
					<Offcanvas.Body>
						<Nav className="justify-content-end flex-grow-1 pe-3">
							<Nav.Link href="#action1">Home</Nav.Link>
							<Nav.Link href="#action2">Link</Nav.Link>
						</Nav>
					</Offcanvas.Body>
				</Navbar.Offcanvas>
			</Container>
		</Navbar>
	);
}
