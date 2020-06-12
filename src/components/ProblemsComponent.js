import React from 'react';
import { Table } from 'reactstrap';

function RenderProblems({ problems }) {
	const problems = problems.map((problem) => {
		return (
			<tr>
				<td>{problem.id}</td>
				<td>
					<a href={problem.link}>{problem['Problem Name']}</a>
				</td>
				<td>{problem['Difficulty Level']}</td>
			</tr>
		);
	});
	return problems;
}

function RenderTable({ item }) {
	return (
		<Table>
			<thead>
				<tr>{item.name}</tr>
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
	return <RenderTable item={props} />;
};

export default ProblemTable;
