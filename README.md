# muve-router
Simple client side router for [muve](https://github.com/fwilkerson/muve)

## Quick start

```javascript
import muve, {h, interact} from 'muve';
import {createRouterActions, Route, Router, routerModel} from 'muve-router';

const initialModel = Object.assign({}, routerModel);

const {getModel, setModel} = interact(initialModel);

const {handleRouteChanged, setRoute} = createRouterActions(getModel, setModel);

const index = model => (
	<section>
		<a onClick={() => setRoute('/about')}>Go to about page</a>
	</section>
);

const about = model => (
	<section>
		<a onClick={() => setRoute('/')}>Go to index page</a>
	</section>
);

const view = model => (
	<Router model={model} routeChanged={handleRouteChanged}>
		<Route path="/" exact view={index} />
		<Route path="/about" view={about} />
	</Router>
);

muve(view, initialModel, document.getElementById('root'));
```