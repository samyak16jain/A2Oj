import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
	Nav,
	Button,
	Navbar,
	NavItem,
	NavbarToggler,
	Collapse,
	DropdownItem,
	DropdownToggle,
	UncontrolledDropdown,
	DropdownMenu,
	Modal,
	ModalHeader,
	ModalBody,
	Form,
	FormGroup,
	Input,
	Label,
} from "reactstrap";

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isNavOpen: false,
			isModalOpen: false,
		};

		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	handleLogin(event) {
		this.toggleModal();
		alert(
			"Username: " +
				this.username.value +
				" Password: " +
				this.password.value +
				" Remember: " +
				this.remember.checked
		);
		event.preventDefault();
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
							<Nav className='ml-auto' navbar>
								<NavItem>
									<Button id='button-login' onClick={this.toggleModal}>
										<span className='fa fa-sign-in fa-lg'></span> Login
									</Button>
								</NavItem>
							</Nav>
						</Collapse>
					</div>
				</Navbar>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleLogin}>
							<FormGroup>
								<Label htmlFor='username'>Username</Label>
								<Input
									type='text'
									id='username'
									name='username'
									innerRef={(input) => (this.username = input)}
								/>
							</FormGroup>
							<FormGroup>
								<Label htmlFor='password'>Password</Label>
								<Input
									type='password'
									id='password'
									name='password'
									innerRef={(input) => (this.password = input)}
								/>
							</FormGroup>
							<FormGroup check>
								<div className='row'>
									<div className='col-sm-12 col-md-6'>
										<Label check>
											<Input
												type='checkbox'
												name='remember'
												innerRef={(input) => (this.remember = input)}
											/>
											Remember me
										</Label>
									</div>
									<div className='col-sm-12 col-md-6'>
										<Button type='submit' value='submit' color='primary'>
											Login
										</Button>
									</div>
								</div>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

export default Header;
