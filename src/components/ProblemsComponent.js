import React from "react";
import { Table } from "reactstrap";

function RenderProblems({ problems }) {
	const problemstable = problems.map((problem) => {
		return (
			<tr key={problem.ID}>
				<td>{problem.ID}</td>
				<td>
					<a href={problem.link}>{problem["Problem Name"]}</a>
				</td>
				<td>{problem["Difficulty Level"]}</td>
			</tr>
		);
	});
	return problemstable;
}

function RenderTable({ item }) {
	return (
		<div className='container mt-5'>
			<div className='row'>
				<div className='col-6 offset-md-2'>
					<h3 className='text-center'>{item.name}</h3>
				</div>
			</div>
			<div className='row'>
				<div className='col-6 offset-md-2'>
					<Table bordered>
						<thead>
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
				</div>
			</div>
		</div>
	);
}

const ProblemTable = (props) => {
	return <RenderTable item={props.item} />;
};

export default ProblemTable;
