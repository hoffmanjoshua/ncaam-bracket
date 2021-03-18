import React from "react";
import GameCard from "./GameCard.js";

const R64 = ({ data }) => {
	return (
		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-12">
				<h2>West</h2>
				{data.r64.west.map((game, index) => (
					<GameCard gameData={game}></GameCard>
				))}
			</div>
			<div className="col-lg-3 col-md-6 col-sm-12">
				<h2>East</h2>
				{data.r64.east.map((game, index) => (
					<GameCard gameData={game}></GameCard>
				))}
			</div>
			<div className="col-lg-3 col-md-6 col-sm-12">
				<h2>South</h2>
				{data.r64.south.map((game, index) => (
					<GameCard gameData={game}></GameCard>
				))}
			</div>
			<div className="col-lg-3 col-md-6 col-sm-12">
				<h2>Midwest</h2>
				{data.r64.midwest.map((game, index) => (
					<GameCard gameData={game}></GameCard>
				))}
			</div>
		</div>
	);
};

export default R64;
