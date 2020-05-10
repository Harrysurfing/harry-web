import React, { Component } from "react";
import "./navbar.style.css";
import { withRouter } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";

export class Navbar extends Component {
	constructor(props) {
		super(props);

		const width = document.body.clientWidth;

		this.state = {
			showNav: width < 768 ? false : true,
		};
	}

	handleClick = () => {
		this.setState({ showNav: !this.state.showNav });
	};

	componentDidMount() {
		window.addEventListener("resize", this.handleResize);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.handleResize);
	}

	handleResize = () => {
		let newWidth = document.body.clientWidth;
		this.setState({ showNav: newWidth < 768 ? false : true });
	};

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
			<React.Fragment>
				<div className="mobile-button" onClick={this.handleClick}>
					<ReorderIcon fontSize="large" />
				</div>
				{this.state.showNav ? (
					<div className="nav-container" style={styles.container}>
						<span onClick={() => history.push("/")} className={dynamicClass}>
							home
						</span>
						<span
							onClick={() => history.push("/resume")}
							className={dynamicClass}
						>
							resume
						</span>
						<span
							onClick={() => history.push("/contact")}
							className={dynamicClass}
						>
							contact
						</span>
					</div>
				) : null}
			</React.Fragment>
		);
	}
}

export default withRouter(Navbar);
