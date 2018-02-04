import {h} from 'muve';

export const Tab = props => (
	<li onClick={props.tabSelected}>
		<a className={props.active ? "button active" : "button"}>
			{props.text || props.children}
		</a>
	</li>
);