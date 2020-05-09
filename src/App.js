import React from "react";
import "./App.css";
import Home from "./pages/home/home.component";
import Navbar from "./components/navbar/navbar.component";
import Contact from "./pages/contact/contact.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resume from "./pages/resume/resume.component";

function App() {
	return (
		<Router>
			<Switch>
				<div className="App">
					<Navbar />
					<Route exact path="/" component={Home} />
					<Route exact path="/resume" component={Resume} />
					<Route path="/contact" component={Contact} />
				</div>
			</Switch>
		</Router>
	);
}

export default App;
