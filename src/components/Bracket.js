import { useState } from "react";
import {useParams, useNavigate} from "react-router-dom"

// Components
import R64 from "./R64";
import R32 from "./R32";
import S16 from "./S16";
import E8 from "./E8";
import F4 from "./F4";

import data_m_current from "../brackets/ncaam.json";
import data_w_current from "../brackets/ncaaw.json";
import w_archive from "../brackets/ncaaw_archive.json";
import m_archive from "../brackets/ncaam_archive.json";

function Bracket({type}) {
	const [page, setPage] = useState("R64");
	let params = useParams()
	let navigate = useNavigate();
	
	let data = type === "m" ? data_m_current : data_w_current
	
	if (params.year) {
		let yr = params.year
		if (type === "m") {
			if (m_archive[yr] !== undefined) {
				data = m_archive[yr]
			} else {
				navigate("/m", { replace: true });
			}
		} else {
			if (w_archive[yr] !== undefined) {
				data = w_archive[yr]
			} else {
				navigate("/w", { replace: true });
			}
		}
	} else {
		data = type === "m" ? data_m_current : data_w_current
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
						
			<div>{getPage()}</div>
		</>
	);
}

export default Bracket;
