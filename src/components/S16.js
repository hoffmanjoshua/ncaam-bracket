import React from "react";
import GameCard from "./GameCard.js";

const S16 = ({ data }) => {
	return (
		<div className="row">
			<section className="col-lg-3 col-md-6 col-sm-12">
				<h2>{data.info.regions[0]}</h2>
				<ul>
					<li>
						{data.s16[data.info.regions[0]].map((game, index) => (
							<GameCard gameData={game}></GameCard>
						))}
					</li>
				</ul>
			</section>
			<section className="col-lg-3 col-md-6 col-sm-12">
				<h2>{data.info.regions[1]}</h2>
				<ul>
					<li>
						{data.s16[data.info.regions[1]].map((game, index) => (
							<GameCard gameData={game}></GameCard>
						))}
					</li>
				</ul>
			</section>
			<section className="col-lg-3 col-md-6 col-sm-12">
				<h2>{data.info.regions[2]}</h2>
				<ul>
					<li>
						{data.s16[data.info.regions[2]].map((game, index) => (
							<GameCard gameData={game}></GameCard>
						))}
					</li>
				</ul>
			</section>
			<section className="col-lg-3 col-md-6 col-sm-12">
				<h2>{data.info.regions[3]}</h2>
				<ul>
					<li>
						{data.s16[data.info.regions[3]].map((game, index) => (
							<GameCard gameData={game}></GameCard>
						))}
					</li>
				</ul>
			</section>
		</div>
	);
};

export default S16;
