import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
	Nav,
	Navbar,
	NavItem,
	Jumbotron,
	NavbarToggler,
	Collapse,
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
								<NavItem>
									<NavLink className='nav-link' to='/laddres'>
										Laddres
									</NavLink>
								</NavItem>
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
				<Jumbotron className='fluid'>
					<div className='container'>
						<div className='row'>
							<div className='col-3  col-md-2'>
								<img
									src='assets/Codinglogo.png'
									height='83'
									width='83'
									alt='codebrooms'
								/>
							</div>
							<div className='col-9 col-md-6 align-self-center' height='83'>
								<h1 className=''>CodeBrooms</h1>
							</div>
							<div className='col-12'>
								<p className='ml-3 d-none d-sm-block'>
									A place to brush up your competetive programming skills...
									happy coding.
								</p>
							</div>
						</div>
					</div>
				</Jumbotron>
			</div>
		);
	}
}

export default Header;
