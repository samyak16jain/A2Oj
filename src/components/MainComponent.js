import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import TableComponent from "./TableComponent";
import ProblemTable from "./ProblemsComponent";

const mapStateToProps = (state) => {
	return {
		probCatWise: state.probCatWise,
		probDivWise: state.probDivWise,
		ProbRatWise: state.ProbRatWise,
	};
};

class Main extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const CategoryWithId = ({ match }) => {
			return <ProblemTable item={this.props.probCatWise.filter((it) => it.id === parseInt(match.params.categoryId, 10))[0]} />;
		};

		const DivisionWithId = ({ match }) => {
			return <ProblemTable item={this.props.probDivWise.filter((it) => it.id === parseInt(match.params.divisionId, 10))[0]} />;
		};

		const RatingWithId = ({ match }) => {
			return <ProblemTable item={this.props.ProbRatWise.filter((it) => it.id === parseInt(match.params.ratingId, 10))[0]} />;
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route path='/home' component={Home} />
					<Route exact path='/divisionladders' component={() => <TableComponent itemList={this.props.probDivWise} itemName='Division' itemType='divisionladders' />} />
					<Route exact path='/ratingladders' component={() => <TableComponent itemList={this.props.ProbRatWise} itemName='Rating' itemType='ratingladders' />} />
					<Route exact path='/categories' component={() => <TableComponent itemList={this.props.probCatWise} itemName='Categories' itemType='categories' />} />
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

export default withRouter(connect(mapStateToProps)(Main));
