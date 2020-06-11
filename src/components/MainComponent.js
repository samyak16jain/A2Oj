import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Home from './HomeComponent';

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={Home} />
					<Route exact path='/divisionladders' component='' />
					<Route exact path='/ratingladders' component='' />
					<Route exacr path='/categories' component='' />
					<Route path='/aboutpage' component='' />
					<Redirect to='/home' />
				</Switch>
			</div>
		);
	}
}

export default Main;
