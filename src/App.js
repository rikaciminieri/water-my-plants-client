import React from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import SignUpPage from './pages/SignUpPage';
import Dashboard from './pages/Dashboard';
import UserDetails from './pages/UserDetails';
import SignInPage from './pages/SignInPage';
import PlantList from './components/PlantList';
import PlantDetails from './components/Plant';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path='/' exact>
					<LandingPage />
				</Route>
				<Route path='/sign-up'>
					<SignUpPage />
				</Route>
				<Route path='/sign-in'>
					<SignInPage />
				</Route>
				<Route path='/dashboard'>
					<Dashboard />
				</Route>
				<Route path='/user-details'>
					<UserDetails />
				</Route>
				<Route path='/plant-list'>
					<PlantList />
				</Route>
				<Route path='/plant/:id'>
					<PlantDetails />
				</Route>
				<Redirect to='/' />
			</Switch>
		</BrowserRouter>
	);
}

export default App;

