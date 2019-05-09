import React, { Component } from 'react'
import './App1.css';
import logo from "./images/r3.png";



import {
	
	Navbar,
	NavbarBrand,
	Nav

} from 'reactstrap'
import './NavHeader.css'


export default class NavHeader extends Component {

	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render() {
		return (
			<Navbar color="dark" dark={true} light expand="md" style={{ marginLeft: 10, marginTop: 50 }}>
				<NavbarBrand href="/"><a class="navbar-brand" href="#"><img src={logo} style={{ width: "100px", height: "40px", marginLeft: 1400, marginTop:-70 }} /></a></NavbarBrand>
					<Nav navbar style={{ marginTop: -30 }}>
						
					</Nav>
				
			</Navbar>

		)
	}
}