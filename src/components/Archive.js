import {Link} from 'react-router-dom'

import w_archive from "../brackets/ncaaw_archive.json";
import m_archive from "../brackets/ncaam_archive.json";

function Archive() {
	
	let archive = []
	for (const year in w_archive) {
		archive.push({"type": "NCAAW", "year": year, "path": "/w/" + year})
	}
	for (const year in m_archive) {
		archive.push({"type": "NCAAM", "year": year, "path": "/m/" + year})
	}
	archive.sort((a, b) => (a.year > b.year) ? 1 : -1)
	
	
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
						<td class="text-right"><Link className="btn btn-primary" to="/m">Load</Link></td>
					</tr>
					<tr>
						<td>2022</td>
						<td>NCAAW</td>
						<td class="text-right"><Link className="btn btn-primary" to="/w">Load</Link></td>
					</tr>
					{archive.map((entry, index) => 
						<tr>
							<td>{entry.year}</td>
							<td>{entry.type}</td>
							<td class="text-right"><Link className="btn btn-primary" to={entry.path}>Load</Link></td>
						</tr>
					)}
				</tbody>
			</table>
		</>
	);
}

export default Archive;
