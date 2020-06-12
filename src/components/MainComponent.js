import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Home from './HomeComponent';

import { CATEGORIES } from '../shared/Problem_Category_wise';
import { DIVISIONLADDERS } from '../shared/Problem_Division_Wise';
import { RATINGLADDERS } from '../shared/Problem_Rating_Wise';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: CATEGORIES,
			div_ladder: DIVISIONLADDERS,
			rate_ladder: RATINGLADDERS,
		};
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
