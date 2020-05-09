import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./flip-card.style.css";

function FlipCard({ title, place, time, details }) {
	const [flipped, setFlipped] = useState(false);
	return (
		<div>
			<ReactCardFlip isFlipped={flipped} flipDirection="vertical">
				<div onClick={() => setFlipped(!flipped)} className="card-front">
					<span className="place">{place}</span>
					<span className="title">{title}</span>
					<span className="time">{time}</span>
				</div>
				<div onMouseOut={() => setFlipped(!flipped)} className="card-back">
					<ul className="list">
						{details.map((detail, idx) => {
							return <li key={idx}>{detail}</li>;
						})}
					</ul>
				</div>
			</ReactCardFlip>
		</div>
	);
}

export default FlipCard;
