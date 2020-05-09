import React, { Component } from "react";
import "./navbar.style.css";
import { withRouter } from "react-router-dom";

export class Navbar extends Component {
	render() {
		const { history, location } = this.props;
		const isHome = location.pathname === "/" ? true : false;

		const styles = {
			container: {
				backgroundColor: `${isHome ? "transparent" : "black"}`,
			},
		};

		const dynamicClass = `${isHome ? "button-black" : "button-white"}`;

		return (
			<div className="nav-container" style={styles.container}>
				<span onClick={() => history.push("/")} className={dynamicClass}>
					home
				</span>
				<span onClick={() => history.push("/resume")} className={dynamicClass}>
					resume
				</span>
				<span onClick={() => history.push("/contact")} className={dynamicClass}>
					contact
				</span>
			</div>
		);
	}
}

export default withRouter(Navbar);
