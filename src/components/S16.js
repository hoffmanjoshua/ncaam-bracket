import React from "react";
import GameCard from "./GameCard.js";

const S16 = ({ data }) => {
	return (
		<div className="row">
			<div className="col-lg-3 col-md-6 col-sm-12">
				<h2>{data.info.regions[0]}</h2>
				{data.s16[data.info.regions[0]].map((game, index) => (
					<GameCard gameData={game}></GameCard>
				))}
			</div>
			<div className="col-lg-3 col-md-6 col-sm-12">
				<h2>{data.info.regions[1]}</h2>
				{data.s16[data.info.regions[1]].map((game, index) => (
					<GameCard gameData={game}></GameCard>
				))}
			</div>
			<div className="col-lg-3 col-md-6 col-sm-12">
				<h2>{data.info.regions[2]}</h2>
				{data.s16[data.info.regions[2]].map((game, index) => (
					<GameCard gameData={game}></GameCard>
				))}
			</div>
			<div className="col-lg-3 col-md-6 col-sm-12">
				<h2>{data.info.regions[3]}</h2>
				{data.s16[data.info.regions[3]].map((game, index) => (
					<GameCard gameData={game}></GameCard>
				))}
			</div>
		</div>
	);
};

export default S16;
