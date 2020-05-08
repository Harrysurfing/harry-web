import React, { Component } from "react";
import "./contact.style.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

class Contact extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "",
			email: "",
			message: "",
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const { name, email, message } = this.state;
		if (name === "") {
			window.alert("Please enter your name.");
			return false;
		}
		if (email === "") {
			window.alert("Please enter your email.");
			return false;
		}

		// eslint-disable-next-line
		let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		if (!email.match(mailformat)) {
			window.alert("You have entered an invalid email address!");
			return false;
		}

		if (message === "") {
			window.alert("Please enter your message.");
			return false;
		}

		const templateId = "template_DHsDrunD";
		this.sendFeedback(templateId, {
			message_html: message,
			from_name: name,
			reply_to: email,
		});
	};
	sendFeedback(templateId, contents) {
		window.emailjs
			.send("gmail", templateId, contents)
			.then((res) => {
				window.alert("Your message is sent! Thank you for contacting me.");
			})
			.then(() => {
				this.setState({
					name: "",
					email: "",
					message: "",
				});
			})

			.catch((err) => console.error("error is:", err));
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value }, () => console.log(this.state));
	};

	render() {
		const { name, email, message } = this.state;
		return (
			<div className="contact-container" id="contact">
				<div className="form-container">
					<form
						onSubmit={this.handleSubmit}
						className="form"
						autoComplete="off"
					>
						<TextField
							required
							name="name"
							label="name"
							value={name}
							onChange={this.handleChange}
							variant="filled"
							classes={{ root: "input-field-root" }}
						/>
						<TextField
							required
							name="email"
							label="email"
							value={email}
							onChange={this.handleChange}
							variant="filled"
							classes={{ root: "input-field-root" }}
						/>
						<TextField
							multiline
							required
							name="message"
							label="message"
							value={message}
							rows={4}
							onChange={this.handleChange}
							variant="filled"
							classes={{ root: "input-field-root" }}
						/>
						<Button type="submit" variant="contained">
							send message
						</Button>
					</form>
				</div>
			</div>
		);
	}
}

export default Contact;
