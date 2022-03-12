import { useState } from "react";

// Components

function Archive() {
	const [page, setPage] = useState("R64");
	function switchRound(pageVal) {
		setPage(pageVal);
	}

	return (
		<>
			<h1 className="font-weight-semi-bold">
				Bracket Archive
			</h1>
			<table class="table">
				<thead>
					<tr>
						<th>Year</th>
						<th>Tournament</th>
						<th class="text-right"></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>2022</td>
						<td>NCAAM</td>
						<td class="text-right"><button className="btn">Load</button></td>
					</tr>
					<tr>
						<td>2021</td>
						<td>NCAAM</td>
						<td class="text-right"><button className="btn">Load</button></td>
					</tr>
				</tbody>
			</table>
		</>
	);
}

export default Archive;
