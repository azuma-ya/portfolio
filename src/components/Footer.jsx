import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function Footer() {
	return (
		<Navbar
			collapseOnSelect
			expand="lg"
			bg="dark"
			variant="dark"
			className="py-5 mt-5"
		>
			<Container>
				<Navbar.Brand href="#home" className="fs-6">
					<i className="bx bx-copyright me-2"></i>
					Aoyama Kazuki
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#profile">Profile</Nav.Link>
						<Nav.Link href="#skills">Skills</Nav.Link>
						<Nav.Link href="#works">Works</Nav.Link>
						<Nav.Link href="#contact">Contact</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
