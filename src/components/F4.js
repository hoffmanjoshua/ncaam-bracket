import React from "react";
import GameCard from "./GameCard.js";

const F4 = ({ data }) => {
	return (
		<div>
			<div className="row">
				<section className="col-md-6 col-sm-12">
					<h2>{data.info.regions[0]}/{data.info.regions[1]}</h2>
					{data.f4[data.info.regions[0] + data.info.regions[1]].map((game, index) => (
						<GameCard gameData={game}></GameCard>
					))}
				</section>
				<section className="col-md-6 col-sm-12">
					<h2>{data.info.regions[2]}/{data.info.regions[3]}</h2>
					{data.f4[data.info.regions[2] + data.info.regions[3]].map((game, index) => (
						<GameCard gameData={game}></GameCard>
					))}
				</section>
			</div>
			<div className="row justify-content-center">
				<section className="col-md-6 col-sm-12">
					<h2>Championship</h2>
					{<GameCard gameData={data.f4.championship}></GameCard>}
				</section>
			</div>
		</div>
	);
};

export default F4;
