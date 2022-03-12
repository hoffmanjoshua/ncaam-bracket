import { useState } from "react";
import {useParams} from "react-router-dom"

// Components
import R64 from "./R64";
import R32 from "./R32";
import S16 from "./S16";
import E8 from "./E8";
import F4 from "./F4";

import data_current from "../brackets/2022.json";
import data_2021 from "../brackets/2021.json";

function Bracket() {
	const [page, setPage] = useState("R64");
	let params = useParams()
	
	let data = data_current

	if (params.year) {
		data = data_2021
	} else {
		data = data_current
	}

	function switchRound(pageVal) {
		setPage(pageVal);
	}

	function getPage() {
		switch (page) {
			case "R64":
				return <R64 data={data}></R64>;
			case "R32":
				return <R32 data={data}></R32>;
			case "S16":
				return <S16 data={data}></S16>;
			case "E8":
				return <E8 data={data}></E8>;
			case "F4":
				return <F4 data={data}></F4>;
			default:
				return <h2>Page Not Found</h2>;
		}
	}

	return (
		<>
			<h1 className="font-weight-semi-bold">
				{data.info.name}&#39;s {data.info.year} {data.info.tournament.toUpperCase()} Bracket
			</h1>
			<div className="flex">
				<div class="btn-group m-auto" role="group" aria-label="Basic example">
					<button
						class={`btn ${page === "R64" ? "btn-primary" : ""}`}
						type="button"
						onClick={() => switchRound("R64")}
					>
						R64
					</button>
					<button
						class={`btn ${page === "R32" ? "btn-primary" : ""}`}
						type="button"
						onClick={() => switchRound("R32")}
					>
						R32
					</button>
					<button
						class={`btn ${page === "S16" ? "btn-primary" : ""}`}
						type="button"
						onClick={() => switchRound("S16")}
					>
						S16
					</button>
					<button
						class={`btn ${page === "E8" ? "btn-primary" : ""}`}
						type="button"
						onClick={() => switchRound("E8")}
					>
						E8
					</button>
					<button
						class={`btn ${page === "F4" ? "btn-primary" : ""}`}
						type="button"
						onClick={() => switchRound("F4")}
					>
						F4
					</button>
				</div>
			</div>
						
						<div class="modal" id="modal-2" tabindex="-1" role="dialog">
							<div class="modal-dialog" role="document">
								<div class="modal-content">
									<a href="#" class="btn close" role="button" aria-label="Close">
										<span aria-hidden="true">&times;</span>
									</a>
									<h5 class="modal-title">Bracket Archive</h5>
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
												<td>2021</td>
												<td>NCAAM</td>
												<td class="text-right"><button className="btn">Load</button></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
						
			<div>{getPage()}</div>
		</>
	);
}

export default Bracket;
