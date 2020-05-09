import React from "react";
import "./about.style.css";
import { paragrah } from "./about.data";
import { withRouter } from "react-router-dom";

function About({ history }) {
	return (
		<div className="about-container">
			<span className="header">about me</span>
			<p className="bio">{paragrah.bio}</p>
			<button
				onClick={() => history.push("/contact")}
				className="contact-button"
			>
				get in touch
			</button>
		</div>
	);
}

export default withRouter(About);
