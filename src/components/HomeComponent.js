import React from 'react';
import { Card, CardText, CardBody, CardTitle, CardHeader } from 'reactstrap';

function RenderCard({ item }) {
	return (
		<Card className='mt-5' style={{ width: '30rem' }}>
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
		title: 'Laddres',
		description: 'Climb laddres of diffrent difficulty and rating',
	};
	const categoryinfo = {
		title: 'Categories',
		description: 'Improve specific types of problems',
	};
	return (
		<div className='container'>
			<div className='row align-items-start'>
				<div className='col-12 col-md m-1'>
					<RenderCard item={ladderinfo} />
				</div>
				<div className='col-12 col-md m-1'>
					<RenderCard item={categoryinfo} />
				</div>
			</div>
		</div>
	);
}

export default Home;
