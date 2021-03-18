import React from "react";
import GameCard from "./GameCard.js";

const S16 = ({ data }) => {
	return (
		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-12">
				<h2>West</h2>
				{data.s16.west.map((game, index) => (
					<GameCard gameData={game}></GameCard>
				))}
			</div>
			<div className="col-lg-3 col-md-6 col-sm-12">
				<h2>East</h2>
				{data.s16.east.map((game, index) => (
					<GameCard gameData={game}></GameCard>
				))}
			</div>
			<div className="col-lg-3 col-md-6 col-sm-12">
				<h2>South</h2>
				{data.s16.south.map((game, index) => (
					<GameCard gameData={game}></GameCard>
				))}
			</div>
			<div className="col-lg-3 col-md-6 col-sm-12">
				<h2>Midwest</h2>
				{data.s16.midwest.map((game, index) => (
					<GameCard gameData={game}></GameCard>
				))}
			</div>
		</div>
	);
};

export default S16;
