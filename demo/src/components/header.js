import './header.css';

import {h} from 'muve';

import {Tab} from '.';

export const Header = ({route, setRoute}) => [
	<h4 class="center">@fwilkerson</h4>,
	<ul className="center tabs">
		<Tab active={route.path === '/'} tabSelected={() => setRoute('/')}>
			About Me
		</Tab>
		<Tab active={route.path === '/muve'} tabSelected={() => setRoute('/muve')}>
			Muve
		</Tab>
		<Tab active={route.path === '/muve-router'} tabSelected={() => setRoute('/muve-router')}>
			Muve Router
		</Tab>
		<Tab active={route.path === '/microenvi'} tabSelected={() => setRoute('/microenvi')}>
			Microenvi
		</Tab>
	</ul>
];