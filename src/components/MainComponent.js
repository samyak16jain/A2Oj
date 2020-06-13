import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import TableComponent from './TableComponent';
import ProblemTable from './ProblemsComponent';

import { CATEGORIES } from '../shared/Problem_Category_wise';
import { DIVISIONLADDERS } from '../shared/Problem_Division_Wise';
import { RATINGLADDERS } from '../shared/Problem_Rating_Wise';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			probCatWise: CATEGORIES,
			probDivWise: DIVISIONLADDERS,
			ProbRatWise: RATINGLADDERS,
		}
	}

	render() {
		const CategoryWithId = ({ match }) => {
			return (
				<ProblemTable item={this.state.probCatWise.filter((it) => it.id === parseInt(match.params.categoryId, 10))[0]} />
			);
		};

		const DivisionWithId = ({ match }) => {
			return (
				<ProblemTable item={this.state.probDivWise.filter((it) => it.id === parseInt(match.params.divisionId, 10))[0]} />
			);
		};

		const RatingWithId = ({ match }) => {
			return (
				<ProblemTable item={this.state.ProbRatWise.filter((it) => it.id === parseInt(match.params.ratingId, 10))[0]} />
			);
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={Home} />
					<Route exact path='/divisionladders' component={() => <TableComponent itemList={this.state.probDivWise} itemName='Division' itemType='divisionladders' />} />
					<Route exact path='/ratingladders' component={() => <TableComponent itemList={this.state.ProbRatWise} itemName='Rating' itemType='ratingladders' />} />
					<Route exact path='/categories' component={() => <TableComponent itemList={this.state.probCatWise} itemName='Categories' itemType='categories' />} />
					<Route path='/divisionladders/:divisionId' component={DivisionWithId} />
					<Route path='/ratingladders/:ratingId' component={RatingWithId} />
					<Route path='/categories/:categoryId' component={CategoryWithId} />
					<Route path='/aboutpage' component='' />
					<Redirect to='/home' />
				</Switch>
			</div>
		);
	}
}

export default Main;
