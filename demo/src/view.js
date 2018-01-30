import {h} from 'muve';
import {Router, Route} from '../../index';

import {Header} from './components';
import {handleRouteChanged, setRoute} from './model';
import Index from './routes/index';
import Muve from './routes/muve';
import MuveRouter from './routes/muve-router';
import Microenvi from './routes/microenvi';

export default model => (
	<main class="container">
		<Header route={model.route} setRoute={setRoute} />
		<Router model={model} routeChanged={handleRouteChanged}>
			<Route path="/" exact view={Index} />
			<Route path="/muve" view={Muve} />
			<Route path="/muve-router" exact view={MuveRouter} />
			<Route path="/microenvi" exact view={Microenvi} />
		</Router>
	</main>
);