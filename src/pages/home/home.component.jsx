import React, { Component } from "react";
import Intro from "../../components/intro/intro.component";
import Bird from "../../components/bird/bird";
import backImg from "../../assets/clouds-light.5b57244a.jpg";
import AccountLinks from "../../components/account-links/account-links.component";
import Arrow from "../../components/arrow-animation/arrow-animation.component";
import "./home.style.css";
import About from "../../components/about/about.component";

export class Home extends Component {
	handleClick = () => {
		let scrollDistance = document.getElementById("home").clientHeight;

		window.scrollTo(0, scrollDistance);
	};
	render() {
		return (
			<React.Fragment>
				<div
					id="home"
					className="homepage-container"
					style={{ background: `url(${backImg})` }}
				>
					<Bird />
					<Intro />
					<AccountLinks />

					<Arrow onClick={this.handleClick} />
				</div>

				<About />
			</React.Fragment>
		);
	}
}

export default Home;
