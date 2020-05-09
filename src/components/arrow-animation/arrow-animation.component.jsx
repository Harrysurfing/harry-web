import React from "react";
import "./arrow-animation.style.css";

function Arrow({ onClick }) {
	return (
		<div className="arrow-animation" onClick={onClick}>
			<div className="arrow-down delay1">
				<div className="arrow"></div>
			</div>
			<div className="arrow-down delay2">
				<div className="arrow"></div>
			</div>
		</div>
	);
}

export default Arrow;
