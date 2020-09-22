import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Company from './pages/Company';
import Explore from './pages/Explore';
import Support from './pages/Support';
import Team from './pages/Team';
import Notifications from './pages/Notifications';
function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/company" component={Company} />
					<Route path="/explore" component={Explore} />
					<Route path="/support" component={Support} />
					<Route path="/team" component={Team} />
					<Route path="/notifications" component={Notifications} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
