import React, { Component } from "react";
import { Education, Employment } from "./RESUME-DATA";
import "./resume.style.css";
import FlipCard from "../../components/flip-card/flip-card.component";

export class Resume extends Component {
	render() {
		return (
			<div className="resume-container">
				<div className="section">
					<div className="left-column">
						<span className="section-header">education</span>
					</div>
					<div className="details">
						{Education.map((el) => {
							const { id, title, place, time, details, logo } = el;

							return (
								<div className="detail-row" key={id}>
									<div className="card-container">
										<FlipCard
											title={title}
											place={place}
											time={time}
											details={details}
										/>
									</div>
									<div className="logo-container">
										<img src={logo} alt="logo" className="logo" />
									</div>
								</div>
							);
						})}
					</div>
				</div>
				<hr className="divider" />
				<div className="section">
					<div className="left-column">
						<span className="section-header">employment</span>
					</div>
					<div className="details">
						{Employment.map((el) => {
							const { id, title, place, time, details, logo } = el;

							return (
								<div className="detail-row" key={id}>
									<div className="card-container">
										<FlipCard
											title={title}
											place={place}
											time={time}
											details={details}
										/>
									</div>
									<div className="logo-container">
										<img src={logo} alt="logo" className="logo" />
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}

export default Resume;
