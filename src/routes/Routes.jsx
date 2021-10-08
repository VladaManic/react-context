import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import Home from '../containers/pages/Home';
import Add from '../containers/pages/Add';

const Routes = () => {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route exact path='/add/' component={Add} />
		</Switch>
	)
}

export default Routes

