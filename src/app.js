import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Link } from 'react-router';

class About extends React.Component {
	render() {
		return(
			<div>
				<h2> About Me </h2>
			</div>
		)
	}
}

class Contact extends React.Component {
	render() {
		return(
			<h2> Contact Me </h2>
		)
	}
}

class App extends React.Component {
	render() {
		return(
			<div>
				<div>
					<Link to="/"><h1>My Personal Site</h1></Link>
					<Link to="/About">About</Link>
					<Link to="/Contact">Contact</Link>
				</div>
				{this.props.children}
			</div>
		)
	}
}

ReactDOM.render(
<Router history={browserHistory}>
	<Route path="/" component={App}>
	<Route path="/about" component={About} />
	<Route path="/contact" component={Contact} />
	</Route>
</Router>, document.getElementById('app'));








