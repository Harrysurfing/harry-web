import React, { Component } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import DescriptionIcon from "@material-ui/icons/Description";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import "./account-links.style.css";
import IconLinks from "./ICON-LINKS";
import resume from "../../assets/HarryResume.pdf";

export class AccountLinks extends Component {
	render() {
		return (
			<div className="icon-holder">
				<a
					className="icon"
					href={IconLinks.linkedin}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Tooltip title="LinkedIn">
						<IconButton>
							<LinkedInIcon />
						</IconButton>
					</Tooltip>
				</a>
				<a
					className="icon"
					href={IconLinks.github}
					target="_blank"
					rel="noopener noreferrer"
				>
					<Tooltip title="GitHub">
						<IconButton>
							<GitHubIcon />
						</IconButton>
					</Tooltip>
				</a>
				<a className="icon" download href={resume}>
					<Tooltip title="Resume">
						<IconButton>
							<DescriptionIcon />
						</IconButton>
					</Tooltip>
				</a>
			</div>
		);
	}
}

export default AccountLinks;
