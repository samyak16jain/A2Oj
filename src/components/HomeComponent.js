import React from "react";
import { Card, CardText, CardBody, CardHeader } from "reactstrap";

import Jumbo from "./JumbotoronComponent";

function RenderCard({ item }) {
	return (
		<Card className='mt-5'>
			<CardHeader>
				<h4>{item.title}</h4>
			</CardHeader>
			<CardBody>
				<CardText>{item.description}</CardText>
			</CardBody>
		</Card>
	);
}

function Home() {
	const ladderinfo = {
		title: "Ladders",
		description: "Climb ladders of different difficulty and rating",
	};
	const categoryinfo = {
		title: "Categories",
		description: "Improve specific types of problems",
	};

	return (
		<>
			<Jumbo />
			<div className='container'>
				<div className='row'>
					<div className='col-sm-12 col-md-6'>
						<RenderCard item={ladderinfo} />
					</div>
					<div className='col-sm-12 col-md-6'>
						<RenderCard item={categoryinfo} />
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
