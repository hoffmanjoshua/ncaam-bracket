import React from "react";
import GameCard from "./GameCard.js";

const F4 = ({ data }) => {
	return (
		<div>
			<div className="row">
				<div className="col-md-6 col-sm-12">
					<h2>West/East</h2>
					{data.f4.eastwest.map((game, index) => (
						<GameCard gameData={game}></GameCard>
					))}
				</div>
				<div className="col-md-6 col-sm-12">
					<h2>South/Midwest</h2>
					{data.f4.southmidwest.map((game, index) => (
						<GameCard gameData={game}></GameCard>
					))}
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-6 col-sm-12">
					<h2>Championship</h2>
					{<GameCard gameData={data.f4.championship}></GameCard>}
				</div>
			</div>
		</div>
	);
};

export default F4;
