import {h} from 'muve';
import {Router, Route} from '../../index';

import {handleRouteChanged} from './model';
import Index from './routes/index';

export default model => (
	<Router model={model} routeChanged={handleRouteChanged}>
		<Route path="/" exact view={Index} />
	</Router>
);