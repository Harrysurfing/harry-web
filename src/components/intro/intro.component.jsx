import React, { Component } from "react";
import Typical from "react-typical";
import "./intro.style.css";

export class Intro extends Component {
	render() {
		return (
			<div className="intro-container">
				<p>
					Hi, I'm
					<span className="typical">
						<Typical
							steps={[
								" Harry",
								1500,
								" a software engineer",
								1000,
								" a frontend developer",
								1000,
							]}
							loop={Infinity}
							wrapper="b"
						/>
					</span>
				</p>
			</div>
		);
	}
}

export default Intro;
