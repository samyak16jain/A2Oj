import React from 'react';
import { Table } from 'reactstrap';

function RenderProblems({ problems }) {
	const problemstable = problems.map((problem) => {
		return (
			<tr>
				<td>{problem['ID']}</td>
				<td>
					<a href={problem.link}>{problem['Problem Name']}</a>
				</td>
				<td>{problem['Difficulty Level']}</td>
			</tr>
		);
	});
	return problemstable;
}

function RenderTable({ item }) {
	return (
		<Table>
			<thead>
				<div className='container wrapper'>
					<h3>
						<tr>{item.name}</tr>
					</h3>
				</div>
				<tr>
					<th>#</th>
					<th>Problem Name</th>
					<th>Difficulty level</th>
				</tr>
			</thead>
			<tbody>
				<RenderProblems problems={item.problems} />
			</tbody>
		</Table>
	);
}

const ProblemTable = (props) => {
	return <RenderTable item={props.item} />;
};

export default ProblemTable;
