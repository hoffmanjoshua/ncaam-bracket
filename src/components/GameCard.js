import React from "react";

const GameCard = ({ gameData }) => {
	return (
		<div className="card gamecard is-fluid">
			<div className="card-title mb-10">
				{gameData.date} — {gameData.network}
			</div>
			<div className="card-body">
				<div className="has-text-weight-medium is-size-5">
					<div className="d-flex align-items-center">
						<div>
							<img
								src={"/logos/" + gameData.team1img}
								className="school-icon"
								alt="School Icon"
							/>
						</div>
						<div>
							<span className="team-seed bg-dark-light font-weight-semi-bold text-muted">
								{gameData.team1seed}
							</span>
							{gameData.team1}
							{gameData.pick === "team1" ? (
								<span
									className="josh-prediction"
									data-toggle="tooltip"
									data-title="Josh's Pick"
								>
									J
								</span>
							) : (
								<span></span>
							)}
						</div>
					</div>
				</div>
				<div className="text-left ml-5">vs.</div>
				<div className="has-text-weight-medium is-size-5">
					<div className="d-flex align-items-center">
						<div>
							<img
								src={"/logos/" + gameData.team2img}
								className="school-icon"
								alt="School Icon"
							/>
						</div>
						<div>
							<span className="team-seed bg-dark-light font-weight-semi-bold text-muted">
								{gameData.team2seed}
							</span>
							{gameData.team2}
							{gameData.pick === "team2" ? (
								<span
									className="josh-prediction"
									data-toggle="tooltip"
									data-title="Josh's Pick"
								>
									J
								</span>
							) : (
								<span></span>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default GameCard;
