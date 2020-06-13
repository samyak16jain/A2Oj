import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
	Nav,
	Navbar,
	NavItem,
	Jumbotron,
	NavbarToggler,
	Collapse,
	DropdownItem,
	DropdownToggle,
	UncontrolledDropdown,
	DropdownMenu,
} from 'reactstrap';

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false,
		};

		this.toggleNav = this.toggleNav.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}

	render() {
		return (
			<div>
				<Navbar dark color='danger' expand='md'>
					<div className='container'>
						<NavbarToggler onClick={this.toggleNav} />
						<Collapse isOpen={this.state.isNavOpen} navbar>
							<Nav navbar>
								<NavItem>
									<NavLink className='nav-link' to='/home'>
										Home
									</NavLink>
								</NavItem>
								<UncontrolledDropdown nav inNavbar>
									<DropdownToggle nav caret>
										Ladders
									</DropdownToggle>
									<DropdownMenu right id='nav-dropdown'>
										<DropdownItem>
											<NavLink className='nav-link' to='/divisionladders'>
												Division Ladders
											</NavLink>
										</DropdownItem>
										<DropdownItem>
											<NavLink className='nav-link' to='/ratingladders'>
												Rating Ladders
											</NavLink>
										</DropdownItem>
									</DropdownMenu>
								</UncontrolledDropdown>
								<NavItem>
									<NavLink className='nav-link' to='/categories'>
										Categories
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className='nav-link' to='/aboutpage'>
										About page
									</NavLink>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
			</div>
		);
	}
}

export default Header;
